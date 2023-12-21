import Link from "next/link";
export default function Footer() {
  return (
    <footer className="h-[4rem] w-full text-center flex items-center justify-between max-[600px]:flex-col gap-4 border-t-[1px] border-zinc-900 py-6">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-1">
          <span>Built in</span>
          <Link className="text-zinc-400" href={"https://nextjs.org/"}>
            Next.js
          </Link>
        </div>
        <div className="flex items-center gap-1">
          <span>Made by </span>
          <Link className="text-zinc-400" href={"#"}>
            coihsan.design
          </Link>
        </div>
      </div>
      <div className="text-zinc-400 pb-6">©2023 Bobby Brown</div>
    </footer>
  );
}
