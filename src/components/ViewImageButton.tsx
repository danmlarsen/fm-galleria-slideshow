import IconViewImage from "../assets/images/icon-view-image.svg";

type AppProps = {
  onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
};

export default function ViewImageButton({ onClick }: AppProps) {
  return (
    <button
      className="absolute bottom-4 left-4 flex items-center gap-4 bg-black/75 px-4 py-[14px] text-link2 uppercase text-white transition duration-300 hover:bg-white/25"
      onClick={onClick}
    >
      <img src={IconViewImage} alt="Expand icon" />
      <span>View Image</span>
    </button>
  );
}
