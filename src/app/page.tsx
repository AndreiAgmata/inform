import Hero from "@/components/Hero";
import SingleItem from "@/components/SingleItem";

import TopBar from "@/components/TopBar";
import Vision from "@/components/Vision";

export default function Home() {
  return (
    <main className="main">
      <TopBar />
      <Hero />
      <Vision />
      <div className="spacer w-full h-64 container mx-auto px-6">
        <div className="inner bg-neutral-50 h-full"></div>
      </div>
      <SingleItem />
    </main>
  );
}
