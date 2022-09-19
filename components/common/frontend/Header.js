import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    // <nav className="w-full z-30 top-0 py-5">
    //   <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
    //     <Link href="/">
    //       <a className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl tracking-widest">
    //         <Image
    //           className="fill-current text-gray-800 mr-2"
    //           alt="Logo"
    //           width="100"
    //           height="70"
    //           src="/img/logo/logo2.png"
    //         />
    //         {/* <span className="text-3xl">RANDOMS.DEV</span> */}
    //       </a>
    //     </Link>
    //     <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
    //       {/* <a className="mr-5 text-gray-900">randomuser.me</a> */}
    //       <Link href="/rick-and-morty">
    //         <a className="mr-5 text-gray-900 font-bold uppercase tracking-widest">
    //           rickandmorty
    //         </a>
    //       </Link>
    //       <Link href="/fake-store-api">
    //         <a className="mr-5 text-gray-900 font-bold uppercase tracking-widest">
    //           fakestore
    //         </a>
    //       </Link>
    //     </nav>
    //     <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
    //       Login
    //       <svg
    //         fill="none"
    //         stroke="currentColor"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth="2"
    //         className="w-4 h-4 ml-1"
    //         viewBox="0 0 24 24"
    //       >
    //         <path d="M5 12h14M12 5l7 7-7 7"></path>
    //       </svg>
    //     </button>
    //   </div>
    // </nav>
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="fex title-font font-medium itemsl-center text-gray-900 mb-4 md:mb-0 tracking-widest">
            <Image
              className="fill-current text-gray-800 mr-2"
              alt="Logo"
              width="100"
              height="70"
              src="/img/logo/logo2.png"
            />
          </a>
        </Link>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hover:text-gray-900">First Link</a>
          <a class="mr-5 hover:text-gray-900">Second Link</a>
          <a class="mr-5 hover:text-gray-900">Third Link</a>
          <a class="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>
        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
