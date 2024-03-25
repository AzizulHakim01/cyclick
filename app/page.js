import Image from "next/image";
import Hero from "./components/hero/Hero";
import Card from "./components/card/Card";

export default function Home() {
  return (
    <main className="w-full h-auto">
      <Hero/>
      <Card/>
    </main>
  );
}
