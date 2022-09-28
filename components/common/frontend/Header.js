import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

export default function Header() {

  const UserProfileIcon  = dynamic(() => import("../../heroicons/UserProfileIcon/"));
  const ShoppingBagIcon  = dynamic(() => import("../../heroicons/ShoppingBagIcon/"));
  const WishListIcon  = dynamic(() => import("../../heroicons/WishListIcon/"));
  const RightSideStuff  = dynamic(() => import("../frontend/Header/RightSideStuff"));
  return (
    <header className="text-gray-600 bg-white body-font sticky top-0 shadow-sm z-50">
      <div className="mx-auto flex flex-wrap pt-5 p-2 flex-col md:flex-row items-center">
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
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link href="/">
            <a className="mr-5 hover:text-gray-900 font-medium tracking-wider uppercase">Clothes</a>
           </Link>
          <Link href="/">
            <a className="mr-5 hover:text-gray-900 font-medium tracking-wider uppercase">shoes </a>
           </Link>
          <Link href="/">
            <a className="mr-5 hover:text-gray-900 font-medium tracking-wider uppercase">others</a>
          </Link>
          <Link href="/rick-and-morty">
            <a className="mr-5 hover:text-gray-900 font-medium tracking-wider uppercase">
              rick & morty 
              <sup className="px-1 py-0.5 ml-0.5 bg-red-600 rounded-sm text-red-200 font-extrabold tracking-wide">new</sup>
            </a>
           </Link>
        </nav>
       <RightSideStuff />
      </div>
    </header>
  )
}
