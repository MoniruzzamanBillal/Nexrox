import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";

export const MainLayout = () => {
  return (
    <div className="MainLayoutContainer  ">
      {/* nav starts  */}
      <NavBar />

      {/* nav ends */}

      {/* child component  */}
      <div className="childComponent  min-h-screen   ">
        <Outlet />
      </div>
      {/* child component  */}

      <Footer />
    </div>
  );
};
