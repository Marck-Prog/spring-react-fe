import { useEffect } from "react";
import AdminRoutes from "../../../Routes/AdminRoutes";
import { useAppDispatch } from "../../../State/Store";
import AdminDrawerList from "../../components/AdminDrawerList";
import { fetchHomeCategories } from "../../../State/admin/adminSlice";

const AdminDashboard = () => {
  const toggleDrawer = () => {};
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHomeCategories());
  }, []);

  return (
    <div>
      <div className="lg:flex lg:h-[90vh]">
        <section className="hidden lg:block h-full bg-[#4C5E9A]">
          <AdminDrawerList toggleDrawer={toggleDrawer} />
        </section>

        <section className="p-10 w-full lg:w-[80%] overflow-auto">
          <AdminRoutes />
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
