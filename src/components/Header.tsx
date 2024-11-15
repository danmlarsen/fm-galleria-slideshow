import Logo from "./Logo";
import SlideshowButton from "./SlideshowButton";

export default function Header() {
  return (
    <header className="mb-10 flex justify-between border-b border-b-gray-300 py-10">
      <div>
        <Logo />
      </div>
      <div>
        <SlideshowButton />
      </div>
    </header>
  );
}
