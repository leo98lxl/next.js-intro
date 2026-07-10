import type { Metadata } from "next";
import data from "@/data/fact.json";
import Image from "next/image";

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
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Image src="/IMG_4155.jpg" width={800} height={200} loading="eager" alt="Picture of movie collection"></Image>
      <section>
      <h1 className="p-4 font-bold text-center">This is the Contact page.</h1>
        <CatCard fact={data.fact} length={data.length} />
      </section>
    </div>
  );
}