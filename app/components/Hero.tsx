import AboutmeButton from "../UI/aboutme";
import ContactmeButton from "../UI/contact";
import { personaldata } from "../constant/data";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="w-full px-5 py-[9rem]">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between gap-11 max-[600px]:flex-col max-[600px]:items-start">
        <Image src={"/people.webp"} width={500} height={500} alt="people" />
        {personaldata.map((personal) => (
          <div key={personal.key}>
            <h1 className="text-[4rem] leading-none font-semibold pb-6">
              I'm {personal.fullName}
            </h1>
            <ul className="list-disc pl-3 ml-3 grid gap-3">
              {personal.experties.map((experties, index) => (
                <li className="font-medium text-zinc-300" key={index}>
                  {experties}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 pt-[2rem]">
              <ContactmeButton />
              <AboutmeButton />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
