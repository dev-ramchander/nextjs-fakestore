import { Fragment } from "react";
import MainHeader from "./MainHeader";
import Headernew from "./Headernew";
import Header from "../components/common/frontend/Header";
function LayouApp(props) {
  return (
    <Fragment>
      <main className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
        <Header />
        {props.children}
      </main>
    </Fragment>
  );
}
export default LayouApp;
