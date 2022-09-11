/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from "react";
import { defaultValues } from "/constant";
import { endPoints } from "../../../constant/endpoints";
import dynamic from "next/dynamic";
import { randomUserIds, classByStaus, nameFileter } from "../../../utils/functions";
import Image from "next/image";
import Link from "next/link";
export default function RandomUser() {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState([]);
  const FadeLoader = dynamic(() =>
    import("../../../components/Loader/FadeLoader")
  );

  const CommonImage = dynamic(() =>
    import("../../../components/common/frontend/CommonImage")
  );
  useEffect(() => {
    setLoading(true)
    getRandomUser();
  }, []);

  const getRandomUser = async () => {
    try {
      const res = await fetch(endPoints.randomuser + randomUserIds());
      const data = await res.json();
      setUser(data);
      setLoading(false);
      //   setOrderAggrLoading(false);
    } catch (err) {
      console.log("try catch error logs: =====> ", err);
      setLoading(false);
      setError(true)
    }
    return false;
  };
  //   if (isLoading) return <FadeLoader size="10" color="#b5b5b5" />;
  if (isLoading) return <FadeLoader size="10" color="#b5b5b5" />;
  if (error) return <center><small>Unable to proceed further. Please check back later.</small></center>;
  
  return (      

    <section className="text-gray-600 body-font">
      <div className="container px-5 py-5 mx-auto">
        <div className="text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Rick and Morty API
          </h1>
          <p className="text-base leading-relaxed xl:w-2/2 lg:w-3/4 mx-auto text-gray-500s">
            The Rick and Morty API is a REST(ish) and GraphQL API based on the
            television show Rick and Morty. You will have access to about
            hundreds of characters, images, locations and episodes. The Rick and
            Morty API is filled with canonical information as seen on the TV
            show.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 pt-10">
        {user.map((_user, index)=>{
          return (
            <>
              <div className="lg:w-1/3">
                <div className="flex flex-wrap">
                  <div className="md:w-1/1 ">
                    <div className="bg-gray-100 overflow-hidden rounded-lg">
                      <Image
                        src={_user.image}
                        className="w-full h-full object-cover object-center"
                        width="180"
                        height="180"
                      />
                    </div>
                  </div>
                  <div className="ml-3">
                    <div className="md display-block">
                      <p className="text-black text-xl font-bold text-center md:text-left">
                        { nameFileter(_user.name)}
                      </p>
                      <section>
                        <div className={classByStaus(_user.status) + " h-2 w-2 rounded-full z-2 inline-block"}>
                        </div>
                        <span className="inline-block ml-2">{_user.status} - {_user.species}</span>
                      </section>
                      <section className="mt-5">
                        <span className="inline-block">Last seen:</span>
                        <p className="text-black">{_user.location.name}</p>
                      </section>
                      <section className="mt-5">
                        <Link href={{
                          pathname: '/rick-and-morty/[id]',
                          query: { id: _user.id },              
                        }} >
                          <a className="mx-auto text-blue-500 py-2 px-2">View more</a>
                        </Link>
                      </section>
                    </div>
                  </div>
                 
                </div>
              </div>
            
            </>
          )
        })}
        </div>
      </div>
      <div className="mx-auto text-center mt-10">
        <Link href="/rick-and-morty">
          <a className="mx-auto text-white bg-blue-500 border-0 py-3 px-3 focus:outline-none hover:bg-blue-600 rounded text-lg">
            View all
          </a>
        </Link>
      </div>  
    </section>
  );

  }
