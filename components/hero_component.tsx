import Image from "next/image";

function multiply(x:number, y:number) {
    return x*y;
}

export default function Hero() {
    return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <Image src="/IMG_2585.jpg" width={800} height={200} loading="lazy" alt="Picture of movie collection"></Image>
        <div className="flex flex-col items-center gap-6 py-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Welcome to Physical Collections!
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            The best place to store your movies, TV shows, video games and more. As of now, we have over {multiply(30, 500)} members!
          </p>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Storing your collections since 1998.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-39.5"
            href="/contact"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Join us!
          </a>
        </div>
    </div>
  );
}