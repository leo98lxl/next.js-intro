import type { Metadata } from "next";
import Form from "next/form";
import Image from "next/image";
import Link from "next/link";
import DisplayPokemonCard from "@/components/pokemon-card";

export const metadata: Metadata = {
  title: "Profile - Physical Collections",
  description: "Create your own profile to store your collection",
};

export default async function Profile({searchParams}: {searchParams: Promise<{[key: string]: string | string[] | undefined }>;}) {
  const {page: pageString, limit, query} = (await searchParams);
  const currentPage = pageString ? Number(pageString) : 1;
  const pageLimit = limit ? Number(limit) : 25;
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Image src="/IMG_2586.jpg" width={800} height={200} loading="lazy" alt="Picture of movie collection"></Image>
      <h1 className="p-4 font-bold text-center">This is the Profile page.</h1>
        <div className="grid col-span-full gap-4 text-base font-medium sm:flex-row">
                  <Form action="/profile">
                  <input className="outline-2" name="query" />
                  <button className="p-4 text-cyan-500 hover:text-cyan-200 focus-visible:text-cyan-200 hover:cursor-pointer transition duration-150" type="submit">Search</button>
                  </Form>
                  <DisplayPokemonCard currentPage={currentPage} pageLimit={pageLimit} query={query}>
                  </DisplayPokemonCard>
                <Link className="text-cyan-500 hover:text-cyan-200 focus-visible:text-cyan-200 hover:cursor-pointer transition duration-150" href={ {pathname: "/profile", query: {page: currentPage - 1 }}}>Previous Page</Link>
                <Link className="text-cyan-500 hover:text-cyan-200 focus-visible:text-cyan-200 hover:cursor-pointer transition duration-150" href={ {pathname: "/profile", query: {page: currentPage + 1 }}}>Next Page</Link>
          </div>
    </div>
  );
}