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

interface PokemonQl {
  name: string;
  id: number;
}

interface PokemonQlResponse {
  data?: {
    gen3_species?: Array<{
      name: string;
      id: number;
    }>;
  };
  errors?: Array<{ message: string }>;
}

function DisplayPokemonQl ({name, id}: PokemonQl) {
  return (
    <article>
      <h3 className="font-extrabold uppercase py-4">{name}</h3>
        <p className="py-4 text-cyan-500">ID: {id}</p>
    </article>
  );
}

function CatCard({fact, length}: CatFacts) {
  return (
    <article>
      <h3 className="p-4 font-bold text-cyan-500">Cat fact of the day: <span className="font-normal">{fact}</span></h3>
      <p className="p-4 font-bold text-cyan-500">Average age of cat owner: <span className="font-normal">{length}</span></p>
    </article>
  )
}

export default async function Contact() {
  const pokeQl = `query samplePokeAPIquery {
  gen3_species: pokemonspecies(
    where: {generation: {name: {_eq: "generation-iii"}}}
    order_by: {id: asc}
  ) {
    name
    id
  }
  generations: generation {
    name
    pokemon_species: pokemonspecies_aggregate {
      aggregate {
        count
      }
    }
  }
}`;

  const fetchedPokeQl = await fetch("https://graphql.pokeapi.co/v1beta2/", { method: "POST", headers: {
  "Content-Type": "application/json" }, body: JSON.stringify({ query: pokeQl }), });
  if (!fetchedPokeQl.ok) throw new Error("Failed to load Pokémon!");

  const jsonPokeQl: PokemonQlResponse = await fetchedPokeQl.json();
  const pokemonList = jsonPokeQl.data?.gen3_species ?? [];

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Image src="/IMG_4155.jpg" width={800} height={200} loading="lazy" alt="Picture of movie collection"></Image>
      <section>
      <h1 className="p-4 font-bold text-center">This is the Contact page.</h1>
        <CatCard fact={data.fact} length={data.length} />

        {pokemonList.map((pokemon) => (
        <DisplayPokemonQl key={pokemon.name} name={pokemon.name} id={pokemon.id} /> ))}
      </section>
    </div>
  );
}