import Link from "next/link";

export default function MainNav() {
    return (
        <header className="flex flex-wrap flex-col gap-[1rem] md:flex-row px-[1rem]">
            <Link href="/">Home</Link>
            <nav className="flex flex-wrap flex-col gap-[1rem] md:flex-row">
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/profile">Profile</Link>
            </nav>
        </header>
    )
}