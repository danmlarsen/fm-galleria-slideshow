import IconBack from "../ui/IconBack";
import IconNext from "../ui/IconNext";

type AppProps = {
  direction: "back" | "next";
  onClick: () => void;
  disabled: boolean;
};

export default function MediaButton({
  direction = "next",
  onClick,
  disabled,
}: AppProps) {
  return (
    <button
      aria-label={direction === "next" ? "Next slide" : "Previous slide"}
      onClick={onClick}
      disabled={disabled}
    >
      {direction === "next" ? (
        <IconNext
          className={`stroke-black transition-opacity duration-300 ${disabled ? "opacity-15" : "hover:opacity-50"}`}
        />
      ) : (
        <IconBack
          className={`stroke-black transition-opacity duration-300 ${disabled ? "opacity-15" : "hover:opacity-50"}`}
        />
      )}
    </button>
  );
}
