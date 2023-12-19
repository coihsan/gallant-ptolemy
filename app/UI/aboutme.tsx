import Link from "next/link";
import { icons } from "../constant/Icons";

export default function AboutmeButton() {
  return (
    <>
      <Link
        className="font-sans group border border-zinc-700 hover:border-white w-max min-w-[171px] min-h-[50px] flex items-center transition-all duration-300 ease-linear justify-center rounded-full  bg-zinc-900 gap-5"
        href={"/"}
      >
        About Me
        <span className="hidden group-hover:block fill-white opacity-0 group-hover:opacity-100 transition-transform duration-300 ease-linear">
          {icons.chevronRight}
        </span>
      </Link>
    </>
  );
}
