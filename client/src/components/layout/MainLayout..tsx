import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";

export const MainLayout = () => {
  return (
    <div className="MainLayoutContainer  ">
      {/* nav starts  */}
      {/* <NavBar /> */}
      <h1>nav bar </h1>
      {/* nav ends */}

      {/* child component  */}
      <div className="childComponent mt-[4.2rem] min-h-screen   ">
        <Outlet />
      </div>
      {/* child component  */}

      <Footer />
    </div>
  );
};
