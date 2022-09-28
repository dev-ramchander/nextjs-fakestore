function SelectedCategory(props){
    return <div className="selected-category">
    <span className="font-bold uppercase text-lg tracking-wider">
      {props.selectedCatg}
    </span>
    <span className="uppercase text-sm tracking-wider">
      {" "}
      - {props.itemsCount} items
    </span>
  </div>
}
export default SelectedCategory