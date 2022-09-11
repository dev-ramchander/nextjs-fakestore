import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { endPoints } from "../../../../constant/endpoints";
import { defaultValues } from "../../../../constant";
import { randomNo } from "../../../../utils/functions";
import Link from "next/link";

function FeaturedProducts() {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const FadeLoader = dynamic(() => import("../../../Loader/FadeLoader"));
  const ProductList = dynamic(() => import("./ProductList"));
  useEffect(() => {
    setLoading(true);
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      var _;
      const res = await fetch(
        `${endPoints.products}${defaultValues.featuredProduct}`
      );
      const _data = await res.json();

      setProducts(_data);
      setLoading(false);
    } catch (err) {
      console.log("try catch error logs: =====> ", err);
      setLoading(false);
      setError(true);
    }
  };
  if (isLoading) return <FadeLoader size="10" color="#b5b5b5" />;
  if (error)
    return (
      <center>
        <small>Unable to proceed further. Please check back later.</small>
      </center>
    );

  return (
    <section className="text-gray-600 pt-1 pb-10 body-font">
      <div className="container px-5 mx-auto">
        <section className="flex flex-wrap my-3 pr-5 pb-5">
          <div className="md:w-4/5 text-left">
            <h1 className="sm:text text-left tracking-widest title-font text-gray-900 font-bold uppercase">
              Featured products
            </h1>
          </div>
          <div className="md:w-1/5 text-right">
            <Link href="/products">
              <a className="text-black py-1 transition-colors duration-300 outline-none hover:border-black border-transparent border-b-4 hover:border-current font-bold tracking-widest">
                VIEW ALL
              </a>
            </Link>
          </div>
        </section>
        <div className="flex flex-wrap ">
          {products.map((_product, index) => {
            const { images, title, category, description, price, id } =
              _product;
            return (
              <ProductList
                key={index}
                image={images[0]}
                name={title}
                category={category}
                description={description}
                price={price}
                id={price}
              />
            );
          })}
          {/* <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/420x260"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                The Catalyzer
              </h2>
              <p className="mt-1">$16.00</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/421x261"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Shooting Stars
              </h2>
              <p className="mt-1">$21.15</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/422x262"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Neptune
              </h2>
              <p className="mt-1">$12.00</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/423x263"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                The 400 Blows
              </h2>
              <p className="mt-1">$18.40</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
