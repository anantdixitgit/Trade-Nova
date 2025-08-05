import React from "react";
import Hero from "./Hero.js";
import LeftSection from "./LeftSection.js";
import RightSection from "./RightSection.js";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductPage() {
  return (
    <>
      <Hero></Hero>
      <LeftSection
        imageURL="media/kite.png"
        productName="Kite"
        productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices. "
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      ></LeftSection>

      <RightSection
        imageURL="media/console.png"
        productName="Console"
        productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
      ></RightSection>

      <LeftSection
        imageURL="media/coin.png"
        productName="Coin"
        productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.  "
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      ></LeftSection>

      <RightSection
        imageURL="media/kiteconnect.png"
        productName="Kite Connect API"
        productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
      ></RightSection>

      <LeftSection
        imageURL="media\varsity.png"
        productName="Varsity mobile"
        productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go. "
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      ></LeftSection>
    </>
  );
}

export default ProductPage;
