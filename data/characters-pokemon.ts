import pokemon from "@/data/pokeapi.co.json";

export function getPokemon() {
  return pokemon;
}

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

export async function fetchPokemonREST(offset: number, limit: number, query=""): Promise<PokemonResponse> {
  const urlPoke = new URL(`https://pokeapi.co/api/v2/pokemon/`);
  urlPoke.searchParams.append("offset", String(offset));
  urlPoke.searchParams.append("limit", String(limit));
  if (query !== "") urlPoke.searchParams.append("query", query);
  const resPoke = await fetch(urlPoke);
  if (!resPoke.ok) {
      console.warn(resPoke);
      throw new Error(`Failed to load Pokémon! ${resPoke.status}`);
  }

  return await resPoke.json();
}

export function convertPokeUrl(url: string | null | undefined, limit: number) {
  if (!url) return null;

  const parsedPoke = new URL(url);
  const offsetPoke = Number(parsedPoke.searchParams.get("offset") ?? 0);

  return Math.floor(offsetPoke / limit + 1);
}