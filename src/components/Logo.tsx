import cbcTransparentLogo from '../assets/cbc-transparent.png';

interface LogoProps {
  className?: string;
  onClick?: () => void;
  shadow?: boolean;
}

const Logo = ({ className = 'w-50 lg:w-55 h-auto', onClick, shadow = true }: LogoProps) => {
  const shadowClass = shadow ? 'drop-shadow-[0_5px_15px_rgba(0,0,0,0.6)]' : '';
  const classes = `object-contain ${shadowClass} ${className}`.trim();

  return (
    <img
      src={cbcTransparentLogo}
      alt="Certified Bag Chasers logo"
      className={classes}
      onClick={onClick}
    />
  );
};

export default Logo;
