import Link from "next/link";
function BreadCrumbs(props) {
  console.log("props: ", props.queryURL);
  return (
    <>
      <Link href="/">
        <a className="uppercase tracking-widest font-bold text-xs inline-block">
            Home
        </a>
      </Link>
      {props.queryURL
        ? props.queryURL.map((breacCrumbs, index) => {
            return (
              <div
                className="uppercase tracking-widest font-bold text-xs inline-block"
                key={index}
              >
                <span className="px-1">/</span>
                {breacCrumbs}
              </div>
            );
          })
        : ""}
    </>
  );
}
export default BreadCrumbs;
