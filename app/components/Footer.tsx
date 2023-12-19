import Link from "next/link";
export default function Footer() {
  return (
    <footer className="h-[4rem] w-full text-center flex items-center justify-between border-t-[1px] border-zinc-900">
      <div>
        <div className="flex items-center gap-3">
          <span>Built in</span>
          <Link className="text-zinc-500" href={"#"}>
            Next.js
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <span>Made by </span>
          <Link className="text-zinc-500" href={"#"}>
            coihsan.design
          </Link>
        </div>
      </div>
      <div>©2023 Bobby Brown</div>
    </footer>
  );
}
