import axios from "axios";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // 🔥 THIS FIXES SCROLL ISSUE

    await axios.post("http://localhost:5000/api/contact", form);

    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="min-h-screen py-24 bg-linear-to-br from-pink-200 via-purple-200 to-indigo-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white dark:bg-slate-800 transition disabled:opacity-50 p-8 rounded-2xl shadow-xl"
      >
        <h2 className="text-3xl font-bold text-center mb-6  bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">Contact Us</h2>

        <input
          required
          placeholder="Name"
          className="w-full mb-4 p-3 rounded border text-black dark:text-white"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          required
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 rounded border text-black dark:text-white"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <textarea
          required
          placeholder="Message"
          rows="4"
          className="w-full mb-4 p-3 rounded border text-black dark:text-white"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-3 rounded-xl hover:bg-pink-600"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
