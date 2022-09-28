import Image from "next/image";
import { randomNo, productDiscount } from "../../../../../utils/functions";
import Ratings from "react-ratings-declarative";
import { StarIcon } from '@heroicons/react/24/solid'

function ProductList(props) {
  const rattingValue = randomNo(3, 5);
  return (
    <div className="flex flex-col">
        
      <a className="block w-300 relative overflow-hidden relative">
        <Image
          alt={props.name}
          className=""
          src={props.image}
          height="400"
          width="350"
          objectFit='cover'
        />
        <div className="flex items-center font-bold text-xs rounded-sm absolute p-1 bg-white bg-opacity-80 border tracking-wide bottom-3 left-2">
            <span className="inline-block text-gray-700">
                {props.rating.toFixed(1)} 
            </span>
            <span className="inline-block text-green-700 px-1">
                <StarIcon className="w-3.5 h-3.5 " />
            </span> 
            <span className="inline-block text-gray-700">
                | {randomNo(1, 10)}.{randomNo(1, 9)}k
            </span> 
        </div>
      </a>
      <div className="">
        <h3 className="text-black font-bold text-sm uppercase tracking-wide title-font">
          {props.brand}
        </h3>
      </div>

      <section className="flex flex-wrap">
        <div className="md:w-full">
            <span className="capitalize tracking-wide text-sm">{props.name}</span>
        </div>
        <div className="md:full text-black text-xl text-right">
            <div className="tracking-wide text-black text-sm">
                <span className="font-bold tracking-wider">${productDiscount(props.price, props.discPercentage)}</span>
                <span className="tracking-wide pl-2 tracking-wider text-gray-500 text-sm line-through">
                ${props.price.toFixed(2)}
                </span>
                <span className="pl-2 tracking-wider text-xs text-amber-500 uppercase">({props.discPercentage}% off)</span>
            </div>
        </div>
      </section>
    </div>
  );
}

export default ProductList;
