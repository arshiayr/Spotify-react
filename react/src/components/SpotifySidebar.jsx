import { useState } from "react";

const footerLinks = [
  { label: "Legal", href: "https://www.spotify.com/us/legal/" },
  {
    label: "Safety & Privacy Center",
    href: "https://www.spotify.com/us/safetyandprivacy/",
  },
  {
    label: "Privacy Policy",
    href: "https://www.spotify.com/us/legal/privacy-policy/",
  },
  {
    label: "Cookies",
    href: "https://www.spotify.com/us/legal/cookies-policy/",
  },
  {
    label: "About Ads",
    href: "https://www.spotify.com/us/legal/privacy-policy/#s3",
  },
  { label: "Accessibility", href: "https://www.spotify.com/us/accessibility/" },
  {
    label: "Notice at Collection",
    href: "https://www.spotify.com/us/legal/notice-at-collection/",
  },
];

const SpotifySidebar = () => {
  const [sidebarWidth, setSidebarWidth] = useState(420);

  return (
    <div
      className="h-full bg-black p-2 flex"
      style={{ width: `${sidebarWidth}px` }}
    >
      <nav
        aria-label="Main"
        className="flex flex-col bg-[#121212] rounded-lg w-full h-full text-[#b3b3b3] font-sans"
      >
        <header className="flex items-center justify-between px-4 py-3 shadow-[0_6px_10px_rgba(0,0,0,0.3)] z-10">
          <button className="flex items-center gap-3 hover:text-white transition-colors duration-200 group font-bold text-base">
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-current group-hover:fill-white transition-colors duration-200"
            >
              <path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z" />
            </svg>
            Your Library
          </button>

          <button
            type="button"
            aria-label="Create"
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#1a1a1a] hover:text-white transition-colors duration-200"
          >
            <svg
              role="img"
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="w-4 h-4 fill-current"
            >
              <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75" />
            </svg>
          </button>
        </header>

        <div className="flex-1 overflow-y-auto overflow-x-hidden pt-2 px-2 custom-scrollbar">
          <section className="bg-[#242424] rounded-lg p-4 mb-4 flex flex-col gap-5 items-start">
            <div className="flex flex-col gap-1 text-white">
              <span className="font-bold text-[15px]">
                Create your first playlist
              </span>
              <span className="text-[13px]">It's easy, we'll help you</span>
            </div>
            <button className="bg-white text-black font-bold text-sm px-4 py-1.5 rounded-full hover:scale-105 transition-transform duration-200">
              Create playlist
            </button>
          </section>

          <section className="bg-[#242424] rounded-lg p-4 mb-4 flex flex-col gap-5 items-start">
            <div className="flex flex-col gap-1 text-white">
              <span className="font-bold text-[15px]">
                Let's find some podcasts to follow
              </span>
              <span className="text-[13px]">
                We'll keep you updated on new episodes
              </span>
            </div>
            <a
              href="/genre/podcasts-web"
              className="bg-white text-black font-bold text-sm px-4 py-1.5 rounded-full hover:scale-105 transition-transform duration-200"
            >
              Browse podcasts
            </a>
          </section>
        </div>

        <div className="px-6 pb-8 pt-4 mt-auto">
          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-[11px] hover:underline"
              >
                {link.label}
              </a>
            ))}

            <button className="text-[11px] hover:underline flex items-center">
              Your Privacy Choices
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 14"
                className="w-[25px] ml-1 relative top-[1px]"
              >
                <path
                  d="M7.4 12.8h6.8l3.1-11.6H7.4C4.2 1.2 1.6 3.8 1.6 7s2.6 5.8 5.8 5.8z"
                  style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "#fff",
                  }}
                />
                <path
                  d="M22.6 0H7.4c-3.9 0-7 3.1-7 7s3.1 7 7 7h15.2c3.9 0 7-3.1 7-7s-3.2-7-7-7zm-21 7c0-3.2 2.6-5.8 5.8-5.8h9.9l-3.1 11.6H7.4c-3.2 0-5.8-2.6-5.8-5.8z"
                  style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "#0066ff",
                  }}
                />
                <path
                  d="M24.6 4c.2.2.2.6 0 .8L22.5 7l2.2 2.2c.2.2.2.6 0 .8-.2.2-.6.2-.8 0l-2.2-2.2-2.2 2.2c-.2.2-.6.2-.8 0-.2-.2-.2-.6 0-.8L20.8 7l-2.2-2.2c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0l2.2 2.2L23.8 4c.2-.2.6-.2.8 0z"
                  fill="#fff"
                />
                <path
                  d="M12.7 4.1c.2.2.3.6.1.8L8.6 9.8c-.1.1-.2.2-.3.2-.2.1-.5.1-.7-.1L5.4 7.7c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0L8 8.6l3.8-4.5c.2-.2.6-.2.9 0z"
                  fill="#0066ff"
                />
              </svg>
            </button>
            <a
              href="https://www.spotify.com/legal/cookies-policy/"
              className="text-[11px] hover:underline"
            >
              Cookies
            </a>
          </div>

          <button className="flex items-center gap-1 border border-[#878787] rounded-full px-3 py-1 text-sm font-bold text-white hover:scale-105 hover:border-white transition-all duration-200">
            <svg
              role="img"
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="w-4 h-4 fill-current"
            >
              <path d="M8.152 16H8a8 8 0 1 1 .152 0m-.41-14.202c-.226.273-.463.713-.677 1.323-.369 1.055-.626 2.496-.687 4.129h3.547c-.06-1.633-.318-3.074-.687-4.129-.213-.61-.45-1.05-.676-1.323-.194-.235-.326-.285-.385-.296h-.044c-.055.007-.19.052-.391.296M4.877 7.25c.062-1.771.34-3.386.773-4.624q.148-.427.329-.806a6.51 6.51 0 0 0-4.436 5.43zm-3.334 1.5a6.51 6.51 0 0 0 4.436 5.43 8 8 0 0 1-.33-.806c-.433-1.238-.71-2.853-.772-4.624zm4.835 0c.061 1.633.318 3.074.687 4.129.214.61.451 1.05.677 1.323.202.244.336.29.391.297l.044-.001c.06-.01.19-.061.385-.296.226-.273.463-.713.676-1.323.37-1.055.626-2.496.687-4.129zm5.048 0c-.061 1.771-.339 3.386-.772 4.624q-.123.353-.268.674a6.5 6.5 0 0 0 4.071-5.298zm3.031-1.5a6.51 6.51 0 0 0-4.071-5.298q.145.322.268.674c.433 1.238.711 2.853.772 4.624z" />
            </svg>
            English
          </button>
        </div>
      </nav>

      <div className="w-1 cursor-col-resize group flex items-center justify-center -ml-[2px] z-20">
        <div className="w-[1px] h-full bg-transparent group-hover:bg-[#4a4a4a] transition-colors" />
        <label className="sr-only">
          Resize main navigation
          <input
            type="range"
            min="280"
            max="420"
            step="10"
            value={sidebarWidth}
            onChange={(e) => setSidebarWidth(Number(e.target.value))}
          />
        </label>
      </div>
    </div>
  );
};

export default SpotifySidebar;
