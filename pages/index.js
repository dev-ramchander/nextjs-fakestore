/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";

import dynamic from "next/dynamic";
import React from "react";

import Header from "../components/common/frontend/Header";
import Footer from "../components/common/frontend/Footer";
import Slider from "../components/slider/Slider";
// import RamdomUser from '../components/common/frontend/RamdomUser'

export default function Home() {
  console.log("App renders");
  const [isLoading, setLoading] = useState(false);
  const [fakeStoreLoading, setFakeStoreLoading] = useState(false);
  const RamdomUser = dynamic(() =>
    import("../components/common/frontend/RamdomUser")
  );
  const FeaturedProducts = dynamic(() =>
    import("../components/common/frontend/DummyJson/FeaturedProducts")
  );
  const TodaysDeal = dynamic(() =>
    import("../components/common/frontend/DummyJson/TodaysDeal")
  );
  const FeaturedCategory = dynamic(() =>
    import("../components/common/frontend/Category/FeaturedCategory")
  );
  const FadeLoader = dynamic(() => import("../components/Loader/FadeLoader"));
  useEffect(() => {
    setLoading(true);
    setFakeStoreLoading(true);
  }, []);

  return (
    <div className="">
      <div className="md:container md:mx-auto">
        {fakeStoreLoading ? (
          <FeaturedProducts />
        ) : (
          <center>
            <small>Loading...</small>
          </center>
        )}

        {isLoading ? (
          <FeaturedCategory />
        ) : (
          <FadeLoader size="10" color="#b5b5b5" />
        )}

        {isLoading ? <TodaysDeal /> : <FadeLoader size="10" color="#b5b5b5" />}
        {isLoading ? <RamdomUser /> : <FadeLoader size="10" color="#b5b5b5" />}
        <Footer />
      </div>
    </div>
  );
}
