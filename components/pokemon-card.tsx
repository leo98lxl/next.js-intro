import { fetchPokemonREST } from "@/data/characters-pokemon";

interface Pokemon {
  name: string;
  url: string;
}

function DisplayPokemon({name, url}: Pokemon) {
  return (
    <article className="grid">
      <h3 className="font-extrabold text-center uppercase p-4">{name}</h3>
      <p className="py-4 text-cyan-500 underline">{url}</p>
    </article>
  )
}

export default async function DisplayPokemonCard({currentPage, pageLimit, query,}: {currentPage: number, pageLimit: number, query?: string}) {
    const { page, pages, items: pokemon, } = await fetchPokemonREST(currentPage, pageLimit, query);
    return (
        <div>
            {pokemon.map((poke) =>
            <DisplayPokemon key={poke.name} name={poke.name} url={poke.url} /> )}
        </div>
    )  
}