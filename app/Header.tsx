"use client";

import NavbarLinks from "@/components/atoms/NavbarLinks";
import SearchBox from "@/components/atoms/SearchBox";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Badge from "../components/atoms/Badge";

const Header = () => {
  const [mobNav, setMobNav] = useState<boolean>(false);

  const toggleNav = () => {
    setMobNav(!mobNav);
  };

  return (
    <header className="sticky top-0 right-0 left-0 bg-bright z-40 py-4 text-typeHigh">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex space-x-8 items-center">
            <Link href="/" className="z-50">
              <Image
                className="shrink-0 "
                alt="site logo"
                src="/logo/logo.svg"
                height={22}
                width={108}
              />
            </Link>
            <div className="hidden md:inline-flex">
              <NavbarLinks />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="hidden md:inline">
              <SearchBox />
            </div>
            <div className="flex items-center space-x-1 md:space-x-2">
              <Link href="/favs" className="">
                <Image
                  alt="favs icon"
                  src="/icons/heart.svg"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="/profile" className="">
                <Image
                  alt="profile icon"
                  src="/icons/profile.svg"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="/cart" className="realtive">
                <div className="relative">
                  <Image
                    alt="cart icon"
                    src="/icons/bag.svg"
                    width={24}
                    height={24}
                  />
                  <Badge />
                </div>
              </Link>
            </div>
            <button className="md:hidden" onClick={() => toggleNav()}>
              <Image
                alt="menu/cross icon"
                src={`/icons/${mobNav ? "cross.svg" : "menu.svg"}`}
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
      </div>

      {/* mobile Dropped Menu */}
      <div
        className={
          mobNav
            ? "fixed top-0 h-full w-[85%] bg-white transition-all flex flex-col space-y-4 ease-out duration-500 px-2 pt-16 md:hidden opacity-100 scale-1 border-r-2 z-40"
            : "fixed top-0 h-full w-[85%] bg-white transition-all flex flex-col space-y-4 ease-out duration-500 px-2 pt-16 md:hidden opacity-0 pointer-events-none ml-[-100%]"
        }
      >
        <SearchBox />
        <div className="ml-4">
          <NavbarLinks />
        </div>
      </div>
    </header>
  );
};

export default Header;
