import PageLayout from "../components/PageLayout";
import Card from "../components/Card";
import streetwearimage from "../../public/streetwear.png";
import smartcasualimage from "../../public/smartcasual.png";
import highfashionimage from "../../public/highfashion.png";
import outdoorimage from "../../public/outdoor.png";
import retroimage from "../../public/retro.png";
import { useState } from "react";

export default function Preferences() {
  const styleArray = [
    {
      label: "Street Wear",
      tag: "streetwear",
      styleImage: streetwearimage,
      isSelected: false,
    },
    {
      label: "Smart Casual",
      tag: "smartcasual",
      styleImage: smartcasualimage,
      isSelected: false,
    },
    {
      label: "High Fashion",
      tag: "highfashion",
      styleImage: highfashionimage,
      isSelected: false,
    },
    {
      label: "Outdoor",
      tag: "outdoor",
      styleImage: outdoorimage,
      isSelected: false,
    },
    { label: "Retro", tag: "retro", styleImage: retroimage, isSelected: false },
  ];

  const [preferences, setPreferences] = useState(styleArray);

  const onClickHandler = (label: string) => {
    setPreferences((prevCollection) =>
      prevCollection.map((card) =>
        card.label === label ? { ...card, isSelected: !card.isSelected } : card
      )
    );
  };

  const cards = preferences.map((card) => {
    return (
      <Card
        key={card.label}
        label={card.label}
        styleImage={card.styleImage}
        tag={card.tag}
        isSelected={card.isSelected}
        onClickHandler={onClickHandler}
      />
    );
  });

  return (
    <PageLayout>
      <div className="flex-row justify-center min-h-screen bg-gray-50 px-4 p-2 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cards}
      </div>
    </PageLayout>
  );
}
