import type { Metadata } from "next";
import Form from "next/form";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Profile - Physical Collections",
  description: "Create your own profile to store your collection",
};

interface Pokemon {
    name: string;
    url: string;
}

interface PokemonResponse {
  results: Pokemon[];
}

function DisplayPokemon({name, url}: Pokemon) {
  return (
    <article className="grid">
      <h3 className="font-extrabold text-center uppercase p-4">{name}</h3>
      <p className="py-4 text-cyan-500 underline">{url}</p>
    </article>
  )
}

export default async function Profile({searchParams}: {searchParams: Promise<{[key: string]: string | string[] | undefined }>;}) {
  const fetchedPoke = await fetch("https://pokeapi.co/api/v2/pokemon/");
  if (!fetchedPoke.ok) throw new Error("Failed to load Pokémon!");
  const jsonPoke: PokemonResponse = await fetchedPoke.json();

  const {page: pageString, limit, query} = (await searchParams);
  const currentPage = pageString ? Number(pageString) : 1;
  const pageLimit = limit ? Number(limit) : 25;
  const url = new URL("https://pokeapi.co/api/v2/pokemon/");
  if (query !== "") url.searchParams.append("query", query);
  url.searchParams.append("page", String(pageString));
  url.searchParams.append("size", String(pageLimit));
  const res = await url;
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Image src="/IMG_2586.jpg" width={800} height={200} loading="lazy" alt="Picture of movie collection"></Image>
      <h1 className="p-4 font-bold text-center">This is the Profile page.</h1>
        <div className="grid col-span-full gap-4 text-base font-medium sm:flex-row">
                  <Form action="/search">
                  <input className="outline-2" name="query" />
                  <button className="p-4" type="submit">Search</button>
                  </Form>
                  <div>
                    {jsonPoke.results.map((pokemon) =>
                    <DisplayPokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} /> )}
                  </div>
                <Link href={ {pathname: "/profile", query: {page: currentPage - 1 }}}>Previous Page</Link>
                <Link href={ {pathname: "/profile", query: {page: currentPage + 1 }}}>Next Page</Link>
          </div>
    </div>
  );
}