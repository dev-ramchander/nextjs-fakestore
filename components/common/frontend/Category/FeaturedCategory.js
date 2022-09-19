import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { endPoints } from "../../../../constant/endpoints";
import { defaultValues } from "../../../../constant";
import { randomNo } from "../../../../utils/functions";
import Link from "next/link";

function FeaturedCategory() {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [category, setCategory] = useState([]);
  const FadeLoader = dynamic(() => import("../../../Loader/FadeLoader"));
  const CategoryList = dynamic(() =>
    import("../../frontend/Category/CategoryList")
  );
  useEffect(() => {
    setLoading(true);
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    try {
      var _;
      const res = await fetch(`${endPoints.category}`);
      const _data = await res.json();

      setCategory(_data);
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
        <section className="flex flex-wrap my-1 pr-2 pb-2">
          <div className="md:w-4/5 text-left">
            <h1 className="sm:text text-left tracking-widest title-font text-gray-500 font-bold uppercase">
              Featured category
            </h1>
          </div>
          <div className="md:w-1/5 text-right">
            <Link href="/category">
              <a className="text-black py-1 transition-colors duration-300 outline-none hover:border-black border-transparent border-b-4 hover:border-current font-bold tracking-widest">
                VIEW ALL
              </a>
            </Link>
          </div>
        </section>

        <section class="text-gray-600 body-font">
          <div class="container p5 mx-auto rounded-lg bg-gray-100 py-5">
            <div class="grid grid-cols-5 gap-2 justify-items-center">
              {category.map((_category, index) => {
                const { image, name, id } = _category;
                return (
                  <CategoryList key={index} image={image} name={name} id={id} />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default FeaturedCategory;
