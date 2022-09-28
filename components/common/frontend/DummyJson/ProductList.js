import Image from "next/image";
import { randomNo, productDiscount } from "../../../../utils/functions";
import Ratings from "react-ratings-declarative";
function ProductList(props) {
  const rattingValue = randomNo(3, 5);
  return (
    <div className="lg:w-1/4 md:w-1/2 pr-4 pb-2 w-full cursor-pointer transform transition duration-200 hover:scale-105">
      <a className="block w-300 relative overflow-hidden ">
        <Image
          alt={props.name}
          className="object-cover object-center w-full h-full block rounded-lg"
          src={props.image}
          height="400"
          width="350"
        />
      </a>
      <div className="mt-2">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {props.brand}
        </h3>
      </div>

      <section className="mt-1 flex flex-wrap">
        <div className="md:w-3/5">
          <div className="flex flex-wrap">
            <div className="md:w-full">
              <Ratings
                rating={props.rating}
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
            </div>
            <div className="md:w-full mt-2">{props.name}</div>
          </div>
        </div>
        <div className="md:w-2/5 text-black text-xl text-right">
          <div className="flex flex-wrap">
            <div className="md:w-full tracking-wide text-gray-500 text-xl line-through">
              ${props.price.toFixed(2)}
            </div>
            <div className="md:w-full tracking-wide text-black text-xl">
              ${productDiscount(props.price, props.discPercentage)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductList;
