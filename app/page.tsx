import Hero from "@/components/hero_component";
import MainNav from "@/components/main_nav";
import data from "@/data/characters.json";

// interface CardProps {
//   id: number;
//   name: string;
//   gender: string;
//   status: string;
//   species: string;
//   createdAt: string;
//   image: string | null;
// }

// function FuturamaCard({name, image}: CardProps){
//   return (
//     <div className="grid">
//       <h3>{name}</h3>
//         <img src={image}/>
//       <a href="#">Läs mer</a>
//     </div>
//   )
// }

export default function Home() {
  const {page, pages, items: characters} = data;
  return (
    <div>
        <MainNav>
        </MainNav>
        <Hero>
        </Hero>
        <section>
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(30ch,1fr))] gap-4">
            {characters.slice(0, 50).map((char)=>(
              <li key={char.id}>
              <h3>{char.name}</h3>
              {char.image ? <img src={char.image}/> : <img src="https://placehold.co/600x400"/>}
              <a href="#">Läs mer</a>
            </li>
            ))}
            <li>
              <h1>Namn</h1>
              <img></img>
              <a href="">Läs mer</a>
            </li>
          </ul>
          <p>Showing {page} of {pages}</p>
        </section>
    </div>
  );
}