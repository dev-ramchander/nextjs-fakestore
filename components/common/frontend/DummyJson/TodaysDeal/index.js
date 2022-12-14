import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { endPoints } from "../../../../../constant/endpoints";
import { defaultValues } from "../../../../../constant";
import { randomNo, productDiscount } from "../../../../../utils/functions";
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

  const DealTimer = dynamic(() => import("../TodaysDeal/DealTimer"));
  const FeaturedProductsError = dynamic(() => import("./../ErrorComponents/FeatureProductsError"));

  useEffect(() => {
    setLoading(true);
    fetchProducts();
  }, []);

  const countDownTimer = () => {
    const difference = +new Date("2022-09-12T17:37:56+00:00") - +new Date();
    let timeLeft = {};
    // console.log("difference: ", difference);
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
      const res = await fetch(`${endPoints.dummyProducts}/${randomNo(1, 30)}`);
      const _data = await res.json();
      console.log('deal of the day ===> ', _data)
      if( _data.statusCode == 404 ){
        setError(true)
      } else {
        setError(false)
        setProducts(_data);
        setProductsImages(_data.images);
      }
      setLoading(false);
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
            <h1 className="text-gray-800 text-6xl display-block">
              Deal of the day
            </h1>
          </div>
          <div className="md:w-2/5">
            <DealTimer />
          </div>
        </div>
      </div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap">
            { error ? <FeaturedProductsError />  
              :<><div className="md:w-3/5">
                <div className="flex flex-wrap text-center">
                  <div className="md:w-5/6 ">
                    <Image
                      alt={products.title}
                      className="rounded-lg"
                      src={products.thumbnail}
                      width="450"
                      height="420"
                      objectFit="contain" />
                  </div>
                  <div className="md:w-1/6 ">
                    {productsImages.map((_product) => {
                      return (
                        <div key={randomNo(1, 10000)} className="pl-4 pb-4">
                          <Image
                            alt={products.title}
                            className="w-50 h-50 cursor-pointer rounded-lg"
                            src={_product}
                            width="50"
                            height="50"
                            objectFit="contain" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div><div className="md:w-2/5">
                  <div className="w-full pl-20">
                    <h2 className="text-sm title-font font-bold  uppercase tracking-widest">{products.brand}</h2>
                    <h1 className="text-black text-3xl title-font font-bold tracking-wide mb-1">
                      {products.title}
                    </h1>
                    <div className="flex mb-4">
                      <Ratings
                        rating={products.rating}
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
                    </div>
                    <div className="flex mb-4">
                      <span className="">
                        {products.description}
                      </span>
                    </div>
                    <div className="flex tracking-wide">
                      <span className="title-font font-bold text-3xl text-gray-900">
                      ${ productDiscount(products.price, products.discountPercentage)}
                        
                      </span>
                      <span className="title-font font-bold text-3xl text-gray-500 line-through ml-3">
                      ${products.price}
                      </span>
                    </div>
                    <div className="mt-5">
                      <span className="title-font text-gray-500">
                        Save {products.discountPercentage}% right now
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
                </div></>
            }
          </div>
        </div>
      </section>
    </section>
  );
}

export default TodaysDeal;
