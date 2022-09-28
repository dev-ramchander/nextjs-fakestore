import { defaultValues } from "../constant";

export function updateOrderNo(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomNo(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomUserIds() {
  // min and max included
  return (
    updateOrderNo(1, 826) +
    "," +
    updateOrderNo(1, 183) +
    "," +
    updateOrderNo(1, 183)
  );
}

export function nameFileter(name) {
  // min and max included
  var _name = name.split(" ");
  return _name[1] + " " + _name[2];
}

export function classByStaus(status) {
  // min and max included
  switch (status) {
    case "Alive":
      return "bg-green-600";
      break;
    case "Dead":
      return "bg-red-600";
    default:
      return "bg-gray-600";
      break;
  }
}

export function formatDate(createdDate) {
  const _date = new Date(createdDate);
  return _date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function loadMoreIds(_val){
    let ids = _val+1;
    for(var i = parseInt(ids+1); i <= (_val + defaultValues.paginate); ++i){
        ids += ","+i;
    }
    return ids;
}

export function productDiscount(price, discInPercentage) {
  var discountedprice = price - (discInPercentage / 100) * price;
  return discountedprice.toFixed(2)
}
