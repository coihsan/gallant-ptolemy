import { personaldata } from "../constant/data";
export default function Hero() {
  return (
    <section className="w-full px-1">
      <div className="max-w-screen-lg mx-auto ">
        {personaldata.map((personal) => (
          <div key={personal.key}>
            <h1 className="text-2xl font-semibold">
              Hi 👋🏻, I'm {personal.fullName}
            </h1>
            <ul className="list-disc pl-3 ml-3">
              {personal.experties.map((experties, index) => (
                <li className="font-medium" key={index}>
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
