import type { Metadata } from "next";
import Hero from "@/components/hero_component";

export const metadata: Metadata = {
  title: "Home - Physical Collections",
  description: "Store your physical media!",
};

export default function Home() {
  return (
    <div>
      <Hero>
      </Hero>
    </div>
  );
}