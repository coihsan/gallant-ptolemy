import Link from "next/link";
import Image from "next/image";
import { icons } from "../constant/Icons";
export default function ContactmeButton() {
  return (
    <>
      <Link
        className="font-sans group text-black border font-semibold border-white rounded-full w-max min-w-[171px] min-h-[50px] bg-white transition-colors duration-500 ease-linear flex justify-center items-center gap-5"
        href={"/"}
      >
        Contact
        <span className="hidden group-hover:block fill-black opacity-0 group-hover:opacity-100 transition-all duration-500 ease-linear">
          {icons.chevronRight}
        </span>
      </Link>
    </>
  );
}
