export const defaultValues = {
  initialIds: "1,2,3,4,5,6",
  featuredProduct: "?limit=4&offset=120",
  paginate: 6,
  homePageProductsLimit: 4,
  maxProductOffset: 180,
  minProductOffset: 1,
  productSuccess: "Success",
  dummyFeaturedProduct: "?limit=4&skip=25",
  productFilterDropDown: [
    { value: "recomended", name: "Recomended" },
    { value: "high-to-low", name: "Price:High to Low" },
    { value: "low-to-high", name: "Price:Low to High" },
    { value: "better-discount", name: "Better Discount" },
  ],
  selectedValues: [{ value: "recomended", name: "Recomended" }],
  productsSideBarFilterOption: {
    subCategories: {
      title: "sub categories",
      value: ["mens", "womens", "both mens & womens"],
    },
    discoundRange: {
      title: "discount range",
      value: [
        {from:"10", to: "20"},
        {from:"20", to: "30"},
        {from:"30", to: "40"},
        {from:"40", to: "50"},
        {from:"50", to: "60"},
        {from:"60", to: "70"},
        {from:"70", to: "80"},
      ],
    },
    priceRange: {
      title: "price range",
      value: [
        {from:"200", to: "1999"},
        {from:"2000", to: "4999"},
        {from:"5000", to: "9999"},
        {from:"10000", to: "14999"},
        {from:"15000", to: "19999"},
        {from:"20000", to: "29999"},
        {from:"30000", to: "50000"},
      ],
    },
  },
};
