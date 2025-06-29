import PageLayout from "../components/PageLayout";
import Card from "../components/Card";
import streetwearimage from "../../public/streetwear.png";
import smartcasualimage from "../../public/smartcasual.png";
import highfashionimage from "../../public/highfashion.png";
import outdoorimage from "../../public/outdoor.png";
import retroimage from "../../public/retro.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { savePreferredStyles } from "../lib/localStorageUtils";

export default function Preferences() {
  const navigate = useNavigate();
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

  // HANDLERS

  const onClickHandler = (label: string) => {
    setPreferences((prevCollection) =>
      prevCollection.map((card) =>
        card.label === label ? { ...card, isSelected: !card.isSelected } : card
      )
    );
  };

  const preferenceSubmitHandler = async () => {
    const selectedTags = preferences
      .filter((p) => p.isSelected)
      .map((p) => p.tag);
    savePreferredStyles(selectedTags);
    navigate("/dashboard");
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
      <div className="min-h-screen bg-gray-50 p-4 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cards}
      </div>

      <div className="flex justify-end mt-4">
        <button
          onClick={preferenceSubmitHandler}
          className="bg-stone-500 rounded-md p-2 hover:bg-stone-700 text-white"
        >
          submit preferences
        </button>
      </div>
    </PageLayout>
  );
}
