import Image from "next/image";

const logos = [
    {src: "/file.svg", href: "#", id: "1",},
    {src: "/globe.svg", href: "#", id: "2",},
    {src: "/window.svg", href: "#", id: "3",},
    {src: "/next.svg", href: "#", id: "4",}
];

export default function MainFooter() {
    return (
        <footer className="flex flex-wrap flex-col gap-4 md:flex-row px-4 py-4 bg-gray-700">
            <nav className="flex flex-wrap flex-col gap-4 content-between md:flex-row text-cyan-500">
                <Image
                    className="dark:invert"
                    src="/vercel.svg"
                    alt="Vercel logomark"
                    width={16}
                    height={16} />
                <p>Storing your collections since 1998.</p>
                <ul>
                    <li className="flex flex-wrap gap-4 md:flex-row">
                    {logos.map((logo) => (
                        <a href={logo.href} key={logo.id}><Image className="dark:invert" src={logo.src} alt="Logo" width={24} height={24}></Image></a>
                    ))}
                    </li>
                </ul>
            </nav>
        </footer>
    )
}