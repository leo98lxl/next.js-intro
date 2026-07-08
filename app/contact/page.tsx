import MainNav from "@/components/main_nav";
import data from "@/data/fact.json";

export default function Contact() {
  return (
    <div>
        <MainNav>
        </MainNav>
        <h1 className="p-4 font-bold text-center">This is the Contact page.</h1>
        <section>
          <ul>
            <li>
              <h3 className="p-4 font-bold text-cyan-500">Cat fact of the day: <span className="font-normal">{data.fact}</span></h3>
              <p className="p-4 font-bold text-cyan-500">Average age of cat owner: <span className="font-normal">{data.length}</span></p>
            </li>
          </ul>
        </section>
    </div>
  );
}