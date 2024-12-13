"use client"; // Ensures this component is rendered client-side

import { useEffect, useState } from "react";
import Image from "next/image";
import Hero from "./componenets/Hero";
import Projects from "./componenets/Projects";
import Skills from "./componenets/Skills";
import About from "./componenets/About";
import Contacts from "./componenets/Contact";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This ensures that the client-side code runs only after the component mounts
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // You can render a loader or placeholder here if needed
  }
  return (
    <div>
      <Hero/>
       <Projects/>
      <Skills/>
      <About/>
      <Contacts/>
    </div>
  );
}
