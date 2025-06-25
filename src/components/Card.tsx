import { useState } from "react";

type CardProps = {
  styleImage: string;
  tag: string;
  label: string;
};

export default function Card({ styleImage, tag, label }: CardProps) {
  const [selected, setSelected] = useState(false);
  const onClickHandler = () => {
    setSelected((prevSelected) => !prevSelected);
  };
  return (
    <button
      onClick={onClickHandler}
      className={`bg-white rounded-xl shadow-md p-4 max-w-[185px] max-h-[300px] ${
        selected ? "outline outline-3 outline-purple-500" : ""
      }`}
    >
      <span>{label}</span>

      <img className="rounded-md" src={styleImage} alt={`${tag} image`} />
    </button>
  );
}
