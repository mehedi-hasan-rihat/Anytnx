import React from "react";
import SerctionOverview from "../components/Shared/SerctionOverview";
import SectionCard from "../components/Shared/SectionCard";
import Philosophy from "../components/Homepage/Philosophy";

export default function HomePage() {
  return (
    <div className="">
      <SerctionOverview
        title="Uncovering new ways to delight customers"
        subTitle="POWERING THE FUTURE OF FINANCE"
        discLight="Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success."
        discDark="AnyTech is revolutionising financial technology by introducing innovative and real-time transaction account processing capabilities, specifically designed for retail financial services."
        img="https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=960&auto=format"
      />

      <Philosophy />

      <div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-8 pt-2">
        <SectionCard
          icon="https://cdn.sanity.io/images/6jywt20u/production/28029da89383a59e47420ee46b7e4c364051b45f-50x50.svg?w=50&auto=format"
          title="Full-suite solutions"
          disc="Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions."
          bg='#F8FCFF'
        />
        <SectionCard
          icon="https://cdn.sanity.io/images/6jywt20u/production/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51.png?w=50&auto=format"
          title="Simplify the complex"
          disc="Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data."  bg='#F8FCFF'
        />
        <SectionCard
          icon="https://cdn.sanity.io/images/6jywt20u/production/1966d94a29ffe1673fd510327ba0eb409f82b680-50x50.svg?w=50&auto=format"
          title="Cutting-edge techs"
          disc="We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions."  bg='#F8FCFF'
        />
      </div>
    </div>
  );
}
