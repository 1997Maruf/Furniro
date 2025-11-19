import React from "react";

const Footer = () => {
  return (
    <div className="container lg:w-[1440px] mx-auto">
      <footer className="footer sm:footer-horizontal  bg-white text-neutral-content p-10">
        <nav>
          <h2 className="text-[#000] text-[24px] font-bold">Funiro</h2>
          <p className="text-[#9F9F9F] text-[16px] mt-[50px]">
            400 University Drive Suite 200 Coral <br></br>Gables,
          </p>
          <p className="text-[#9F9F9F] text-[16px] ">FL 33134 USA</p>
        </nav>
        <nav>
          <h6 className="text-[#9F9F9F] font-semibold">Links</h6>
          <a className="text-[16px] text-[#000] font-medium mt-[50px]">Home</a>
          <a className="text-[16px] text-[#000] font-medium mt-[46px]">Shop</a>
          <a className="text-[16px] text-[#000] font-medium mt-[46px]">About</a>
          <a className="text-[16px] text-[#000] font-medium mt-[46px]">
            Contact
          </a>
        </nav>
        <nav>
          <h6 className="text-[#9F9F9F] font-semibold">Help</h6>
          <a className="text-[16px] text-[#000] font-medium mt-[50px]">
            Payment Options
          </a>
          <a className="text-[16px] text-[#000] font-medium mt-[46px]">
            Returns
          </a>
          <a className="text-[16px] text-[#000] font-medium mt-[46px]">
            Privacy Policies
          </a>
        </nav>
        <nav>
          <h6 className="text-[#9F9F9F] font-semibold">Newsletter</h6>
          <a className="text-[14px] text-[#9F9F9F] font-medium mt-[50px]">
            <u>Enter Your Email Address</u>
            <u className="text-[14px] text-[#000] font-medium ml-3">
              SUBSCRIBE
            </u>
          </a>
        </nav>
      </footer>
      <div className="px-[102px]">
        <div className="divider"></div>
        <p className="text-[16px] text-[#000] pb-[35px] ">
          2025 furino. All rights reverved
        </p>
      </div>
    </div>
  );
};

export default Footer;
