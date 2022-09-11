import Link from "next/link";
import Image from "next/image";
import { classByStaus, nameFileter } from "../../../../utils/functions";

function Index({items}) {
    
    return(
    <div className="lg:w-1/3">
        <div className="flex flex-wrap">
          <div className="md:w-1/1 ">
            <div className="bg-gray-100 overflow-hidden rounded-lg">
              <Image
                src={items.image}
                className="w-full h-full object-cover object-center"
                width="180"
                height="180"
                alt={items.name}
              />
            </div>
          </div>
          <div className="ml-3 max-w-xs">
            <div className="md display-block">
              <p className="text-black text-xl font-bold text-center md:text-left">
                {nameFileter(items.name)}
              </p>
              <section>
                <div className={classByStaus(items.status) + " h-2 w-2 rounded-full z-2 inline-block"}>
                </div>
                <span className="inline-block ml-2">{items.status} - {items.species}</span>
              </section>
              <section className="mt-5">
                <span className="inline-block">Last seen:</span>
                <p className="text-black">{items.location.name}</p>
              </section>
              <section className="mt-5">
              <Link href={"/rick-and-morty/"+items.id}>
                <a href={"/rick-and-morty/"+items.id} className="mx-auto text-blue-500 py-2 px-2">
                  View more
                </a>
                </Link>
              </section>
            </div>
          </div>
         
        </div>
      </div>
    )    
}

export default Index;