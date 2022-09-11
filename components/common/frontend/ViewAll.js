/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from "react";
import { defaultValues } from "../../../constant";
import { endPoints } from "../../../constant/endpoints";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import RickAndMorty from "./RickAndMorty";
import { loadMoreIds } from "../../../utils/functions";

export default function ViewAll() {
  // let paginate = defaultValues.paginate;
  const [isLoading, setLoading] = useState(false);
  const [loadMoreStatus, setLoadMoreStatus] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState([]);
  const [paginate, setPaginate] = useState(defaultValues.paginate);
  const [scrollAmount, setScrollAmount] = useState(0);
  const FadeLoader = dynamic(() =>
    import("../../Loader/FadeLoader")
  );

  const CommonImage = dynamic(() =>
    import("./CommonImage")
  );
  useEffect(() => {
    setLoading(true)
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch(endPoints.randomuser + defaultValues.initialIds);
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
  
  const loadMoreUsers = async () => {
    try {
      setLoadMoreStatus(true);
      console.log("paginate: ",paginate);
      const ids = loadMoreIds(paginate);
      console.log("loadMoreIds: ", ids);
      const res = await fetch(endPoints.randomuser + ids);
      const newdata = await res.json();
      console.log("data ", newdata);
      setUser([...user, ...newdata]);
      setPaginate(defaultValues.paginate + paginate);
      console.log("P: "+paginate);
      setLoadMoreStatus(false);
    } catch (err) {
      setLoadMoreStatus(false);
      console.log("try catch error logs: =====> ", err);
    }
    return false;
  };



  if (isLoading) return <FadeLoader size="10" color="#b5b5b5" />;
  if (error) return <center><small>Unable to proceed further. Please check back later.</small></center>;
  
  return (      

    <section className="text-gray-600 body-font">
      <div className="container px-5 py-5 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 pt-10">
        {user.map((_user)=>( 
          <RickAndMorty key={_user.id} items={_user} />
        ))}
        </div>
      </div>
      <div className="mx-auto text-center mt-10">
        
          <button onClick={loadMoreUsers} href="/randomusers" className="mx-auto text-white bg-blue-500 border-0 py-3 px-3 focus:outline-none hover:bg-blue-600 rounded text-lg">
            { loadMoreStatus ? "Loading...":'Load more'}
          </button>
        
      </div>  
    </section>
  );

  }
