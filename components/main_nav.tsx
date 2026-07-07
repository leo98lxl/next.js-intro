import Link from "next/link";

export default function MainNav() {
    return (
        <header className="flex flex-wrap flex-col gap-[1rem] md:flex-row px-[1rem] py-[1rem] bg-gray-700">
            <nav className="flex flex-wrap flex-col gap-[1rem] content-between md:flex-row text-cyan-500">
                <Link className="font-bold text-cyan-500" href="/">Home</Link>
                <Link className="" href="/about">About</Link>
                <Link className="" href="/contact">Contact</Link>
                <Link className="" href="/profile">Profile</Link>
            </nav>
        </header>
    )
}