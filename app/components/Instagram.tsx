import Link from "next/link";
import Image from "next/image";
export default function Instagram() {
  return (
    <section className="w-full px-3">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex items-center gap-3">
          <h1>Instagram</h1>
          <Link href={"#"}>
            <Image
              src={"/instagram.svg"}
              width={30}
              height={30}
              alt="instagram"
            />
            <span>Instagram</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
