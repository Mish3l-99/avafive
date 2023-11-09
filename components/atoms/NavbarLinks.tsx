import Link from "next/link";
import React from "react";

const NavbarLinks = () => {
  return (
    <ul className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
      <li className="heading-m-14 hover:text-highlight">
        <Link href="/cats">Handbags</Link>
      </li>
      <li className="heading-m-14 hover:text-highlight">
        <Link href="/cats">Watches</Link>
      </li>
      <li className="heading-m-14 hover:text-highlight">
        <Link href="/cats">Skincare</Link>
      </li>
      <li className="heading-m-14 hover:text-highlight">
        <Link href="/cats">Jewellery</Link>
      </li>
      <li className="heading-m-14 hover:text-highlight">
        <Link href="/cats">Apparels</Link>
      </li>
    </ul>
  );
};

export default NavbarLinks;
