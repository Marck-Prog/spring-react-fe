import SellerRoutes from "../../../Routes/SellerRoutes";
import SellerDrawerList from "../../components/SellerDrawerList/SellerDrawerList";

const SellerDashboard = () => {
  const toggleDrawer = () => {};

  return (
    <div>
      <div className="lg:flex lg:h-[90vh]">
        <section className="hidden lg:block h-full bg-[#4C5E9A]">
          <SellerDrawerList toggleDrawer={toggleDrawer} />
        </section>

        <section className="p-10 w-full lg:w-[80%] overflow-auto">
          <SellerRoutes />
        </section>
      </div>
    </div>
  );
};

export default SellerDashboard;
