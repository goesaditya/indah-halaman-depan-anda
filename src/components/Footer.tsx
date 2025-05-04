
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name: 'Solusi Digital & Web', href: '#' },
    { name: 'Sistem Komunikasi VoIP', href: '#' },
    { name: 'Infrastruktur Jaringan & IoT', href: '#' },
    { name: 'Layanan IT Support', href: '#' },
    { name: 'Pelatihan Teknologi', href: '#' },
    { name: 'Konsultasi IT', href: '#' },
    { name: 'Cybersecurity Assessment', href: '#' },
  ];
  
  const quickLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Tentang Kami', href: '#tentang' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Portofolio', href: '#portofolio' },
    { name: 'Kontak', href: '#kontak' },
  ];
  
  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', name: 'Facebook' },
    { icon: <Instagram size={20} />, href: '#', name: 'Instagram' },
    { icon: <Twitter size={20} />, href: '#', name: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', name: 'LinkedIn' },
  ];
  
  return (
    <footer className="bg-indoblade-blue text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="font-heading font-bold text-2xl mb-6">
              Indoblade<span className="text-indoblade-purple">ICT</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Mitra transformasi digital yang andal dan terpercaya untuk bisnis, pendidikan, pemerintahan, dan UMKM.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Layanan</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.href} className="text-gray-300 hover:text-white transition-colors">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Link Cepat</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex flex-col">
                <span className="text-gray-400 text-sm">WhatsApp</span>
                <a href="https://wa.me/6282312912828" className="text-gray-300 hover:text-white">
                  082312912828
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-400 text-sm">Email</span>
                <a href="mailto:support@indoblade.com" className="text-gray-300 hover:text-white">
                  support@indoblade.com
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-400 text-sm">Website</span>
                <a href="http://www.indoblade.com" className="text-gray-300 hover:text-white">
                  www.indoblade.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-white/20 text-center text-gray-400 text-sm">
          <p>© {currentYear} Indoblade ICT Solutions. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
