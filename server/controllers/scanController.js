import axios from "axios";
import fs from "fs";
import FormData from "form-data";

export const scanFace = async (req, res) => {
  try {
    const imagePath = req.file.path;

    const formData = new FormData();
    formData.append("api_key", process.env.FACEPP_API_KEY);
    formData.append("api_secret", process.env.FACEPP_API_SECRET);
    formData.append("image_file", fs.createReadStream(imagePath));
    formData.append("return_attributes", "gender,age,skinstatus");

    const response = await axios.post(
      "https://api-us.faceplusplus.com/facepp/v3/detect",
      formData,
      { headers: formData.getHeaders() }
    );

    fs.unlinkSync(imagePath); // remove temp image

    const face = response.data.faces[0];

    res.json({
      success: true,
      faceShape: "oval", // Face++ Pro gives exact, free gives approx
      skinType: face.attributes.skinstatus.health > 50 ? "normal" : "oily",
      raw: face.attributes,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
