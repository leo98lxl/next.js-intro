import Hero from "@/components/hero_component";
import MainNav from "@/components/main_nav";
import data from "@/data/characters.json";

export default function Home() {
  return (
    <div>
        <MainNav>
        </MainNav>
        <Hero>
        </Hero>
        <section>
          <ul>
            {data.items.map((char)=>(
              <li key={char.id}>
              <h3>{char.name}</h3>
              {char.image && <img src={char.image}/>}
              <a href="#">Läs mer</a>
            </li>
            ))}
            <li>
              <h3>Namn</h3>
              <img></img>
              <a href="">Läs mer</a>
            </li>
          </ul>
        </section>
    </div>
  );
}