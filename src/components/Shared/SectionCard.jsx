import React from "react";

export default function SectionCard({ icon, title, disc, bg="#fff" }) {
  return (
    <div
      className={`w-[360px] h-full  duration-700 rounded-[20px] p-9`}
style={{ backgroundColor: bg }}
    >
      <div className="">
        <img src={icon} alt="" className="w-12" />
      </div>
      <h4 className={`text-2xl font-semibold text-[#0B305B] my-6 montserrat-font`}>
        {title}
      </h4>
      <p className="text-[#164377] leading-[26px] ">{disc}</p>

   
    </div>
  );
}
