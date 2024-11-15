import IconViewImage from "../assets/images/icon-view-image.svg";

type AppProps = {
  onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
};

export default function ViewImageButton({ onClick }: AppProps) {
  return (
    <button
      className="absolute left-4 top-4 flex min-h-[40px] items-center gap-4 bg-black/75 px-4 text-link2 uppercase text-white transition duration-300 hover:bg-white/25 md:bottom-4 md:top-auto"
      onClick={onClick}
    >
      <img src={IconViewImage} alt="Expand icon" />
      <span>View Image</span>
    </button>
  );
}
