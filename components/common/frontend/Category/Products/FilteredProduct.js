import Select from "react-dropdown-select";
import { defaultValues } from "../../../../../constant";
import dynamic from "next/dynamic";


function FilteredProduct(props){
    const ProductList = dynamic(() => import("../../Category/Products/FilteredProductList"));
    const filteredProduct = props.products;
    console.log("products: ", props.products)

    return  <>
    <div className="flex flex-wrap">
        <div className="md:w-3/4">
            <span className="text-sm uppercase tracking-wide">

            </span>
        </div>
        <div className="md:w-1/4">
            <div className="flex flex-wrap">
                <div className="md:w-1/3 flex items-center">
                    <span className="inline-block font-bold text-sm text-red-600 uppercase tracking-wide">
                        sort by :
                    </span>
                </div>
                <div className="md:w-2/3">
                    <Select
                        options={defaultValues.productFilterDropDown}
                        values={defaultValues.selectedValues}
                        searchable={false}
                        labelField="name"
                        valueField="value"
                        className="text-xs uppercase" />
                </div>
            </div>

        </div>
    </div>
    <div className="p-5 mt-2 border-t ">
        <ul className="grid grid-cols-4 gap-10">    
            { filteredProduct.length ? filteredProduct.map((_product, index) => {
                    const { images, thumbnail, title, brand, description, rating, price, id, discountPercentage } =
                    _product;
                    return (
                        <li key={`likey${index}`} className="col-span-full sm:col-span-2 lg:col-span-1 group rounded-xs border border-gray-50 cursor-pointer"> 
                                <ProductList
                                key={index}
                                image={images[0]}
                                name={title}
                                brand={brand}
                                description={description}
                                price={price}
                                id={price}
                                rating={rating}
                                discPercentage={discountPercentage}
                            />
                        </li> 
                    
                    );
                }): <center><small>No product found for selected filters</small></center>}
        </ul>
    </div>
    </>
}

export default FilteredProduct