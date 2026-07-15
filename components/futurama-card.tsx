import data from "@/data/characters-futurama.json";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  id?: number;
  name: string;
  gender?: string;
  status?: string;
  species?: string;
  createdAt?: string;
  image: string | null;
}

export function FuturamaCard({name, image, gender, status, species, createdAt}: CardProps){
  return (
    <article className="grid">
      <h3 className="font-extrabold text-center p-4">{name}</h3>
      
      {image ? <Image src={image} alt={`Picture of Futurama character ${name}`} width={400} height={600}/> : <img src="https://placehold.co/600x400" alt="Placeholder image"/>}
      
      <div className="p-4 text-cyan-500">
        {species && <p><strong>Species: </strong>{species}</p>}
        {gender && <p><strong>Gender: </strong>{gender}</p>}
        {status && <p><strong>Status: </strong>{status}</p>}
        {createdAt && <p><strong>Creation date: </strong>{createdAt}</p>}
      </div>
    </article>
  )
}

export default function DisplayFuturamaCard() {
  const {page, pages, items: characters} = data;
  return (
    <main>
      <div className="p-4 text-center">
        <h1 className="p-4 font-bold">This is the Character Page.</h1>
        <p>Click on "Read more" to learn more about each character.</p>
      </div>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(30ch,1fr))] gap-4">
        {characters.slice(0, 50).map((char)=>(
          <li key={char.id}>
          <FuturamaCard 
          name={char.name} 
          image={char.image}
          species={char.species}
          gender={char.gender}
          status={char.status}
          createdAt={char.createdAt} />
          <Link href={`/character/${char.id}`} className="p-4 underline text-cyan-500 hover:text-cyan-200 focus-visible:text-cyan-200 transition duration-150">Read more</Link>
        </li>
        ))}
        </ul>
      <p className="p-4 text-center">Showing <span className="font-bold text-cyan-500">{page}</span> of <span className="font-bold text-cyan-500">{pages}</span></p>
    </main>
  );
}