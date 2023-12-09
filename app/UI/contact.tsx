import Link from "next/link";
import Image from "next/image";
import { icons } from "../constant/Icons";
export default function ContactmeButton() {
  return (
    <>
      <Link
        className="group text-black hover:text-white border font-semibold border-white rounded-full w-max min-w-[171px] min-h-[50px] bg-white hover:bg-black transition-colors duration-300 ease-linear flex justify-center items-center gap-5"
        href={"/"}
      >
        Contact
        <span className="hidden group-hover:block fill-white opacity-0 group-hover:opacity-100 transition-transform duration-300 ease-linear">
          {icons.chevronRight}
        </span>
      </Link>
    </>
  );
}
