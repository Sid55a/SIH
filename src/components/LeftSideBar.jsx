import React from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import CampaignIcon from "@mui/icons-material/Campaign";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ManIcon from "@mui/icons-material/Man";
import FeedbackIcon from "@mui/icons-material/Feedback";
import ReportIcon from "@mui/icons-material/Report";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";
const LeftsideBar = () => {
  return (
    <div className="lg:w-[13rem] md:w-20 h-[26rem] shadow-2xl rounded-r-lg mt-1  sticky top-1 p-2 bg-green-600 ">
      <div className="flex gap-3 text-center gap-y-2  ml-3 p-2 hover:rounded-md hover:bg-slate-700">
        <CampaignIcon className=" text-white h-8 w-8" />
        <Link href={"/announcements"}>
          <div className=" text-[1rem] hidden lg:flex text-white font-semibold mt-1">
            Announcement
          </div>
        </Link>
      </div>

      <div className="flex gap-3 text-center gap-y-2  ml-3 p-2 hover:rounded-md hover:bg-slate-700">
        <LocalShippingIcon className=" text-white h-8 w-8" />
        <div className=" text-[1rem] hidden lg:flex text-white font-semibold mt-1">
          {" "}
          Truck_Service
        </div>
      </div>

      <div className="flex gap-3 text-center gap-y-2  ml-3 p-2 hover:rounded-md hover:bg-slate-700">
        <ManIcon className=" text-white h-8 w-8" />
        <Link href={"#"}>
          <div className=" text-[1rem] hidden lg:flex text-white font-semibold mt-1">
            Labour_service
          </div>
        </Link>
      </div>

      <hr className="lg:w-48 mt-5 p-2 sm:w-16 text-slate-600" />

      <div className="flex gap-3 text-center gap-y-2  ml-3 p-2 hover:rounded-md hover:bg-slate-700">
        <FeedbackIcon className=" text-white h-8 w-8" />
        <Link href={"/feedbacks"}>
          <div className=" text-lg hidden lg:flex text-white font-semibold">
            Feedbacks
          </div>
        </Link>
      </div>

      <div className="flex gap-3 text-center gap-y-2  ml-3 p-2 hover:rounded-md hover:bg-slate-700">
        <ReportIcon className=" text-white h-8 w-8" />
        <Link href={"/complaints"}>
          <div className=" text-[1rem] hidden lg:flex text-white font-semibold">
            Complains
          </div>
        </Link>
      </div>

      <div className="flex gap-3 text-center gap-y-2  ml-3 p-2 hover:rounded-md hover:bg-slate-700">
        <ReceiptLongIcon className=" text-white h-8 w-8" />
        <Link href={"#"}>
          <div className=" text-[1rem] text-white hidden lg:flex font-semibold">
            Schems
          </div>
        </Link>
      </div>

      <hr className="lg:w-48 mt-5 p-2 sm:w-16 text-slate-600" />

      <div className="flex gap-3 text-center gap-y-2  ml-3 p-2 hover:rounded-md hover:bg-slate-700">
        <LogoutIcon className=" text-white h-8 w-8" />
        <div className=" text-[1rem] hidden lg:flex text-white font-semibold">
          Logout
        </div>
      </div>
    </div>
  );
};

export default LeftsideBar;
