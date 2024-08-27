import { useState } from "react";
import { BACKEND_URL } from "../../config";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  useNavigate } from "react-router-dom";

const Signup = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    resume: null as File | null,
  });
const navigate = useNavigate();
  const [error, setError] = useState("");

  // Handler for input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  // Handler for file input
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prevInput) => ({
      ...prevInput,
      resume: e.target.files ? e.target.files[0] : null,
    }));
  };

  // Handler for form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!input.name || !input.email || !input.password || !input.resume) {
      setError("All fields are required, including resume.");
      return;
    }

    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("resume", input.resume);

    try {
      const response = await axios.post(`${BACKEND_URL}/users`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200 || response.status === 201) {
        toast.success("Signup successful");
        setError(""); // Clear any previous errors
        navigate("/")
      } else {
        console.error("Signup failed");
        setError("Signup failed, please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setError("An error occurred during signup, please try again.");
    }
  };

  return (
    <div>
      <div className="flex min-h-screen w-screen w-full bg-gradient-to-r from-gray-800 to-gray-900 items-center justify-center text-gray-600 bg-gray-50">
        <div className="relative">
          <div className="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
            <div className="flex-auto p-6">
              <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                <a
                  href="#"
                  className="flex cursor-pointer items-center gap-2 text-indigo-500 no-underline hover:text-indigo-500"
                >
                  <span className="flex-shrink-0 text-3xl font-black tracking-tight opacity-100">
                    YourHR.
                  </span>
                </a>
              </div>

              <h4 className="mb-2 font-medium text-gray-700 xl:text-xl">
                Welcome to YourHR
              </h4>
              <p className="mb-6 text-gray-500">
                Please sign-up and submit your resume
              </p>

              {/* Display Error Message */}
              {error && (
                <div className="mb-4 text-red-500 text-sm">
                  {error}
                </div>
              )}

              <form id="" className="mb-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={input.name}
                    onChange={handleInputChange}
                    className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                    placeholder="Enter your username"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={input.email}
                    onChange={handleInputChange}
                    className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={input.password}
                    onChange={handleInputChange}
                    className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                    placeholder="············"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="resume"
                    className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                  >
                    Resume
                  </label>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleFileChange}
                    className="block w-full cursor-pointer rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                  />
                </div>
                <div className="mb-4">
                  <button
                    className="grid w-full cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
              {/* Toast Container */}
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
