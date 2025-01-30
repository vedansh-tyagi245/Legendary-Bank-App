import React, { useState } from "react";
import DecorativeElements from "../components/DecorativeElements"
import HomePageNavbar from "../components/HomePageNavbar"
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormRegistration = () => {
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(true);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        try {
            const response = await fetch("http://localhost:4000/api/v1/registration/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Registration successful!");
                setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    password: "",
                    confirmPassword: "",
                });
                navigate('/login');
            } else {
                toast.error(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error("Error during registration:", error);
            toast.error("An error occurred while submitting the form.");
        }
    };

    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
            <div className="page h-screen">
                <DecorativeElements />
                <HomePageNavbar />
                <div className="flex flex-col justify-center items-center w-full" style={{ "paddingLeft": "1.25rem", "paddingRight": "1.25rem", marginTop: "10px" }}>
                    <div
                        className={`xl:max-w-3xl flex-col justify-center items-center w-full sm:p-10 rounded-md`}
                        style={{ "padding": "1.25rem" }}
                    >
                        <h1
                            className={`text-center text-xl sm:text-3xl font-semibold ${darkMode ? "text-white" : "text-black"
                                }`}
                        >
                            Register for a free account
                        </h1>
                        <div className="w-full flex justify-center items-center" style={{ "marginTop": "2rem" }}>
                            <form className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4" autoComplete="new-password">
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        className={`w-[300px] sm:w-[700px] rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none  focus:border-2  focus:outline ${darkMode
                                            ? "bg-[#302E30] text-white focus:border-white"
                                            : "bg-gray-100 text-black focus:border-black"
                                            }`}
                                        style={{ "paddingTop": "0.75rem", "paddingBottom": "0.75rem", "paddingLeft": "1.25rem", "paddingRight": "1.25rem" }}
                                        type="text"
                                        placeholder="Your full name"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        name="fullName"
                                        autoComplete="new-password"
                                    />
                                </div>
                                <input
                                    className={`w-full rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                        ? "bg-[#302E30] text-white focus:border-white"
                                        : "bg-gray-100 text-black focus:border-black"
                                        }`}
                                    style={{ "paddingTop": "0.75rem", "paddingBottom": "0.75rem", "paddingLeft": "1.25rem", "paddingRight": "1.25rem" }}
                                    type="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    name="email"
                                    autoComplete="new-password"
                                />
                                <input
                                    className={`w-full rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                        ? "bg-[#302E30] text-white focus:border-white"
                                        : "bg-gray-100 text-black focus:border-black"
                                        }`}
                                    style={{ "paddingTop": "0.75rem", "paddingBottom": "0.75rem", "paddingLeft": "1.25rem", "paddingRight": "1.25rem" }}
                                    type="tel"
                                    placeholder="Enter your phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    name="phone"
                                    autoComplete="new-password"
                                />
                                <input
                                    className={`w-full rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                        ? "bg-[#302E30] text-white focus:border-white"
                                        : "bg-gray-100 text-black focus:border-black"
                                        }`}
                                    style={{ "paddingTop": "0.75rem", "paddingBottom": "0.75rem", "paddingLeft": "1.25rem", "paddingRight": "1.25rem" }}
                                    type="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    name="password"
                                    autoComplete="new-password"
                                />
                                <input
                                    className={`w-full rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                        ? "bg-[#302E30] text-white focus:border-white"
                                        : "bg-gray-100 text-black focus:border-black"
                                        }`}
                                    style={{ "paddingTop": "0.75rem", "paddingBottom": "0.75rem", "paddingLeft": "1.25rem", "paddingRight": "1.25rem" }}
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    name="confirmPassword"
                                    autoComplete="new-password"
                                />
                                <button className="tracking-wide font-semibold bg-[#E9522C] text-gray-100 w-full rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none" style={{ "marginTop": "1.25rem", "paddingTop": "1rem", "paddingBottom": "1rem" }} onClick={handleSubmit}>
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        style={{ "marginLeft": "-0.5rem" }}
                                    >
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="8.5" cy="7" r="4" />
                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span className="" style={{ "marginLeft": "0.75rem" }}>Register</span>
                                </button>
                                <p className="text-xs text-gray-600 text-center" style={{ "marginTop": "1.5rem" }}>
                                    Already have an account?{" "}
                                    <a href="">
                                        <Link to={'/login'} className="text-[#E9522C] font-semibold">Login</Link>
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default FormRegistration;