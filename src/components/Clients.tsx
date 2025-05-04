
import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";

const Clients = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    const element = document.getElementById('client-section');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  // Client logos - replace with actual client logos when available
  const clients = [
    { name: "BAKTI Kominfo", logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "SDPPI Kominfo", logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "Telkom", logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "Telkomsel", logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "Pertamina Patra Niaga", logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  ];
  
  // Education partners
  const partners = [
    { 
      name: "Telkom University", 
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    { 
      name: "ITB Bandung", 
      logo: "https://images.unsplash.com/photo-1532649538693-f3a2ec1bf8bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
  ];

  return (
    <section id="client-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Klien <span className="gradient-text">& Mitra</span> Kami</h2>
          <p className="section-subtitle">
            Dipercaya oleh berbagai organisasi dan bermitra dengan institusi pendidikan terkemuka
          </p>
        </div>
        
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Clients Section */}
          <h3 className="text-xl font-bold text-center mb-8">Klien Kami</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-16">
            {clients.map((client, index) => (
              <Card key={index} className="flex items-center justify-center p-6 h-24 hover:shadow-md transition-all bg-white">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all" 
                />
              </Card>
            ))}
          </div>
          
          {/* Partners Section */}
          <h3 className="text-xl font-bold text-center mb-8">Mitra Akademik</h3>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            {partners.map((partner, index) => (
              <Card key={index} className="flex items-center justify-center p-6 w-full sm:w-64 h-32 hover:shadow-md transition-all bg-white">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="max-h-16 max-w-full object-contain" 
                />
                <p className="mt-3 font-medium text-center">{partner.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
