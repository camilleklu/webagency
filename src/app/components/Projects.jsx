"use client";

import ScrollableText from "./ScrollableText";


export function Projects() {
  return (
    <section id="projets" className="py-16 md:py-32 bg-black relative overflow-hidden">   
      <ScrollableText text={["Créativité", "Dynamisme", "Proximité"]} separator={["★"]} separatorColor="#D070E5" font="Obviously" left={[30, 45, 60]} />
    </section>
  );
}
