import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      toast.success("Form submitted successfully!", {
        position: "top-right", // Right side at the top
        autoClose: 3000,
      });
      setFormData({ name: '', email: '' });
      setErrors({});
    } else {
      setErrors(validationErrors);
      toast.error("Please correct the highlighted errors", {
        position: "top-right", // Right side at the top
        autoClose: 3000,
      });
    }
  };
  
  return (
    <div className="container mx-auto">
      <ToastContainer /> 
      <div className="flex flex-col md:flex-row items-center justify-center h-screen">
        <div className="bg-green-200 shadow-lg rounded-lg p-8 mb-6 md:mb-0 md:w-1/2 md:mr-4 flex flex-col items-center h-full m-0 justify-center">
          <h2 className="text-2xl font-bold mb-4">Information Section</h2>
          <p className="text-center mb-4">
            Please fill in the details below. Ensure your email is valid.
          </p>
        </div>

        <div className="p-8 md:w-1/2 flex flex-col">
          <h2 className="text-2xl font-bold mb-4 text-center">Content Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs bg-red-100 p-2 transition-opacity duration-500 ease-in-out opacity-100">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs bg-red-100 p-2 transition-opacity duration-500 ease-in-out opacity-100">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="flex items-center justify-center">
              <button type="submit" className="bg-green-300 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
