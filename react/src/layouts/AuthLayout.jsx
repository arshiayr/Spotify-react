import { FaSpotify } from "react-icons/fa";
import { Outlet } from "react-router-dom";
const AuthLayout = () => {
  return (
    <main className="bg-[#121212] absolute top-0 left-0 flex flex-col w-full min-h-full break-words overflow-auto pt-20 justify-between ">
      <header className="flex items-center justify-center px-[32px] pb-[4px] min-h-[48px] overflow-hidden">
        <div className="h-8">
          <FaSpotify className="h-10 w-auto" />
        </div>
      </header>
      <Outlet />
      <footer className="mx-auto w-full max-w-[400px] flex items-center justify-center  ">
        <div class=" text-white p-4 text-center ">
          <p class="text-xs text-gray-400">
            This site is protected by reCAPTCHA and the Google
            <a href="https://policies.google.com/privacy" class="underline" rel="noopener noreferrer" target="_blank">
              Privacy Policy
            </a>
            and
            <a href="https://policies.google.com/terms" class="underline" rel="noopener noreferrer" target="_blank">
              Terms of Service
            </a>
            apply.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default AuthLayout;
