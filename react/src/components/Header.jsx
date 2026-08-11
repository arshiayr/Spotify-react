import { FaSpotify, FaHome, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-2 bg-black border-b border-gray-800">
      <FaSpotify className="h-10 w-auto" />

      <a href="/" className="ml-4">
        <div className="flex items-center justify-center w-12 h-12 bg-[#1f1f1f] rounded-full hover:bg-[#2a2a2a] transition-colors cursor-pointer">
          <FaHome className="h-6 w-6" />
        </div>
      </a>

      <input
        className="flex-1 max-w-md mx-4 px-4 py-2 bg-[#1f1f1f] text-white placeholder-gray-400 rounded-full border border-transparent focus:border-white focus:outline-none transition-colors"
        id="input-search"
        type="text"
        placeholder="What do you want to play?"
      />

      <div className="flex items-center gap-4 text-sm font-semibold text-gray-300">
        <a href="/premium" className="hover:text-white transition-colors">
          Premium
        </a>
        <a href="/support" className="hover:text-white transition-colors">
          Support
        </a>
        <a href="/download" className="hover:text-white transition-colors">
          Download
        </a>

        <span className="text-gray-600">|</span>

        <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
          <FaDownload className="h-5 w-5" />
          <span>Install App</span>
        </div>

        <Link to="/signup" className="hover:text-white transition-colors">
          Sign up
        </Link>

        <Link to="/login">
          <button
            className="px-6 py-2 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform"
            type="button"
          >
            Log in
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
