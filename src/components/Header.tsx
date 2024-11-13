import Logo from './Logo';
import SlideshowButton from './SlideshowButton';

export default function Header() {
  return (
    <header className="flex justify-between py-10 border-b border-b-gray-300 mb-10">
      <div>
        <Logo />
      </div>
      <div>
        <SlideshowButton />
      </div>
    </header>
  );
}
