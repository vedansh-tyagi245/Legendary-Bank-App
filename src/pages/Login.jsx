import React, { useState } from "react";
import { TEInput, TERipple } from "tw-elements-react";
import DancingSticker from "../assets/DancingSticker.gif";
import Logo from "../assets/logo.svg";
import DecorativeElement from "../components/DecorativeElements";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:4000/api/v1/login/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to home/dashboard or another page
        navigate("/dashboard");
      } else {
        // Handle server-side errors (e.g., invalid credentials)
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setError("An error occurred while logging in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="h-screen">
      <DecorativeElement />
      <div className="container h-full p-10 text-white">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-white0">
          <div className="w-full">
            <div className="block rounded-lg shadow-lg">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* Left column container */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    <Link to={'/'} className="text-white inline bg-blue-700 text-lg rounded px-4 py-1">{"<-Back"}</Link>
                    {/* Logo */}
                    <div className="text-center">
                      <img className="mx-auto w-20" src={Logo} alt="logo" />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        We are The Unity Bank
                      </h4>
                    </div>

                    <form onSubmit={handleLogin}>
                      <p className="mb-4">Please login to your account</p>
                      {/* Email input */}
                      <TEInput
                        type="text"
                        label="Email"
                        className="mb-4"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />

                      {/* Password input */}
                      <TEInput
                        type="password"
                        label="Password"
                        className="mb-4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />

                      {/* Error message */}
                      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                      {/* Submit button */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <TERipple rippleColor="light" className="w-full">
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="submit"
                            style={{
                              background: "linear-gradient(to right, #1e3c72, #2a5298)",
                            }}
                            disabled={loading}
                          >
                            {loading ? "Logging in..." : "Log in"}
                          </button>
                        </TERipple>

                        {/* Forgot password link */}
                        <a href="#!">Forgot password?</a>
                      </div>

                      {/* Register button */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        <TERipple rippleColor="light">
                          <Link
                            type="button"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            to={"/register"}
                          >
                            Register
                          </Link>
                        </TERipple>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Right column with background */}
                <div
                  className="hidden lg:flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none border-l-2"
                  style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <img src={DancingSticker} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
