import { defaultValues } from "../../../../../constant";
function ProductSideBar(props) {
  const filterSubCategories =
    defaultValues.productsSideBarFilterOption.subCategories;
  
    const filterPriceRange =
    defaultValues.productsSideBarFilterOption.priceRange;
    
    const filterDiscountRange =
    defaultValues.productsSideBarFilterOption.discoundRange;

  console.log(
    "productsSideBarFilterOption ==> ",
    defaultValues.productsSideBarFilterOption
  );
  return (
    <>
      <div className="flex flex-wrap">
        <div className="md:w-1/2">
          <span className="font-bold text-xs text-black uppercase tracking-wide">
            filters
          </span>
        </div>
        <div className="md:w-1/2 text-right">
          <span className="font-bold text-xs text-red-600 uppercase tracking-wide">
            clear all
          </span>
        </div>
      </div>
      <div className="flex flex-wrap mt-5 pb-5 border-t border-r">
        <div className="md:w-full pt-3">
          <div className="flex subcategories pb-3">
            <p className="font-bold uppercase tracking-wider text-black text-sm">
              {filterSubCategories.title}
            </p>
          </div>
          <ul className="capitalize text-xs">
            {filterSubCategories.value
              ? filterSubCategories.value.map((category, index) => {
                  return (
                    <li className="pt-2" key={index}>
                      <label className="cursor-pointer flex items-center">
                        <input
                          type="checkbox"
                          id={`${category}-${index}`}
                          value={category}
                          className="w-4 h-4 text-red-600"
                        />
                        <span
                          htmlFor={`${category}-${index}`}
                          className="pl-3 tracking-wide items-center justify-center"
                        >
                          {category}
                        </span>
                      </label>
                    </li>
                  );
                })
              : "<li><small>nothing found</small></li>"}
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap pb-5 border-t border-r">
        <div className="md:w-full pt-5">
          <div className="flex pricerange pb-3">
            <p className="font-bold uppercase tracking-wider text-black text-sm">
              {filterPriceRange.title}
            </p>
          </div>
          <ul className="capitalize text-xs">
            {filterPriceRange.value
              ? filterPriceRange.value.map((price, index) => {
                  return (
                    <li className="pt-2" key={index}>
                      <label className="cursor-pointer flex items-center">
                        <input
                          type="checkbox"
                          id={`${price}-${index}`}
                          value={`${price.from}-${price.to}`}
                          className="w-4 h-4 text-red-600"
                        />
                        <span
                          htmlFor={`${price}-${index}`}
                          className="pl-3 tracking-wide items-center justify-center"
                        >
                          {`$${price.from} to $${price.to}`}
                        </span>
                      </label>
                    </li>
                  );
                })
              : "<li><small>nothing found</small></li>"}
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap pb-5 border-t border-r">
        <div className="md:w-full pt-5">
          <div className="flex pricerange pb-3">
            <p className="font-bold uppercase tracking-wider text-black text-sm">
              {filterDiscountRange.title}
            </p>
          </div>
          <ul className="capitalize text-xs">
            {filterDiscountRange.value
              ? filterDiscountRange.value.map((discount, index) => {
                  return (
                    <li className="pt-2" key={index}>
                      <label className="cursor-pointer flex items-center">
                        <input
                          type="checkbox"
                          id={`${discount}-${index}`}
                          value={`${discount.from}-${discount.to}`}
                          className="w-4 h-4 text-red-600"
                        />
                        <span
                          htmlFor={`${discount}-${index}`}
                          className="pl-3 tracking-wide items-center justify-center"
                        >
                          {`${discount.from}% to ${discount.to}%`}
                        </span>
                      </label>
                    </li>
                  );
                })
              : "<li><small>nothing found</small></li>"}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductSideBar;
