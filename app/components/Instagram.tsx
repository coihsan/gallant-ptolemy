import Link from "next/link";
import Image from "next/image";
import { gallery } from "../constant/data";
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
        <div className="grid grid-cols-3 gap-3 w-full pt-[2rem]">
          {gallery.map((postImage) => (
            <div className="relative overflow-hidden group">
              <Image
                className="grayscale hover:grayscale-0 transition-all ease-linear duration-300 hover:scale-[1.1]"
                src={postImage.src}
                width={400}
                height={300}
                alt={postImage.alt}
              />
              <div className="absolute bottom-3 translate-y-32 group-hover:translate-y-0 left-3 transition-transform ease-in-out duration-300">
                <h3 className="text-[1.3rem]">{postImage.title}</h3>
                <span className="text-[14px]">{postImage.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
