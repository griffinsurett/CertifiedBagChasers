import { useEffect, useState } from 'react';
import Logo from './Logo';

interface NavbarProps {
  currentPage: string;
  navigate: (page: string) => void;
}

const navItems = [
  { name: 'Home', page: 'home' },
  { name: 'Products', page: 'products' },
  { name: 'The Book', page: 'book' },
  { name: 'Contact', page: 'contact' },
];

const mobileNavItems = ['home', 'products', 'book', 'mentorship', 'contact'];

const Navbar = ({ currentPage, navigate }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (page: string) => {
    navigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`sticky top-0 left-0 right-0 z-[1000] px-10 py-1 flex items-center justify-center transition-all duration-300 ${scrolled ? 'bg-bg-primary/95 backdrop-blur-[10px] border-b border-gold/10' : 'bg-transparent'}`}>
        <div className="hidden md:flex items-center gap-8 uppercase text-sm font-medium tracking-[1px] absolute left-10">
          {navItems.map(item => (
            <span
              key={item.page}
              onClick={() => handleNavigation(item.page)}
              className={`cursor-pointer transition-colors duration-300 ${currentPage === item.page ? 'text-gold' : 'text-text-secondary hover:text-gold'}`}
            >
              {item.name}
            </span>
          ))}
        </div>

        <div onClick={() => handleNavigation('home')} className="cursor-pointer flex items-center">
          <Logo className="w-50 lg:w-55 xl:w-60 h-auto" />
        </div>

        <div className="hidden md:flex items-center gap-4 absolute right-10">
          <button className="btn-login">
            <span>→</span> Login
          </button>
        </div>

        <div
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex md:hidden cursor-pointer flex-col gap-[5px] absolute right-10"
        >
          <div className="w-[25px] h-0.5 bg-gold" />
          <div className="w-[25px] h-0.5 bg-gold" />
          <div className="w-[25px] h-0.5 bg-gold" />
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed top-20 left-0 right-0 bottom-0 bg-bg-primary/[0.98] z-[999] flex flex-col items-center justify-center gap-8">
          {mobileNavItems.map(page => (
            <span
              key={page}
              onClick={() => handleNavigation(page)}
              className={`cursor-pointer font-semibold text-2xl uppercase transition-colors duration-300 ${currentPage === page ? 'text-gold' : 'text-text-secondary hover:text-gold'}`}
            >
              {page}
            </span>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
