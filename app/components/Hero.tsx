import { personaldata } from "../constant/data";
export default function Hero() {
  return (
    <section>
      <h1 className="text-2xl font-medium">Hi 👋🏻, I'm Gallant Ptolemy</h1>
      {personaldata.map((personal) => (
        <ul key={personal.key} className="list-disc">
          <li>{personal.skills}</li>
        </ul>
      ))}
    </section>
  );
}
