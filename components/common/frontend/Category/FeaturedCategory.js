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
  
  const FeaturedProductsError = dynamic(() =>
    import("../../frontend/FakeStore/ErrorComponents/FeatureProductsError")
  );
  useEffect(() => {
    setLoading(true);
    //fetchCategory();
    setCategory([
      {
        'id':1,
        'slug':'smartphones',
        'image':'https://m.media-amazon.com/images/I/51jweLlbeTL._SL1024_.jpg',
        'name':'smartphones',
      },
      {
        'id':2,
        'slug':'home-decoration',
        'image':'https://cdn.dribbble.com/users/949592/screenshots/3580546/day-29-up.png',
        'name':'Decoration',
      },
      {
        'id':3,
        'slug':'mens-shoes',
        'image':'https://api.lorem.space/image/shoes?w=640&h=480&r=818',
        'name':'shoes',
      },
      {
        'id':4,
        'slug':'laptops',
        'image':'https://media.istockphoto.com/photos/happy-business-woman-holding-laptop-picture-id908275442?k=20&m=908275442&s=612x612&w=0&h=qsfPd4_WXkYDcV2vS1676aQ5Rm7MWUHyyNY03fCgnRs=',
        'name':'laptops',
      },
      {
        'id':5,
        'slug':'furniture',
        'image':'https://media.istockphoto.com/photos/office-room-with-desk-computer-and-chair-in-red-background-monochrome-picture-id1278524248?k=20&m=1278524248&s=612x612&w=0&h=cpmkwh_Hsqheh8aVOl8OFEXYDMaT0z8HvVfjvsnI7Zc=',
        'name':'furniture',
      },
  ]);
    setLoading(false);
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

        <section className="flex text-gray-600 body-font">
          {/* <FeaturedProductsError />  */}
          <div className="container p5 mx-auto rounded-lg bg-gray-100 py-5">
            <div className="grid grid-cols-5 gap-2 justify-items-center">
              {category.map((_category, index) => {
                const { image, name, slug, id } = _category;
                return (
                  <CategoryList key={index} image={image} name={name} id={id} slug={slug} />
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
