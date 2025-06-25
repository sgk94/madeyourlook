import PageLayout from "../components/PageLayout";
import Card from "../components/Card";
import streetwearimage from "../../public/streetwear.png";
import smartcasualimage from "../../public/smartcasual.png";
import highfashionimage from "../../public/highfashion.png";
import outdoorimage from "../../public/outdoor.png";
import retroimage from "../../public/retro.png";

export default function Preferences() {
  const collection = [
    { label: "Street Wear", tag: "streetwear", styleImage: streetwearimage },
    { label: "Smart Casual", tag: "smartcasual", styleImage: smartcasualimage },
    { label: "High Fashion", tag: "highfashion", styleImage: highfashionimage },
    { label: "Outdoor", tag: "outdoor", styleImage: outdoorimage },
    { label: "Retro", tag: "retro", styleImage: retroimage },
  ];

  const cards = collection.map((card) => {
    return (
      <Card label={card.label} styleImage={card.styleImage} tag={card.tag} />
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
