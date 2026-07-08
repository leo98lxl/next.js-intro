import Link from "next/link";

const links = [
    {href: "/about", label: "About", id:"1",},
    {href: "/contact", label: "Contact", id:"2"},
    {href: "/profile", label: "Profile", id:"3"}
];

export default function MainNav() {
    return (
        <header className="flex flex-wrap flex-col gap-4 md:flex-row px-4 py-4 bg-gray-700">
            <nav className="flex flex-wrap flex-col gap-4 content-between md:flex-row text-cyan-500">
                <Link className="font-bold text-cyan-500 hover:text-cyan-200 focus-visible:text-cyan-200 transition duration-150" href="/">Home</Link>
                {links.map((link) => (
                    <Link className="hover:text-cyan-200 focus-visible:text-cyan-200 transition duration-150" href={link.href} key={link.id}>{link.label}</Link>
                ))}
            </nav>
        </header>
    )
}