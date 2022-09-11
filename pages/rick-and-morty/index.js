/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import Script from "next/script";

import dynamic from "next/dynamic";
import React from "react";

import Footer from "../../components/common/frontend/Footer";

export default function rickAndMortyApi() {
  // console.log("rickAndMortyApi");
  const [isLoading, setLoading] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const ViewAll = dynamic(() =>
    import("../../components/common/frontend/ViewAll.js")
  );
  const FadeLoader = dynamic(() =>
    import("../../components/Loader/FadeLoader")
  );
  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div className="">
      <div className="md:container md:mx-auto">
        {isLoading ? <ViewAll /> : <FadeLoader size="10" color="#b5b5b5" />}
        <Footer />
      </div>
    </div>
  );
}
