import MainNav from "@/components/main_nav";
import data from "@/data/characters.json";

interface CardProps {
  id?: number;
  name: string;
  gender?: string;
  status?: string;
  species?: string;
  createdAt?: string;
  image: string | null;
}

function FuturamaCard({name, image}: CardProps){
  return (
    <div className="grid">
      <h3 className="font-extrabold text-center p-4">{name}</h3>
      {image ? <img src={image}/> : <img src="https://placehold.co/600x400"/>}
      <a href="#" className="p-4 underline text-cyan-500 hover:text-cyan-200 focus-visible:text-cyan-200 transition duration-150">Läs mer</a>
    </div>
  )
}

export default function About() {
  const {page, pages, items: characters} = data;
  return (
    <div>
        <MainNav>
        </MainNav>
        <h1 className="p-4 font-bold text-center">This is the About Page.</h1>
        <section>
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(30ch,1fr))] gap-4">
            {characters.slice(0, 50).map((char)=>(
              <li key={char.id}>
              <h3 className="font-extrabold text-center p-4">{char.name}</h3>
              {char.image ? <img src={char.image}/> : <img src="https://placehold.co/600x400"/>}
              <a href="#" className="p-4 underline text-cyan-500 hover:text-cyan-200 focus-visible:text-cyan-200 transition duration-150">Läs mer</a>
            </li>
            ))}
          </ul>
          <p className="p-4 text-center">Showing <span className="font-bold text-cyan-500">{page}</span> of <span className="font-bold text-cyan-500">{pages}</span></p>
        </section>
    </div>
  );
}