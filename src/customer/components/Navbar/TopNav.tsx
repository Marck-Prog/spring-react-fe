import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import DownArrow from "../../../assets/icons/DownArrow";
import FacebookLogo from "../../../assets/icons/FacebookLogo";
import InstagramLogo from "../../../assets/icons/InstagramLogo";

type LinkProps = {
  href: string;
  locale: "en" | "fr";
  children: React.ReactNode;
  active: boolean;
};

const MyLink: React.FC<LinkProps> = ({ href, locale, children, active }) => {
  return (
    <NavLink
      to={href}
      className={`py-2 px-4 text-center ${
        active ? "bg-gray200 text-gray500" : "bg-white text-gray500"
      }`}
    >
      {children}
    </NavLink>
  );
};

const TopNav = () => {
  const [locale, setLocale] = useState("en");
  const [currency, setCurrency] = useState<"usd" | "mmk">("usd");

  const handleLocaleChange = (newLocale: "en" | "fr") => {
    setLocale(newLocale);
  };

  const handleCurrencyChange = (newCurrency: "usd" | "mmk") => {
    setCurrency(newCurrency);
  };

  return (
    <div className="bg-gray500 text-gray100 hidden lg:block text-center px-10 py-1">
      <div className="flex justify-between app-max-width">
        {/* Left Section - Social Media & Links */}
        <ul className="flex ml-8">
          <li className="text-xs my-2 mr-4 hover:text-gray300">
            <a href="#" aria-label="Haru Fashion Facebook Page">
              <FacebookLogo />
            </a>
          </li>
          <li className="text-xs my-2 mr-4 hover:text-gray300">
            <a href="#" aria-label="Haru Fashion Instagram Account">
              <InstagramLogo />
            </a>
          </li>
          <li className="text-xs my-2 mr-4 hover:text-gray300">
            <a href="#">
              {/* {intl.formatMessage({ id: "Navigation.about_us" })} */}
              About Us
            </a>
          </li>
          <li className="text-xs my-2 mr-4 hover:text-gray300">
            <a href="#">
              {/* {intl.formatMessage({ id: "Navigation.our_policy" })} */}
              Our Policy
            </a>
          </li>
        </ul>

        {/* Language & Currency Dropdowns (for better UI) */}
        <ul className="flex text-xs my-2 ml-4 hover:text-gray300">
          <li>
            {/* Language Dropdown */}
            <Menu>
              <MenuButton className="flex">
                {locale === "en" ? "Eng" : "frs"}
                <DownArrow />
              </MenuButton>

              <MenuItems
                transition
                anchor="bottom end"
                className="flex flex-col w-20 right-0 absolute p-1 border border-gray200 bg-white mt-3 outline-none z-10"
              >
                <MenuItem>
                  <a
                    href=""
                    className="bg-gray-100 text-gray500 text-center focus:outline-none"
                  >
                    <p className="hover:bg-gray300 hover:text-white">English</p>
                    <p className="hover:bg-gray300 hover:text-white">Francis</p>
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </li>
          <li>
            {/* Language Dropdown */}
            <Menu>
              <MenuButton className="flex">
                {currency === "usd" ? "USD" : "PHP"}
                <DownArrow />
              </MenuButton>

              <MenuItems
                transition
                anchor="bottom end"
                className="flex flex-col w-20 right-0 absolute p-1 border border-gray200 bg-white mt-3 outline-none z-10"
              >
                <MenuItem>
                  <a
                    href=""
                    className="bg-gray-100 text-gray500 text-center focus:outline-none"
                  >
                    <p className="hover:bg-gray300 hover:text-white">USD</p>
                    <p className="hover:bg-gray300 hover:text-white">PHP</p>
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNav;
