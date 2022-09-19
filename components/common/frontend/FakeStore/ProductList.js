import Image from "next/image";
import { randomNo } from "../../../../utils/functions";
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
          {props.category.name}
        </h3>
      </div>

      <section className="mt-1 flex flex-wrap">
        <div className="md:w-4/5">
          <div className="flex flex-wrap">
            <div className="md:w-full">
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
            </div>
            <div className="md:w-full mt-2">{props.name}</div>
          </div>
        </div>
        <div className="md:w-1/5 text-black text-2xl ">
          <div className="flex flex-wrap">
            <div className="md:w-full tracking-wide text-gray-500 text-xl line-through text-left">
              ${props.price + randomNo(50, 100)}
            </div>
            <div className="md:w-full font-bold tracking-wide text-black text-2xl text-left">
              ${props.price}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductList;
