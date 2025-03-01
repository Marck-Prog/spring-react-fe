import { FavoriteBorder, Store } from "@mui/icons-material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { mainCategory } from "../../../data/category/mainCategory";
import { useAppSelector } from "../../../State/Store";
import CategorySheet from "./CategorySheet";
import AppHeader from "./AppHeader";
import TopNav from "./TopNav";
import Menu from "../../pages/Menu/Menu";

const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [selectedCategory, setSelectedCategory] = useState("men");
  const [showCategorySheet, setShowCategorySheet] = useState(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [didMount, setDidMount] = useState<boolean>(false);
  const navigate = useNavigate();
  const { auth } = useAppSelector((store) => store);

  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    if (offset > 30) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [setScrolled]);

  useEffect(() => {
    setDidMount(true);
    window.addEventListener("scroll", handleScroll);
    return () => setDidMount(false);
  }, [handleScroll]);

  if (!didMount) {
    return null;
  }

  return (
    <>
      <AppHeader />

      <a
        href="#main-content"
        className="whitespace-nowrap absolute z-50 left-4 opacity-90 rounded-md bg-white px-4 py-3 transform -translate-y-40 focus:translate-y-0 transition-all duration-300"
      >
        Skip to main content
      </a>

      <TopNav />

      <div
        className={`${
          scrolled ? "bg-white sticky top-0 shadow-md z-50" : "bg-transparent"
        } w-full z-50 h-20 relative`}
      >
        <div className="app-max-width w-full">
          <div className="flex justify-between align-baseline app-x-padding py-6">
            {/* Hamburger Menu and Mobile Nav */}
            <div className="flex-1 lg:flex-0 lg:hidden">
              <Menu />
            </div>

            {/* Left Nav */}
            <ul className="flex-0 lg:flex-1 flex ml-8 my-6">
              {mainCategory.map((item) => (
                <li
                  key={item.categoryId}
                  onMouseEnter={() => {
                    setShowCategorySheet(true);
                    setSelectedCategory(item.categoryId);
                  }}
                  onMouseLeave={() => {
                    setShowCategorySheet(false);
                  }}
                  className="mr-12 hidden lg:block whitespace-nowrap hover:text-gray-400"
                >
                  {item.name}
                </li>
              ))}
            </ul>

            <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-fit gap-9">
              <div className="flex items-center space-x-2">
                <div aria-hidden="true" className="flex space-x-1">
                  <div className="size-4 rounded-full bg-gray-900 dark:bg-secondary"></div>
                  <div className="h-6 w-2 bg-secondary">
                    {" "}
                    {!isLarge && (
                      <IconButton>
                        <MenuIcon />
                      </IconButton>
                    )}
                  </div>
                </div>

                <h1
                  onClick={() => navigate("/")}
                  className="logo text-secondary cursor-pointer text-lg font-bold md:text-2xl"
                >
                  Juan Graphico
                </h1>
              </div>
            </div>
            <div className="flex gap-1 lg:gap-6 items-center">
              <IconButton>
                <SearchIcon />
              </IconButton>
              {auth.user ? (
                <Button
                  onClick={() => navigate("/account/orders")}
                  className="flex items-center gap-2"
                >
                  <Avatar
                    sx={{ width: 29, height: 29 }}
                    src="https://imgs.search.brave.com/0T82UtGZ1MJKNUs52cZ1xwH-vaXD2OELuZMouLFaxjI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1jZG4uaHlwYi5z/dC9odHRwczovL2h5/cGViZWFzdC5jb20v/aW1hZ2UvMjAyNC8x/Mi8yMy9rYWlqdS1u/by04LXNlYXNvbi0y/LWFuaW1lLTIwMjUt/c3VtbWVyLXByZW1p/ZXJlLWluZm8tMDAw/LmpwZz9maXQ9bWF4/JmNicj0xJnE9OTAm/dz03NTAmaD01MDA"
                  />
                  <h1 className="font-bold hidden lg:block !primary-text first-letter:uppercase lowercase ">
                    Hi, {auth.user?.fullName}
                  </h1>
                </Button>
              ) : (
                <Button
                  onClick={() => navigate("/login")}
                  variant="contained"
                  className="!primary-bg"
                >
                  Login
                </Button>
              )}
              <IconButton onClick={() => navigate("/wishlist")}>
                <FavoriteBorder
                  sx={{ fontSize: 29 }}
                  className="!text-orange-500"
                />
              </IconButton>
              <IconButton onClick={() => navigate("/cart")}>
                <LocalMallIcon
                  className="!text-orange-500"
                  sx={{ fontSize: 29 }}
                />
              </IconButton>

              {isLarge && (
                <Button
                  onClick={() => navigate("/become-seller")}
                  startIcon={<Store />}
                  variant="contained"
                  className="!primary-bg"
                >
                  Become Seller
                </Button>
              )}
            </div>
          </div>
          {showCategorySheet && (
            <div
              onMouseEnter={() => setShowCategorySheet(true)}
              onMouseLeave={() => setShowCategorySheet(false)}
              className="categorySheet absolute top-[4.41rem] left-20 right-20 "
            >
              <CategorySheet selectedCategory={selectedCategory} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
