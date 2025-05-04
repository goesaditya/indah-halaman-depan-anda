
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Pesan Terkirim!",
        description: "Terima kasih! Tim kami akan menghubungi Anda segera.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone size={20} />,
      title: "WhatsApp",
      content: "082312912828",
      href: "https://wa.me/6282312912828"
    },
    {
      icon: <Mail size={20} />,
      title: "Email",
      content: "support@indoblade.com",
      href: "mailto:support@indoblade.com"
    },
    {
      icon: <MapPin size={20} />,
      title: "Alamat Bandung",
      content: "Jl. Telekomunikasi No.1 Terusan Buahbatu, Bandung Techno Park Telkom University, Jawa Barat"
    }
  ];

  return (
    <section id="kontak" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Hubungi <span className="gradient-text">Kami</span></h2>
          <p className="section-subtitle">
            Konsultasikan kebutuhan teknologi Anda dengan tim ahli kami
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                  Nama
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Nama Lengkap"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                    Telepon
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Nomor Telepon"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                  Pesan
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Ceritakan kebutuhan Anda..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="btn-primary w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
              </Button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-indoblade-purple/10 p-3 rounded-lg mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    {item.href ? (
                      <a href={item.href} className="text-indoblade-purple hover:underline">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-700">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
              
              <div className="mt-8">
                <h4 className="font-bold mb-4">Alamat Cabang Pati</h4>
                <p className="text-gray-700">Jl. Raya Tlogowungu Depan Puskesmas Tlogowungu, Pati, Jawa Tengah</p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden h-[300px] mt-8">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5888064086723!2d107.62921837460053!3d-6.9367329678362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e71cb76767dd%3A0x68a57e4ecdbf3!2sBandung%20Techno%20Park!5e0!3m2!1sen!2sid!4v1714810006210!5m2!1sen!2sid"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
