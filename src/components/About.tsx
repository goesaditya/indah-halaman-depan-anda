
import { CheckCircle } from "lucide-react";

const About = () => {
  const highlights = [
    "Pengalaman dalam proyek strategis nasional",
    "Solusi teknologi terintegrasi dan terkini",
    "Tim profesional dan bersertifikasi",
    "Pendekatan yang adaptif dan personal",
    "Solusi yang skalabel untuk berbagai ukuran bisnis"
  ];

  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Tentang <span className="gradient-text">Indoblade ICT</span></h2>
          <p className="section-subtitle">
            Mitra terpercaya dalam perjalanan transformasi digital Anda
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-indoblade-purple/5 rounded-lg"></div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-indoblade-bright-blue/5 rounded-lg"></div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Tim Indoblade" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Indoblade ICT Solutions
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Indoblade ICT Solutions merupakan perusahaan penyedia layanan teknologi informasi yang berfokus pada pengembangan solusi digital terintegrasi untuk sektor bisnis, pendidikan, pemerintahan, serta UMKM.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Dengan pengalaman dalam berbagai proyek strategis nasional, kami menggabungkan inovasi teknologi cloud, komunikasi berbasis AI, Internet of Things (IoT), serta pelatihan teknis guna membantu klien mencapai efisiensi, keamanan, dan pertumbuhan berkelanjutan.
            </p>
            
            <div className="space-y-4 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-indoblade-purple mr-3 h-6 w-6 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-indoblade-light-gray p-6 rounded-lg border-l-4 border-indoblade-purple">
              <p className="italic text-gray-700">
                "Kami berkomitmen untuk menghadirkan layanan yang adaptif, profesional, dan dapat disesuaikan dengan kebutuhan setiap mitra."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
