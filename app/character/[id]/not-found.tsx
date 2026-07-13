import Image from "next/image";
import Link from "next/link";

export default function CharacterNotFound() {
    return (
        <main className="text-center">
            <h1 className="py-4 font-extrabold">Oops! Character not found!</h1>
            <Image src="/IMG_4215.jpg" width={800} height={200} loading="lazy" alt="Picture of empty movie packaging"></Image>
            <div className="py-4 font-bold">
                <Link className="py-4 underline text-cyan-500 hover:text-cyan-200 focus-visible:text-cyan-200 transition duration-150" href="/about">Back to Character Page</Link>
                <p className="py-4 font-normal">or</p>
                <Link className="py-4 underline text-cyan-500 hover:text-cyan-200 focus-visible:text-cyan-200 transition duration-150" href="/">Back to Home Page</Link>
            </div>
        </main>
    )
}