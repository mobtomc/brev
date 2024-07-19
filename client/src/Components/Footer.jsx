import React from "react";

import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <section className="bg-[#072ccf]">
      <div className={`flex flex-col w-full justify-center items-center pt-5`}>
        <div className="flex flex-col sm:flex-row justify-between items-center sm:gap-10 w-full">
          <div className="flex-[1] flex flex-col justify-start items-center py-5 w-[40%]">
            <img src={logo} alt="content catcher" className="w-[50%]" />
            <p className={` mt-4 max-w-[312px] px-10 text-white`}>
              choose us for unparalleled expertise, reliable support and
              personalised service
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:w-[60%]">
            <div className="flex-[1] flex flex-col justify-start items-center py-5">
              <img src={logo} alt="content catcher" className="w-[50%]" />
              <p className={` mt-4 max-w-[312px] px-10 text-white`}>
                choose us for unparalleled expertise, reliable support and
                personalised service
              </p>
            </div>
            <div className="flex-[1] flex flex-col justify-start items-center py-5">
              <img src={logo} alt="content catcher" className="w-[50%]" />
              <p className={` mt-4 max-w-[312px] px-10 text-white`}>
                choose us for unparalleled expertise, reliable support and
                personalised service
              </p>
            </div>
          </div>
        </div>
        <div className="w-full pt-10 pb-5">
          <p className="text-center text-white text-sm sm:text-base mx-5">
            © 2023. All rights reserved by Kasukabe Defense Group
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
