import React from "react";

const Footer = () => {
  return (
    <div className=" w-full   text-end bg-green-500 h-20 p-5  ">
      <div className="flex gap-20 text-center">
        <h1 className=" text-green-200 font-semibold">
          {" "}
          ContactUs <span className=" hover:underline">125-624-652</span>
        </h1>
        <h1 className=" text-green-200 font-semibold ">
          {" "}
          Email :{" "}
          <span className="hover:underline">kerelahealth@gmail.com</span>
        </h1>
      </div>
      <span className="">&copy; 2023</span>
    </div>
  );
};

export default Footer;
