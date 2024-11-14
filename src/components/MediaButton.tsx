import IconBack from '../assets/images/icon-back-button.svg';
import IconNext from '../assets/images/icon-next-button.svg';

type AppProps = {
  direction: 'back' | 'next';
  onClick: () => void;
  disabled: boolean;
};

export default function MediaButton({ direction = 'next', onClick, disabled }: AppProps) {
  return (
    <button aria-label={direction === 'next' ? 'Next slide' : 'Previous slide'} onClick={onClick} disabled={disabled}>
      <img src={direction === 'next' ? IconNext : IconBack} alt={direction === 'next' ? 'Next icon' : 'Back icon'} />
    </button>
  );
}
