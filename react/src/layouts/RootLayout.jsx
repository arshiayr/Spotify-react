import Footer from "../components/Footer";
import Header from "../components/Header";
import SpotifySidebar from "../components/SpotifySidebar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-black">
      <div className="shrink-0">
        <Header />
      </div>

      <main className="flex flex-1 gap-2 p-2 overflow-hidden">
        <div className="shrink-0 h-full">
          <SpotifySidebar />
        </div>

        <div className="main-view flex-1 overflow-y-auto bg-[#121212] rounded-lg flex flex-col relative custom-scrollbar">
          <div className="main-view-container flex-1 p-6">
            <Outlet />
          </div>

          <div className="shrink-0">
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}

export default RootLayout;
