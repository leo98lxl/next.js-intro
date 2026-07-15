import pokemon from "@/data/pokeapi.co.json";

export function getPokemon() {
  return pokemon;
}

interface Pokemon {
  count?: number;
  next?: string;
  previous?: string;
  results: {
    name: string;
    url: string;
  }
}

interface PokemonResponse {
  items: Pokemon[];
  page: number;
  pages: number;
}

export async function fetchPokemonREST(page = 1, limit = 25, query=""): Promise<PokemonResponse> {
    const urlPoke = new URL("https://pokeapi.co/api/v2/pokemon/");

    urlPoke.searchParams.append("page", String(page));
    urlPoke.searchParams.append("size", String(limit));
    if (query !== "") urlPoke.searchParams.append("query", query);

    const resPoke = await fetch(urlPoke);
    if (!resPoke.ok) {
        console.warn(resPoke);
        throw new Error(`Failed to load Pokémon! ${resPoke.status}`);
    }
    
    return await resPoke.json();
}