"use client"
import CardComponent from "./CardComponent";

export default function CardsContainer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <CardComponent
        title="MYTHIC"
        description="Ancient wisdom, realm between realities."
        imgSrc="/mythic.png"
      />
     
      <CardComponent
        title="WARRIOR"
        description="Resilience, honor in unending conflict."
        imgSrc="/warrior.png"
      />
       <CardComponent
        title="ANIME"
        description=" Imagination, courage, boundless adventures."
        imgSrc="/anime.png"
      />
      <CardComponent
        title="RISER"
        description="Ascending against odds, achieving greatness."
        imgSrc="/riser.png"
      />
    </div>
  );
}
