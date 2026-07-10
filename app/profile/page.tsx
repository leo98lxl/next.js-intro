import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Profile - Physical Collections",
  description: "Create your own profile to store your collection",
};

export default function Profile() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Image src="/IMG_2586.jpg" width={800} height={200} loading="eager" alt="Picture of movie collection"></Image>
      <h1 className="p-4 font-bold text-center">This is the Profile page.</h1>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
                  <a
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
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