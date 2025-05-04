
import { 
  Globe, 
  Phone, 
  Network, 
  Settings, 
  Users, 
  ShieldCheck, 
  Server 
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-10 w-10 text-indoblade-purple" />,
      title: "Solusi Digital & Web",
      description: "Web Development (Company Profile, eCommerce, Sistem Informasi), Hosting, Domain, dan SEO Optimization",
      items: [
        "Web Development",
        "Hosting & Domain",
        "SEO Optimization",
        "Maintenance & Keamanan"
      ]
    },
    {
      icon: <Phone className="h-10 w-10 text-indoblade-purple" />,
      title: "Sistem Komunikasi VoIP IPPBX & Call Center",
      description: "Call Center & Omni Channel, Integrasi WhatsApp, Email, Live Chat, dan AI Chatbot",
      items: [
        "Call Center & Omni Channel",
        "Integrasi WhatsApp & Email",
        "AI Chatbot",
        "IPPBX"
      ]
    },
    {
      icon: <Network className="h-10 w-10 text-indoblade-purple" />,
      title: "Infrastruktur Jaringan & IoT",
      description: "Perencanaan jaringan kantor/industri, Server setup, router, firewall, dan monitoring tools",
      items: [
        "Perencanaan Jaringan",
        "Server & Firewall",
        "Sistem IoT & CCTV",
        "Smart Home & Industry"
      ]
    },
    {
      icon: <Settings className="h-10 w-10 text-indoblade-purple" />,
      title: "Layanan IT Support",
      description: "Langganan teknisi onsite & remote, Instalasi, troubleshooting PC, printer, jaringan",
      items: [
        "Teknisi Onsite & Remote",
        "Troubleshooting Perangkat",
        "Audit Sistem IT",
        "Dokumentasi Sistem"
      ]
    },
    {
      icon: <Users className="h-10 w-10 text-indoblade-purple" />,
      title: "Pelatihan Teknologi & Digital",
      description: "Kelas praktis: Web Development, Jaringan, Server, Linux, Cloud Computing, AI Tools",
      items: [
        "Pelatihan Web Development",
        "Kelas Server & Jaringan",
        "Program Sertifikasi",
        "Mentoring Intensif"
      ]
    },
    {
      icon: <Server className="h-10 w-10 text-indoblade-purple" />,
      title: "Konsultasi IT Infrastruktur",
      description: "Perencanaan jaringan, server, data center, Optimasi infrastruktur untuk skalabilitas",
      items: [
        "Perencanaan Infrastruktur",
        "Optimasi Sistem",
        "Roadmap IT",
        "Evaluasi Sistem"
      ]
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-indoblade-purple" />,
      title: "Cybersecurity Assessment",
      description: "Pengujian keamanan aplikasi, jaringan, dan infrastruktur, Simulasi serangan",
      items: [
        "Penetration Testing",
        "Security Assessment",
        "Simulasi Serangan",
        "Rekomendasi Mitigasi"
      ]
    }
  ];

  return (
    <section id="layanan" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Layanan <span className="gradient-text">Kami</span></h2>
          <p className="section-subtitle">
            Solusi teknologi komprehensif untuk mendukung transformasi digital bisnis Anda
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 border border-gray-200 rounded-xl hover:border-indoblade-purple/50 transition-all hover:shadow-lg card-hover">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-5 text-sm">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-indoblade-purple mr-2"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="btn-primary">Dapatkan Penawaran</Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
