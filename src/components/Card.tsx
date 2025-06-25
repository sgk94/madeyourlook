type CardProps = {
  styleImage: string;
  tag: string;
  label: string;
  isSelected: boolean;
  onClickHandler: (label: string) => void;
};

export default function Card({
  styleImage,
  tag,
  label,
  isSelected,
  onClickHandler,
}: CardProps) {
  return (
    <button
      onClick={() => onClickHandler(label)}
      className={`bg-white rounded-xl shadow-md p-4 max-w-[185px] max-h-[300px] ${
        isSelected ? "outline outline-3 outline-purple-500" : ""
      }`}
    >
      <span>{label}</span>

      <img
        className="rounded-md"
        src={styleImage}
        alt={`${tag} image`}
      />
    </button>
  );
}
