import MainNav from "@/components/main_nav"
import styles from "@/app/about/about.module.css"

export default function Home() {
  return (
    <div>
        <MainNav>
        </MainNav>
        <p className={styles.about}>This is the About Page.</p>
    </div>
  );
}