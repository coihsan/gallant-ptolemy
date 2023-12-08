import { personaldata } from "../constant/data";
export default function Hero() {
  return (
    <section className="w-full px-3 py-[9rem]">
      <div className="max-w-screen-lg mx-auto ">
        {personaldata.map((personal) => (
          <div key={personal.key}>
            <h1 className="text-4xl font-semibold pb-6">
              Hi 👋🏻, I'm {personal.fullName}
            </h1>
            <ul className="list-disc pl-3 ml-3 grid gap-3">
              {personal.experties.map((experties, index) => (
                <li className="font-medium text-zinc-300" key={index}>
                  {experties}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
