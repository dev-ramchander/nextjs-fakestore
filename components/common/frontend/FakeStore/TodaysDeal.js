import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { endPoints } from "../../../../constant/endpoints";
import { defaultValues } from "../../../../constant";
import { randomNo } from "../../../../utils/functions";
import Ratings from "react-ratings-declarative";
import Link from "next/link";
import Image from "next/image";

function TodaysDeal(params) {
  const rattingValue = randomNo(3, 5);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [productsImages, setProductsImages] = useState([
    "https://dummyimage.com/400x400",
  ]);
  const [timeLeft, setTimeLeft] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    var interal = setInterval(countDownTimer, 1000);
    // setInterval(countDownTimer, 1000);
    setLoading(true);
    fetchProducts();
    return () => {
      // This function is run once when the component is unmounted
      // equivalent to componentWillUnmount
      clearInterval(interal);
    };

    // const interval = setInterval(() => setTimeLeft(countDownTimer), 1000);
    // return () => {
    //   clearInterval(interval);
    // };
  }, []);

  const countDownTimer = () => {
    const difference = +new Date("2022-09-11T17:37:56+00:00") - +new Date();
    let timeLeft = {};
    console.log("difference: ", difference);
    if (difference > 0) {
      timeLeft = {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    setTimeLeft(timeLeft);
    //return timeLeft;
  };

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${endPoints.products}/${randomNo(1, 200)}`);
      const _data = await res.json();

      setProducts(_data);
      setProductsImages(_data.images);
      setLoading(false);
      console.log("deals of the day: ", _data);
    } catch (err) {
      console.log("try catch error logs: =====> ", err);
      setLoading(false);
      setError(true);
    }
  };

  return (
    <section className="pt-20 pb-20 body-font">
      <div className="container px-5 mx-auto uppercase font-bold tracking-widest">
        <div className="flex flex-wrap">
          <div className="md:w-3/5">
            <h1 className="text-gray-800 text-8xl display-block">
              Deal of the day
            </h1>
          </div>
          <div className="md:w-2/5">
            <h1 className="text-gray-800 text-8xl display-block text-center">
              <span>{timeLeft.hours}</span>
              <span>:</span>
              <span>{timeLeft.minutes}</span>
              <span>:</span>
              <span>{timeLeft.seconds}</span>
            </h1>
          </div>
        </div>
      </div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap">
            <div className="md:w-3/5">
              <div className="flex flex-wrap ">
                <div className="md:w-5/6 ">
                  <Image
                    alt={products.title}
                    className="rounded-lg"
                    src={productsImages[0]}
                    width="600"
                    height="480"
                    layout="responsive"
                  />
                </div>
                <div className="md:w-1/6 ">
                  {productsImages.map((_product) => {
                    return (
                      <div key={randomNo(1, 10000)} className="pl-4 pb-4">
                        <Image
                          alt={products.title}
                          className="w-full cursor-pointer rounded-lg"
                          src={_product}
                          width="100"
                          height="100"
                          layout="responsive"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="md:w-2/5">
              <div className="w-full pl-20">
                {/* <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  BRAND NAME
                </h2> */}
                <h1 className="text-black text-3xl title-font font-bold tracking-wide mb-1">
                  {products.title}
                </h1>
                <div className="flex mb-4">
                  <Ratings
                    rating={rattingValue}
                    widgetDimensions="20px"
                    widgetSpacings="1px"
                    widgetRatedColors="rgb(255, 169, 27)"
                  >
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                  </Ratings>
                  <span className="text-gray-500 font-bold ml-3">
                    {randomNo(50, 150)} Reviews
                  </span>

                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
                <div className="flex tracking-wide">
                  <span className="title-font font-bold text-3xl text-gray-900">
                    ${products.price}
                  </span>
                  <span className="title-font font-bold text-3xl text-gray-500 line-through ml-3">
                    ${products.price + randomNo(50, 100)}
                  </span>
                </div>
                <div className="mt-5">
                  <span className="title-font text-gray-500">
                    Save 50% right now
                  </span>
                </div>
                {/* <p className="leading-relaxed">{products.description}</p> */}
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div className="flex">
                    <span className="mr-3">Color</span>
                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                  </div>
                  <div className="flex ml-6 items-center">
                    <span className="mr-3">Size</span>
                    <div className="relative">
                      <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                        <option>SM</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="">
                  <button className="w-md text-white bg-black rounded-lg py-5 px-10 tracking-widest uppercase font-bold">
                    add to cart
                  </button>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default TodaysDeal;
