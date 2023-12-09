import Link from "next/link";
import { icons } from "../constant/Icons";

export default function AboutmeButton() {
  return (
    <>
      <Link
        className="group border border-white w-max min-w-[171px] min-h-[50px] flex items-center justify-center rounded-full  bg-black gap-5"
        href={"/"}
      >
        About Me
        <span className="hidden group-hover:block fill-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear">
          {icons.chevronRight}
        </span>
      </Link>
    </>
  );
}
