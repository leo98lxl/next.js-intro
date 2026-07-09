import data from "@/data/fact.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Physical Collections",
  description: "Get in touch with us at Physical Collections",
};

interface CatFacts {
  fact: string;
  length: number;
}

function CatCard({fact, length}: CatFacts) {
  return (
    <article>
      <h3 className="p-4 font-bold text-cyan-500">Cat fact of the day: <span className="font-normal">{fact}</span></h3>
      <p className="p-4 font-bold text-cyan-500">Average age of cat owner: <span className="font-normal">{length}</span></p>
    </article>
  )
}

export default function Contact() {
  return (
    <div>
      <h1 className="p-4 font-bold text-center">This is the Contact page.</h1>
      <section>
        <CatCard fact={data.fact} length={data.length} />
      </section>
    </div>
  );
}