import Image from "next/image";
import Link from "next/link";
import { randomNo } from "../../../../utils/functions";

function CategoryList(props) {
  return (
    <Link href={`/category/${props.id}`}>
      <a href={`/category/${props.id}`}>
        <div class="items-center text-center ">
          <Image
            alt={props.name}
            className="flex-shrink-0 rounded-full object-cover object-center"
            src={props.image}
            height="170"
            width="170"
          />
          <div class="w-full mt-5">
            <h2 class="title-font tracking-widest title-font text-gray-900 font-bold uppercase">
              {props.name}
            </h2>
          </div>
        </div>
      </a>
    </Link>

    // <div className="lg:w-1/4 md:w-1/2 pr-4 pb-2 w-full justify-center cursor-pointer transform transition duration-200 hover:scale-105">
    //   <a className="block w-300 relative rounded-full overflow-hidden ">
    //     <Image
    //       alt={props.name}
    //       className="object-cover object-center w-full h-full block rounded-lg"
    //       src={props.image}
    //       height="200"
    //       width="200"
    //     />
    //   </a>
    //   <section className="mt-1 flex flex-wrap">
    //     <div className="md:w-1/1">
    //       <div className="flex flex-wrap">
    //         <div className="md:w-full"></div>
    //         <div className="md:w-full mt-2">{props.name}</div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
}
export default CategoryList;
