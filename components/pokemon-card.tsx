import { convertPokeUrl, fetchPokemonREST } from "@/data/characters-pokemon";
import Link from "next/link";

interface Pokemon {
  name: string;
  url: string;
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
  const { count, previous, next, results: pokemon} = await fetchPokemonREST(currentPage, pageLimit, query);
  const previousPokePage = convertPokeUrl(previous, currentPage);
  const nextPokePage = convertPokeUrl(next, currentPage);

    return (
        <div>
            {pokemon?.map((poke) =>
            <DisplayPokemon key={poke.name} results={poke} /> )}
            <div className="py-4">
            <p>Total Pokémon: <span className="p-4 text-cyan-500">{count}</span></p>

            {previousPokePage && <Link className="p-4 hover:text-cyan-200 focus-visible:text-cyan-200 hover:cursor-pointer transition duration-150" 
            href={ {pathname: "/profile", query: {page: currentPage - 1 }}}>Previous Page</Link>}

            {nextPokePage && <Link className="p-4 hover:text-cyan-200 focus-visible:text-cyan-200 hover:cursor-pointer transition duration-150"
            href={ {pathname: "/profile", query: {page: currentPage + 1 }}}>Next Page</Link>}
            </div>
        </div>
    )  
}