import React from "react";

export default function SerctionOverview({title, subTitle, discLight, discDark, img,  discLight2}) {
  return (
    <div className="max-w-[1200px] mx-auto flex gap-5 my-56">
      <div className="w-full">
        <p className="text-[#348CF1] font-bold montserrat-font tracking-[2.55px] mb-7">
          {subTitle}
        </p>
        <h2 className="text-[#0B305B] text-[56px] font-semibold montserrat-font leading-[61px] mb-">
          {title}
        </h2>
        <p className="text-[#164377] font-semibold leading-[25.6px] mt-7">
         {discDark}
        </p>
        <p className="text-[#164377] leading-[25.6px] mt-6 mb-7">
        {discLight}
        </p>
        <p className="text-[#164377] leading-[25.6px]">
        {discLight2}
        </p>
      </div>
      <div className="h-full w-full flex justify-center items-center">
        <img
          src={img}
          alt=""
          className="h-full w-[70%] object-cover"
        />
      </div>
    </div>
  );
}
