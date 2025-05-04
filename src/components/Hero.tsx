
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="beranda"
      className="relative pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-white to-indoblade-light-purple/20"
    >
      {/* Background shapes */}
      <div className="absolute top-20 right-0 w-64 h-64 rounded-full bg-indoblade-purple/10 -z-10"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-indoblade-bright-blue/10 -z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-indoblade-purple/10 text-indoblade-purple font-medium text-sm mb-4 animate-fade-in">
                Solusi Digital Terintegrasi
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="gradient-text">Teknologi Tepat,</span> <br />
                Solusi Cepat.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-in">
                Mitra terpercaya untuk transformasi digital bisnis, pendidikan, pemerintahan, dan UMKM dengan solusi teknologi terintegrasi yang adaptif dan profesional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-primary flex items-center gap-2 group">
                  Konsultasi Gratis
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" className="btn-secondary">
                  Pelajari Layanan
                </Button>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-indoblade-purple/10 rounded-full blur-md"></div>
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Indoblade ICT Solutions" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-indoblade-bright-blue/20 rounded-full blur-md"></div>
          </div>
        </div>
        
        {/* Stats or quick facts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 bg-white p-6 rounded-xl shadow-lg animate-slide-in">
          <div className="text-center">
            <h3 className="text-3xl font-bold gradient-text">50+</h3>
            <p className="text-gray-600">Proyek Selesai</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold gradient-text">100%</h3>
            <p className="text-gray-600">Kepuasan Klien</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold gradient-text">7+</h3>
            <p className="text-gray-600">Kategori Layanan</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold gradient-text">24/7</h3>
            <p className="text-gray-600">Dukungan Teknis</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
