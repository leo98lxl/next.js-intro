import { fetchPokemonREST, getPokemon } from "@/data/characters-pokemon";

interface Pokemon {
  count?: number;
  next?: string;
  previous?: string;
  results: {
    name: string;
    url: string;
  }
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
    const { page, pages, items: pokemon, } = await fetchPokemonREST(currentPage, pageLimit, query);
    return (
        <div>
            {pokemon?.map((poke) =>
            <DisplayPokemon results={poke} /> )}
        </div>
    )  
}