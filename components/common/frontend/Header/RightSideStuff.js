import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

function RightSideStuff(props) {
  const UserProfileIcon = dynamic(() =>
    import("../../../heroicons/UserProfileIcon/")
  );
  const ShoppingBagIcon = dynamic(() =>
    import("../../../heroicons/ShoppingBagIcon/")
  );
  const WishListIcon = dynamic(() =>
    import("../../../heroicons/WishListIcon/")
  );

  return (
    <div className="inline-flex items-center border-0 py-1 px-3 text-base mt-4 md:mt-0">
      <div className="grid grid-cols-3 gap-4">
        <div className="justify-between cursor-pointer">
          <div className="group inline-block relative">
            <UserProfileIcon class="w-5 h-5" />
            <small className="font-bold">Profile</small>
            <ul className="wid-300px navDropDown absolute p-5 border-05 hidden bg-white rounded-sm shadow-2xl text-gray-700 group-hover:block">
              <li className="pb-2">
                <span className="text-sm font-bold">Welcome</span>
                <small className="block">
                  To access account and manage orders
                </small>
                <button
                  type="button"
                  className="mt-2 text-red-600 border border-gray-300 text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:border-red-600 tracking-wider uppercase font-bold "
                >
                  login / signup
                </button>
              </li>
              <li className="border-t-2 pb-2">
                <Link href="/orders">
                  <a
                    className="hover:font-bold pt-3 tracking-wider text-xs block whitespace-no-wrap uppercase"
                    href="#"
                  >
                    orders
                  </a>
                </Link>
                <Link href="/giftcards">
                  <a
                    className="hover:font-bold pt-3 tracking-wider text-xs block whitespace-no-wrap uppercase"
                    href="#"
                  >
                    gitftcards
                  </a>
                </Link>
                <Link href="/wishlist">
                  <a
                    className="hover:font-bold pt-3 tracking-wider text-xs block whitespace-no-wrap uppercase"
                    href="#"
                  >
                    wishlist
                  </a>
                </Link>
              </li>
              <li className="border-t-2 pb-2">
                <Link href="/credits">
                  <a
                    className="hover:font-bold pt-3 tracking-wider text-xs block whitespace-no-wrap uppercase"
                    href="#"
                  >
                    credits
                  </a>
                </Link>

                <Link href="/saved cards">
                  <a
                    className="hover:font-bold pt-3 tracking-wider text-xs block whitespace-no-wrap uppercase"
                    href="#"
                  >
                    saved cards
                  </a>
                </Link>
                <Link href="/saved-vpa">
                  <a
                    className="hover:font-bold pt-3 tracking-wider text-xs block whitespace-no-wrap uppercase"
                    href="#"
                  >
                    saved vpa
                  </a>
                </Link>
                <Link href="/saved-address">
                  <a
                    className="hover:font-bold pt-3 tracking-wider text-xs block whitespace-no-wrap uppercase"
                    href="#"
                  >
                    saved address
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="justify-between cursor-pointer">
          <WishListIcon class="w-5 h-5" />
          <small className="font-bold">Wishlist</small>
        </div>
        <div className="justify-between cursor-pointer">
          <ShoppingBagIcon class="w-5 h-5" />
          <small className="font-bold">Bag</small>
        </div>
      </div>
    </div>
  );
}

export default RightSideStuff;
