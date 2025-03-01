import {
  AccountBalanceWallet,
  AccountBox,
  Dashboard,
  Inventory,
  Logout,
  Receipt,
  ShoppingBag,
} from "@mui/icons-material";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import DrawerList from "../../../component/DrawerList";

const menu = [
  {
    name: "Dashboard",
    path: "/seller",
    icon: <Dashboard className="text-[#acb2c4]" />,
    activeIcon: <Dashboard className="text-white" />,
  },
  {
    name: "Orders",
    path: "/seller/orders",
    icon: <ShoppingBag className="text-[#acb2c4]" />,
    activeIcon: <ShoppingBag className="text-white" />,
  },
  {
    name: "Products",
    path: "/seller/products",
    icon: <Inventory className="text-[#acb2c4]" />,
    activeIcon: <Inventory className="text-white" />,
  },
  {
    name: "Add Product",
    path: "/seller/add-product",
    icon: <LibraryAddIcon className="text-[#acb2c4]" />,
    activeIcon: <LibraryAddIcon className="text-white" />,
  },
  {
    name: "Payment",
    path: "/seller/payment",
    icon: <AccountBalanceWallet className="text-[#acb2c4]" />,
    activeIcon: <AccountBalanceWallet className="text-white" />,
  },
  {
    name: "Transaction",
    path: "/seller/transaction",
    icon: <Receipt className="text-[#acb2c4]" />,
    activeIcon: <Receipt className="text-white" />,
  },
];

const menu2 = [
  {
    name: "Account",
    path: "/seller/account",
    icon: <AccountBox className="text-[#acb2c4]" />,
    activeIcon: <AccountBox className="text-white" />,
  },
  {
    name: "Logout",
    path: "/",
    icon: <Logout className="text-[#acb2c4]" />,
    activeIcon: <Logout className="text-white" />,
  },
];

const SellerDrawerList = ({ toggleDrawer }: { toggleDrawer: any }) => {
  return <DrawerList menu={menu} menu2={menu2} toggleDrawer={toggleDrawer} />;
};

export default SellerDrawerList;
