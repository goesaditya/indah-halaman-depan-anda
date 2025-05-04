
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { title: 'Beranda', href: '#beranda' },
    { title: 'Tentang', href: '#tentang' },
    { title: 'Layanan', href: '#layanan' },
    { title: 'Portofolio', href: '#portofolio' },
    { title: 'Klien', href: '#client-section' },
    { title: 'Kontak', href: '#kontak' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="font-heading font-bold text-2xl text-indoblade-blue">
            Indoblade<span className="text-indoblade-purple">ICT</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  className="font-medium text-gray-700 hover:text-indoblade-purple transition-colors"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <Button className="btn-primary">Hubungi Kami</Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white w-full py-4 px-4 shadow-lg">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  className="block font-medium text-gray-700 hover:text-indoblade-purple transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </a>
              </li>
            ))}
            <li>
              <Button className="btn-primary w-full" onClick={() => setIsOpen(false)}>
                Hubungi Kami
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
