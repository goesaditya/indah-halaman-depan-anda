
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from '@/components/ui/card';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('semua');
  
  const portfolioItems = [
    {
      title: "BAKTI Kominfo",
      description: "Konsultasi SLA Monitoring Satelit & Infrastruktur Jaringan 3T",
      category: "pemerintah",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "SDPPI Kominfo",
      description: "Konsultasi dan Deployment IoT untuk Laboratorium Uji Tapos",
      category: "pemerintah",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Telkom",
      description: "Network & Service Assessment Nasional (IndiHome), Studi Kasus 5G & FMC",
      category: "pemerintah",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Pertamina Patra Niaga",
      description: "Assessment & Optimasi Google Cloud, AWS, Prediksi Biaya Cloud, dan Otomasi CI/CD",
      category: "pemerintah",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "BUMN Holding Farmasi",
      description: "Perencanaan Data Center, Roadmap IT, dan Sistem IoT Industri",
      category: "pemerintah",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Telmark Integrasi Indonesia",
      description: "Konsultasi Pengembangan Sistem Call Center",
      category: "swasta",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "PDAM Batam, Tangerang, Bogor",
      description: "Pembangunan Sistem Call Center Terintegrasi (Omni-Channel)",
      category: "swasta",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Skinnaire Clinic",
      description: "Implementasi CCTV, IPPBX, Infrastruktur Jaringan, Server, Website, dan IT Support",
      category: "swasta",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  const filteredItems = activeTab === 'semua' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);

  return (
    <section id="portofolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Portofolio <span className="gradient-text">Proyek</span></h2>
          <p className="section-subtitle">
            Lihat rekam jejak keberhasilan kami dalam membantu berbagai organisasi
          </p>
        </div>
        
        <Tabs defaultValue="semua" className="mb-10" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-indoblade-light-gray">
              <TabsTrigger value="semua" className="px-6">Semua</TabsTrigger>
              <TabsTrigger value="pemerintah" className="px-6">Pemerintah & BUMN</TabsTrigger>
              <TabsTrigger value="swasta" className="px-6">Swasta & UMKM</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="semua" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <Card key={index} className="overflow-hidden group card-hover">
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indoblade-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white">
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <p className="text-sm text-white/80">{item.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="pemerintah" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <Card key={index} className="overflow-hidden group card-hover">
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indoblade-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white">
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <p className="text-sm text-white/80">{item.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="swasta" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <Card key={index} className="overflow-hidden group card-hover">
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indoblade-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white">
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <p className="text-sm text-white/80">{item.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;
