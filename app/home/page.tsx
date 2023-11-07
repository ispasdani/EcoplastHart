import React from "react";
import HomeSection from "@/pages/homepage/HomeSection";
import WhyChooseUs from "@/pages/whyChooseUs/WhyChooseUs";
import WhatWeDo from "@/pages/whatWeDo/WhatWeDo";

const Homepage = () => {
  return (
    <div className="text-color">
      <HomeSection />
      <WhyChooseUs />
      <WhatWeDo />
    </div>
  );
};

export default Homepage;
