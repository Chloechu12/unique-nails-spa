import { Outlet } from "react-router-dom";
import Navbar from "@/components/narbar";
import { Footer } from "@/components/footer";


const RootLayout = () => {
  return (
  <div className="min-h-svh w-full min-w-0 overflow-x-hidden bg-background text-foreground">
    <Navbar />

    <main>
      <Outlet />
    </main>

    <Footer />
  </div>
);
}

export default RootLayout;
