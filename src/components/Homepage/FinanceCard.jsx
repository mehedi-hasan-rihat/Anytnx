import React from "react";

export default function SerctionOverview({title, subTitle, discLight, discDark, img,  discLight2}) {
  return (
    <div className="mx-5 flex text-start  gap-5  mt-28 bg-white filter drop-shadow-[0px_16px_21px_rgba(207,233,247,0.47)] rounded-[20px] p-[64px]">
      <div className="w-full h-full">
        <p className="text-[#1F80F0] font-bold montserrat-font tracking-[2.55px] mb-7 uppercase">
          {subTitle}
        </p>
        <h2 className="text-[#0B305B] text-[40px] font-semibold montserrat-font leading-tight mb-">
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
      <div className="h-[415px]  w-[90%] flex justify-center items-center">
        <img
          src={img}
          alt=""
          className="rounded-2xl h-full w-[full] object-cover"
        />
      </div>
    </div>
  );
}
