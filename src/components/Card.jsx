"use client";

import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Button } from "@mui/material";

const Card = ({ play, setplay, img }) => {
  const [state, setState] = useState(false);
  const [bgHover, setBgHover] = useState(false);

  const enter = () => {
    setState(!state);
    setBgHover(!bgHover);
  };
  return (
    <div className=" relative">
      <div className=" bg-green-500 mt-10 w-80 z-0 ml-10 mb-10 h-80    rounded-xl ">
        <div
          onMouseEnter={() => enter()}
          onMouseLeave={() => enter()}
          className={`w-full  relative rounded-t-xl bg-gray-900 h-64`}
        >
          <img
            src={img}
            width="100%"
            height="100%"
            className={` rounded-lg ${bgHover && "opacity-25"}   h-64 w-80 `}
          />
          {state && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              onClick={() => setplay(!play)}
              className={` absolute hover:scale-95 justify-center bg-green-500 rounded-xl items-center top-32 left-36 w-8 h-8`}
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
        <h1 className="flex justify-center items-center text-black font-bold">
          Name | date | time
        </h1>
        <div className="flex mt-3">
          <div className=" basis-1/2 text-center border text-white border-black rounded-bl-lg p-0.5 bg-green-900 font-semibold hover:bg-slate-300 ">
            Edit
          </div>
          <div className=" basis-1/2 text-center border text-white border-black rounded-br-lg bg-red-400 font-semibold hover:bg-slate-300">
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
