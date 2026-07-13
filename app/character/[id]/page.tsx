import data from "@/data/characters.json";
import { notFound } from "next/navigation";
import { FuturamaCard } from "@/app/about/page";

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
        <section>
            <FuturamaCard name={character.name} 
                image={character.image}
                species={character.species}
                gender={character.gender}
                status={character.status}
                createdAt={character.createdAt} />
        </section>
    )
}
