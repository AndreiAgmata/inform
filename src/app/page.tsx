"use client";
import Hero from "@/components/Hero";
import Preloader from "@/components/Preloader";
import SingleItem from "@/components/SingleItem";

import TopBar from "@/components/TopBar";
import Vision from "@/components/Vision";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <main className="main">
      <Preloader />
      <TopBar currentPage={currentPage} />
      <Hero setCurrentPage={setCurrentPage} />
      <Vision setCurrentPage={setCurrentPage} />
      <SingleItem setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </main>
  );
}
