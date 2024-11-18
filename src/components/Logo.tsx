import IconLogo from "../assets/images/logo.svg";

export default function Logo() {
  return (
    <h1 aria-label="Galleria">
      <img className="h-8 lg:h-12" src={IconLogo} alt="Galleria Logo" />
    </h1>
  );
}
