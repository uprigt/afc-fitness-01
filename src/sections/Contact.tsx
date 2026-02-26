import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    content: 'Near New Bus Stand, Theni, Tamil Nadu',
    link: 'https://maps.google.com/?q=Theni,Tamil+Nadu',
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+91 98765 43210',
    link: 'tel:+919876543210',
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: 'info@afcfitness.com',
    link: 'mailto:info@afcfitness.com',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    content: 'Mon - Sat: 5:00 AM - 10:00 PM',
    link: null,
  },
];

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-dark overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-red-accent/10 border border-red-accent/20 rounded-full mb-6 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-sm font-medium text-red-accent">
              Contact Us
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white uppercase mb-4 transition-all duration-700 delay-100 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Let's <span className="text-red-accent">Talk.</span>
          </h2>
          <div
            className={`w-20 h-1 bg-red-accent mx-auto mb-6 transition-all duration-700 delay-200 ${
              isVisible ? 'scale-x-100' : 'scale-x-0'
            }`}
            style={{ transformOrigin: 'center' }}
          />
          <p
            className={`text-lg text-gray-400 transition-all duration-700 delay-300 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            Ready to start your fitness journey? Get in touch with us today and
            claim your free trial session.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="bg-dark-secondary rounded-2xl p-8 border border-white/[0.06]">
              <h3 className="text-2xl font-heading font-bold text-white mb-6">
                Send us a Message
              </h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-white mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-gray-400">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300">
                        Your Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-dark border-white/10 text-white placeholder:text-gray-500 focus:border-red-accent focus:ring-red-accent/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-300">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="bg-dark border-white/10 text-white placeholder:text-gray-500 focus:border-red-accent focus:ring-red-accent/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-dark border-white/10 text-white placeholder:text-gray-500 focus:border-red-accent focus:ring-red-accent/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your fitness goals..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="bg-dark border-white/10 text-white placeholder:text-gray-500 focus:border-red-accent focus:ring-red-accent/20 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-red-accent hover:bg-red-accent/90 text-white font-semibold py-6 rounded-xl transition-all hover:shadow-glow"
                  >
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div
            className={`transition-all duration-700 delay-500 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={info.title}
                  href={info.link || '#'}
                  target={info.link?.startsWith('http') ? '_blank' : undefined}
                  rel={info.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  onClick={(e) => !info.link && e.preventDefault()}
                  className={`group bg-dark-secondary rounded-2xl p-6 border border-white/[0.06] hover:border-red-accent/30 transition-all duration-500 hover:-translate-y-1 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-red-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-accent transition-colors">
                    <info.icon className="w-6 h-6 text-red-accent group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-lg font-heading font-bold text-white mb-2">
                    {info.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{info.content}</p>
                </a>
              ))}
            </div>

            {/* Map Placeholder */}
            <div
              className={`mt-6 bg-dark-secondary rounded-2xl overflow-hidden border border-white/[0.06] transition-all duration-700 delay-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="relative h-64 bg-gradient-to-br from-dark-secondary to-dark flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-red-accent mx-auto mb-4" />
                  <p className="text-white font-heading font-bold mb-2">
                    AFC Fitness Studio
                  </p>
                  <p className="text-gray-400 text-sm">
                    Near New Bus Stand, Theni
                  </p>
                  <a
                    href="https://maps.google.com/?q=Theni,Tamil+Nadu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-red-accent hover:text-white transition-colors"
                  >
                    Open in Google Maps
                    <span className="text-lg">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
