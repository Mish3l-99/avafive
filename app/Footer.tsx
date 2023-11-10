import Image from "next/image";
import React from "react";
import OpacityAnimate from "@/components/animate/OpacityAnimate";

const Footer = () => {
  return (
    <footer className="mt-6 py-4 md:py-6 bg-primary">
      <div className="container">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-6 grid grid-cols-3 gap-y-8 gap-x-4 pb-6 lg:pb-0 border-b border-gray-500 lg:border-0">
            <div className="col-span-3 lg:col-span-1 lg:order-1">
              <h3 className="text-bright hover:text-highlight paragraph-m-16 mb-3">
                Shop by Category
              </h3>
              <OpacityAnimate>
                <ul className="text-lightText flex flex-col space-y-1">
                  <li className="hover:underline cursor-pointer">Skincare</li>
                  <li className="hover:underline cursor-pointer">
                    Prsonal Care
                  </li>
                  <li className="hover:underline cursor-pointer">Handbags</li>
                  <li className="hover:underline cursor-pointer">Apparels</li>
                  <li className="hover:underline cursor-pointer">Watches</li>
                  <li className="hover:underline cursor-pointer">Eye Wear</li>
                  <li className="hover:underline cursor-pointer">Jewellery</li>
                </ul>
              </OpacityAnimate>
            </div>
            <div className="col-span-3 lg:col-span-1 lg:order-3">
              <h3 className="text-bright hover:text-highlight paragraph-m-16 mb-3">
                Policy
              </h3>
              <OpacityAnimate>
                <ul className=" text-lightText flex flex-wrap space-x-1 lg:flex-col lg:space-y-1 lg:space-x-0">
                  <li className="hover:underline cursor-pointer">Return</li>
                  <span className="lg:hidden"> | </span>
                  <li className="hover:underline cursor-pointer">
                    Terms of use
                  </li>
                  <span className="lg:hidden"> | </span>
                  <li className="hover:underline cursor-pointer">Sitemap</li>
                  <span className="lg:hidden"> | </span>
                  <li className="hover:underline cursor-pointer">Security</li>
                  <span className="lg:hidden"> | </span>
                  <li className="hover:underline cursor-pointer">Privacy</li>
                  <span className="lg:hidden"> | </span>
                  <li className="hover:underline cursor-pointer">
                    ERP Compliance
                  </li>
                </ul>
              </OpacityAnimate>
            </div>
            <div className="col-span-3 lg:col-span-1 lg:order-2">
              <h3 className="text-bright hover:text-highlight paragraph-m-16 mb-3">
                About
              </h3>
              <OpacityAnimate>
                <ul className=" text-lightText flex flex-wrap space-x-1 lg:flex-col lg:space-y-1 lg:space-x-0">
                  <li className="hover:underline cursor-pointer">Contact Us</li>
                  <span className="lg:hidden"> | </span>
                  <li className="hover:underline cursor-pointer">About Us</li>
                  <span className="lg:hidden"> | </span>
                  <li className="hover:underline cursor-pointer">Careers</li>
                  <span className="lg:hidden"> | </span>
                  <li className="hover:underline cursor-pointer">Press</li>
                </ul>
              </OpacityAnimate>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 flex-col lg:ml-auto">
            <div className="socials flex items-center lg:justify-end space-x-2 mb-4 md:mb-8">
              <a href="https://social-link.com" target="_blank">
                <Image
                  alt="social icon"
                  src="/icons/socials/fb.svg"
                  className="hover:translate-y-1 hover:scale-95 duration-300 ease-in"
                  height={38}
                  width={38}
                />
              </a>
              <a href="https://social-link.com" target="_blank">
                <Image
                  alt="social icon"
                  src="/icons/socials/insta.svg"
                  className="hover:translate-y-1 hover:scale-95 duration-300 ease-in"
                  height={38}
                  width={38}
                />
              </a>
              <a href="https://social-link.com" target="_blank">
                {" "}
                <Image
                  alt="social icon"
                  src="/icons/socials/twitter.svg"
                  className="hover:translate-y-1 hover:scale-95 duration-300 ease-in"
                  height={38}
                  width={38}
                />
              </a>
              <a href="https://social-link.com" target="_blank">
                <Image
                  alt="social icon"
                  src="/icons/socials/youtube.svg"
                  className="hover:translate-y-1 hover:scale-95 duration-300 ease-in"
                  height={38}
                  width={38}
                />
              </a>
            </div>
            <div className="flex space-x-2 items-center text-bright heading-m-14 lg:justify-end mb-1">
              <Image
                alt="loc icon"
                src="/icons/location.svg"
                height={24}
                width={24}
              />
              United States
            </div>
            <p className="paragraph-r-14 text-lightText lg:text-right">
              © 2021 | Cora Leviene All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
