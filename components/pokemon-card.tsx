import { fetchPokemonREST } from "@/data/characters-pokemon";
import Link from "next/link";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonResponse {
  count?: number;
  next?: string;
  previous?: string;
  results: Pokemon[];
}

function DisplayPokemon({results}: {results: Pokemon}) {
  return (
    <article className="grid">
      <h3 className="font-extrabold text-center uppercase p-4">{results.name}</h3>
      <p className="py-4 text-cyan-500 underline">{results.url}</p>
    </article>
  )
}

export default async function DisplayPokemonCard({currentPage, pageLimit, query,}: {currentPage: number, pageLimit: number, query?: string}) {
    const { count, previous, next, results: pokemon, } = await fetchPokemonREST(currentPage, pageLimit, query);
    return (
        <div>
            {pokemon?.map((poke) =>
            <DisplayPokemon key={poke.name} results={poke} /> )}
            <p>Total Pokémon: {count}</p>
            <Link href={`/profile/${previous}`}>Previous Page</Link>
            <Link href={`/profile/${next}`}>Next Page</Link>
        </div>
    )  
}