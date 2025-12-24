import axios from "axios";

export default function ImageUpload({ setImage }) {
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    const res = await axios.post(
      "http://localhost:5000/api/upload",
      formData
    );

    setImage(res.data.imageUrl);
  };

  return <input type="file" accept="image/*" onChange={handleUpload} />;
}
