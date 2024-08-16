import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { sareePage1 } from "../Data/Abstract/page1";
import { dressPage1 } from "../Data/Art/page1";
import { gounsPage1 } from "../Data/Murals/Murals";
import { FeaturedPage1 } from "../Data/ARTDiys/Featured";
import { mens3DPage1 } from "../Data/3D";
import { lengha_page1 } from "../Data/ArtDIYS/LenghaCholi";

const Homepage = () => {

  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />

      <div className="space-y-10 py-20">
      
      </div>

      
    </div>
  );
};

export default Homepage;
