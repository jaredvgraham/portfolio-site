"use client";
import axios from "axios";
import React, { useState } from "react";

const ContactForm = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSubmitting(true);
    try {
      const res = await axios.post("/api/contact", formData);
      console.log(res.data);
      setSubmitting(false);
      setError("");

      setSuccess(res.data.message);
    } catch (error: any) {
      setError(error.response.data.message);
      setSuccess("");
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center m-2  text-gray-300 p-4 ">
      <div className="sm:w-11/12 md:w-2/3  white-shadow-md rounded-lg p-8">
        <h1 className="text-5xl font-bold text-center text-gray-300">
          Contact Me
        </h1>
        <form className="mt-8">
          <label htmlFor="name" className="text-xl text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 mt-2 rounded-lg bg-transparent outline"
          />
          <label htmlFor="email" className="text-xl text-gray-300 mt-4">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-2 mt-2 rounded-lg bg-transparent outline"
          />
          <label htmlFor="message" className="text-xl text-gray-300 mt-4">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full p-2 mt-2 rounded-lg bg-transparent outline"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-gray-800 text-white p-2 rounded-lg mt-4"
          >
            Submit
          </button>
          {error && <p className="text-red-500 mt-4">{error}</p>}
          {success && <p className="text-green-500 mt-4">{success}</p>}
          {submitting && <p className="text-gray-300 mt-4">Submitting...</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
