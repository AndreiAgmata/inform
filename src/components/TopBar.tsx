import React from "react";

function TopBar() {
  return (
    <section className="top w-full fixed top-0 z-50 bg-zinc-950">
      <div className="top-bar container mx-auto flex items-center justify-between px-6 pt-3 pb-2">
        <p className="font-light">IN&apos;FORM STUDIO</p>
        <p className="font-light hidden md:block">
          CURATED COLLECTION OF FURNITURE
        </p>
        <p className="font-light hidden md:block">INTERIOR SPACES</p>
        <p className="font-light ">FW 23&apos;</p>
      </div>
    </section>
  );
}

export default TopBar;
