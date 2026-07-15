import data from "@/data/characters-futurama.json";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FuturamaCard } from "@/components/futurama-card";

export default async function AboutCharacter({params}:{params: Promise<{id: string}>}) {
    const {id: idString} = await params;
    const idNumber = Number(idString);
    const character = data.items.find((character) => character.id === idNumber);

    if (!character) {
        return notFound();
    }

    if (Number.isNaN(idNumber)) {
        return notFound();
    }

    return (
        <main className="grid content-center gap-4">
            <FuturamaCard name={character.name} 
                image={character.image}
                species={character.species}
                gender={character.gender}
                status={character.status}
                createdAt={character.createdAt} />
            <div className="col-span-full p-4 font-bold text-end">
                <Link className="underline text-cyan-500 hover:text-cyan-200 focus-visible:text-cyan-200 transition duration-150" href="/about">Back to characters</Link>
            </div>
        </main>
    )
}

export async function generateMetadata({params}:{params: Promise<{id: string}>}) {
    const {id: idString} = await params;
    const idNumber = Number(idString);
    const character = data.items.find((character) => character.id === idNumber);

    if (!character) {
        return null;
    }

    if (Number.isNaN(idNumber)) {
        return null;
    }

    return { title: character.name, description: `Character page for Futurama character ${character.name}.`};
}
