import { Divider, ListItemIcon, ListItemText } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../State/Store";
import { logout } from "../State/AuthSlice";

interface menuItem {
  name: string;
  path: string;
  icon: any;
  activeIcon: any;
}

interface DrawerListProp {
  menu: menuItem[];
  menu2: menuItem[];
  toggleDrawer: () => void;
}

const DrawerList = ({ menu, menu2, toggleDrawer }: DrawerListProp) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => [dispatch(logout(navigate))];

  return (
    <div className="h-full">
      <div className="flex flex-col justify-between h-full w-[300px] border-r border-gray-200 py-5">
        <div className="space-y-2">
          {menu.map((item, index: number) => (
            <div
              onClick={() => navigate(item.path)}
              className="px-4 cursor-pointer"
              key={index}
            >
              <p
                className={`${
                  item.path == location.pathname
                    ? "bg-[#7a8ac0] text-white"
                    : "text-[#acb2c4]"
                } flex items-center px-5 py-3 w-full rounded-md`}
              >
                <ListItemIcon>
                  {item.path == location.pathname ? item.activeIcon : item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </p>
            </div>
          ))}
        </div>
        <Divider variant="middle" className="bg-[#7a8ac0]" />
        <div className="space-y-2">
          {menu2.map((item, index: number) => (
            <div
              onClick={() => {
                navigate(item.path);
                if (item.path == "/") handleLogout();
              }}
              className="px-4 cursor-pointer"
              key={index}
            >
              <p
                className={`${
                  item.path == location.pathname
                    ? "bg-[#7a8ac0] text-white"
                    : "text-[#acb2c4]"
                } flex items-center px-5 py-3 w-full rounded-md`}
              >
                <ListItemIcon>
                  {item.path == location.pathname ? item.activeIcon : item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DrawerList;
