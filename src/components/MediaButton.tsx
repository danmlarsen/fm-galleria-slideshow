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
      className={`transition duration-300 focus:text-black focus:outline-none focus:ring-black focus-visible:ring-2 focus-visible:ring-offset-4 ${disabled ? "opacity-15" : "hover:opacity-50"}`}
      aria-label={direction === "next" ? "Next slide" : "Previous slide"}
      onClick={onClick}
      disabled={disabled}
    >
      {direction === "next" ? (
        <IconNext className={`stroke-black`} />
      ) : (
        <IconBack className={`stroke-black`} />
      )}
    </button>
  );
}
