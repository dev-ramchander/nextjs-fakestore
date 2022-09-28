import FadeLoader from "react-spinners/FadeLoader";

function Loader(props) {
  return (
    
      <div className="main-loader flex h-screen justify-center items-center">
        <div className="text-center">
          {props.text ? <p>{props.text}</p>:""}
            <FadeLoader size={props.size} color={props.color} />
        </div>
      </div>
  )
}

export default Loader;
