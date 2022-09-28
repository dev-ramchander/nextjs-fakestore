import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import React from "react";
import { useRouter } from "next/router";
import { endPoints } from "../../../constant/endpoints";

function categoriesProducts(props) {
  const [loading, setLoading] = useState(false);
  const [itemsCount, setItemsCount] = useState(0);
  const [catgProducts, setCatgProducts] = useState(null);
  const FadeLoader = dynamic(() =>
    import("../../../components/Loader/FadeLoader")
  );
  const BreadCrumbs = dynamic(() =>
    import("../../../components/common/frontend/BreadCrumbs")
  );
  
  const SelectedCategory = dynamic(() =>
    import("../../../components/common/frontend/Category/Products/SelectedCategory")
  );
  
  const ProductSideBar = dynamic(() =>
    import("../../../components/common/frontend/Category/Products/ProductSideBar")
  );
  
  const FilteredProductProduct = dynamic(() =>
    import("../../../components/common/frontend/Category/Products/FilteredProduct")
  );

  
  const router = useRouter();
  // const categoriesSlug = router.query.categoriesProducts;
  const categoriesSlug = props.queryStringParam.categoriesProducts;

  if (!categoriesSlug) {
    return <FadeLoader size="10" color="#b5b5b5" />;
  }

  const selectedCatg = categoriesSlug[categoriesSlug.length - 1];
  console.log(props)
  return (
    <div className="md:container md:mx-auto">
      <section className="text-gray-600 pt-3 pb-1 body-font">
        {loading ? (
          <FadeLoader size="10" color="#b5b5b5" />
        ) : (
          <BreadCrumbs queryURL={router.query.categoriesProducts} />
        )}
      </section>
      <section className="text-black pt-3 pb-1 body-font">
        <SelectedCategory selectedCatg={selectedCatg} itemsCount={itemsCount} />
      </section>
      <section className="pt-3 pb-1">
        <div className="flex flex-wrap">
          <div className="md:w-1/5 left-container">
            <ProductSideBar />
          </div>
          <div className="md:w-4/5 right-container">
            <FilteredProductProduct products={props.data} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default categoriesProducts;

export async function getServerSideProps(context) {
  const queryStringParam = context.query;
  const categroyProductUrl = endPoints.categroyProductUrl
  
  const res = await fetch(`${categroyProductUrl}${queryStringParam.categoriesProducts}`);
  const data = await res.json();

  return {
    props:{
      queryStringParam:queryStringParam,
      url:`${categroyProductUrl}${queryStringParam.categoriesProducts}`,
      data:data.products
    }
  }
}
