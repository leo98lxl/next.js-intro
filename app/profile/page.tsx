import type { Metadata } from "next";
import Image from "next/image";

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

export default async function Profile() {
  const fetchedPoke = await fetch("https://pokeapi.co/api/v2/pokemon/");
  if (!fetchedPoke.ok) throw new Error("Failed to load Pokémon!");

  const jsonPoke: PokemonResponse = await fetchedPoke.json();
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Image src="/IMG_2586.jpg" width={800} height={200} loading="lazy" alt="Picture of movie collection"></Image>
      <h1 className="p-4 font-bold text-center">This is the Profile page.</h1>
        <div className="grid col-span-full gap-4 text-base font-medium sm:flex-row">
                  <a
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-39.5"
                    href="/contact"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="dark:invert"
                      src="/vercel.svg"
                      alt="Vercel logomark"
                      width={16}
                      height={16}
                    />
                    Join us!
                  </a>
                  <div>
                    {jsonPoke.results.map((pokemon) =>
                    <DisplayPokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} /> )}
                  </div>
          </div>
    </div>
  );
}