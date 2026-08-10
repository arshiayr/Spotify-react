import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

// Exact Spotify Error Icon SVG Component
const ErrorIcon = () => (
  <svg data-encore-id="icon" role="img" aria-label="Error:" aria-hidden="false" className="w-4 h-4 fill-[#f3727f] shrink-0" viewBox="0 0 16 16">
    <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"></path>
    <path d="M7.25 9V4h1.5v5zm0 3.026v-1.5h1.5v1.5z"></path>
  </svg>
);

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const SpotifyLogin = () => {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState("");

  const validate = () => {
    if (!email.trim()) {
      setError("Please enter your email address.");
    } else if (!isValidEmail(email)) {
      setError("That doesn't look like a valid email address.");
    } else {
      setError("");
    }
  };

  const handleBlur = () => {
    setIsFocused(false);

    validate();
    if (email || error) validate();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    if (!error && isValidEmail(email)) { }
  };

  const showError = Boolean(error);

  return (
    <div className="bg-[#121212] flex items-center justify-center p-4 font-sans text-white ">
      <div className="w-full max-w-[324px] animate-fade-in">
        <h1 className="text-[48px] font-bold text-center mb-8 tracking-tight">
          Welcome back
        </h1>

        <form onSubmit={handleSubmit} className="mb-6" noValidate>
          <div className="mb-4">
            <label
              htmlFor="username"
              className={`block mb-2 text-sm font-bold transition-colors duration-200 ${showError
                ? "text-[#f3727f]"
                : isFocused
                  ? "text-[#1ed760]"
                  : "text-white"
                }`}
            >
              Email address
            </label>

            <input id="username" type="email" name="username" placeholder="name@domain.com" autoComplete="username" requiredaria-invalid={showError} aria-describedby={showError ? "email-error" : undefined} value={email} onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
              onFocus={() => setIsFocused(true)}
              onBlur={handleBlur}
              className={`w-full h-12 px-4 rounded-md bg-transparent border-2text-base text-white placeholder-gray-400outline-none transition-all duration-200${showError ? "border-[#f3727f] bg-[#2a2a2a]" : isFocused ? "border-white bg-[#2a2a2a]" : "border-[#727272] hover:border-[#919191]"}`} />
            {showError && (
              <div id="email-error" className="flex items-center gap-2 mt-2 animate-fade-in" role="alert">
                <ErrorIcon />
                <span
                  className="text-[#f3727f] text-xs font-bold leading-tight"
                >
                  {error}
                </span>
              </div>
            )}
          </div>

          <button type="submit" className="w-full h-12 mt-4 rounded-full bg-[#1ed760] text-blackfont-bold text-base tracking-widehover:bg-[#1fdf64] hover:scale-[1.02] active:scale-[0.98]transition-all duration-200 ease-outfocus:outline-none focus:ring-2 focus:ring-[#1ed760] focus:ring-offset-2 focus:ring-offset-[#121212]">
            Continue
          </button>
        </form>

        <div className="flex items-center gap-4 mb-6">
          <div className="h-px bg-[#727272] flex-1" />
          <span className="text-[#b3b3b3] text-base">or</span>
          <div className="h-px bg-[#727272] flex-1" />
        </div>

        <div className="space-y-3 mb-8">
          {[
            { icon: <FcGoogle size={24} />, label: "Sign up with Google" },
            { icon: <FaFacebook size={24} />, label: "Sign up with Facebook" },
            {
              icon: <FaApple size={24} className="text-white" />,
              label: "Sign up with Apple",
            },
          ].map((provider) => (
            <a key={provider.label}
              href="#"
              className="flex items-center justify-center gap-3 w-full h-12rounded-full border border-[#727272] bg-transparent text-white font-bold text-basehover:scale-105 hover:border-white hover:bg-[#2a2a2a]transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#121212]">{provider.icon}
              <span>{provider.label}</span>
            </a>
          ))}
        </div>
        <div className="border-t border-[#727272] pt-6 text-center">
          <p className="text-[#b3b3b3] text-base flex items-center justify-center gap-3 flex-col">
            Don't have an account?{" "}
            <Link to="/signup" className="inline-block ml-1 text-white font-bold underlinedecoration-2 underline-offset-4 decoration-white/70hover:decoration-white hover:text-[#1ed760]transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1ed760] rounded-sm">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpotifyLogin;
