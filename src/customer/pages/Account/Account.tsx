import { Divider } from "@mui/material";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Orders from "./Orders";
import OrderDetails from "./OrderDetails";
import UserDetails from "./UserDetails";
import Address from "./Address";
import { useAppDispatch } from "../../../State/Store";
import { logout } from "../../../State/AuthSlice";

const menu = [
  { name: "Profile", path: "/account" },
  { name: "Orders", path: "/account/orders" },
  { name: "Save Cards", path: "/account/save-card" },
  { name: "Addresses", path: "/account/addresses" },
  { name: "Logout", path: "/" },
];

const Account = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const handleClick = (item: any) => {
    if (item.path === "/") {
      dispatch(logout(navigate));
    }
    navigate(item.path);
  };

  return (
    <div className="px-5 lg:px-52 min-h-screen mt-10">
      <div>
        <h1 className="text-xl font-bold pb-5">Sarah</h1>
      </div>
      <Divider />

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:min-h-[78vh]">
        <section className="col-span-1 lg:border-r border-gray-300 lg:pr-5 py-5 h-full">
          {menu.map((item) => (
            <div
              onClick={() => handleClick(item)}
              key={item.name}
              className={`${
                item.path === location.pathname
                  ? "border bg-gray-600 text-white font-display font-bold"
                  : ""
              } py-3 hover:text-white hover:font-bold hover:font-display hover:bg-gray-500 px-5 rounded-md items-center cursor-pointer border-b border-gray-200`}
              //   bg-gradient-to-r from-slate-700 to-slate-800 bg-no-repeat w-full bg-[length:0_3px] hover:bg-[length:170px_3px] bg-left-bottom transition-all duration-500 cursor-pointer h-[70px] px-4 flex
            >
              <p>{item.name}</p>
            </div>
          ))}
        </section>
        <section className="right lg:col-span-2 lg:pl-5 py-5">
          <Routes>
            <Route path="/" element={<UserDetails />} />
            <Route path="/orders" element={<Orders />} />
            <Route
              path="/order/:orderId/:orderItemId"
              element={<OrderDetails />}
            />
            <Route path="/addresses" element={<Address />} />
          </Routes>
        </section>
      </div>
    </div>
  );
};

export default Account;
