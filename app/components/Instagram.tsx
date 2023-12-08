import Link from "next/link";
import Image from "next/image";
export default function Instagram() {
  return (
    <section className="w-full px-5">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-semibold">My Photos</h1>
          <Link
            className="flex items-center gap-1 bg-zinc-200 px-4 py-1 text-zinc-950 font-medium rounded-full w-max"
            href={"#"}
          >
            <Image
              src={"/instagram.svg"}
              width={16}
              height={16}
              alt="instagram"
            />
            <span>@bobybrown</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
