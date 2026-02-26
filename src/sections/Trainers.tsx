import { useEffect, useRef, useState } from 'react';
import { Instagram, Award, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const trainers = [
  {
    id: 1,
    name: 'Coach Arjun',
    role: 'Head Coach - MMA & Conditioning',
    image: '/images/trainer1.jpg',
    experience: '10+ Years',
    certification: 'NSCA-CPT, MMA Certified',
    specialty: 'MMA, Strength Training',
    bio: 'Former professional fighter with a passion for teaching proper technique and building mental toughness.',
  },
  {
    id: 2,
    name: 'Coach Priya',
    role: 'Fitness Coach - Strength & Cardio',
    image: '/images/trainer2.jpg',
    experience: '7+ Years',
    certification: 'ACE-CPT, CrossFit L2',
    specialty: 'Weight Loss, HIIT',
    bio: 'Specialized in transformation programs with over 200 successful client transformations.',
  },
  {
    id: 3,
    name: 'Coach Vikram',
    role: 'Strength Coach - Powerlifting',
    image: '/images/trainer3.jpg',
    experience: '8+ Years',
    certification: 'ISSA-CPT, Powerlifting Coach',
    specialty: 'Powerlifting, Bodybuilding',
    bio: 'Competitive powerlifter focused on building raw strength and perfect form.',
  },
];

export default function Trainers() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-dark-secondary overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/trainer-spotlight.jpg"
          alt="Trainer"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-secondary via-dark-secondary/95 to-dark-secondary" />
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
              Our Team
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white uppercase mb-4 transition-all duration-700 delay-100 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Coaching That{' '}
            <span className="text-red-accent">Adapts to You.</span>
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
            Personalized feedback in every session—whether you're training for a
            fight or building fitness.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={trainer.id}
              className={`group relative bg-dark rounded-2xl overflow-hidden border border-white/[0.06] hover:border-red-accent/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-card ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${400 + index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" />

                {/* Experience Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-red-accent rounded-full">
                  <span className="text-xs font-semibold text-white">
                    {trainer.experience}
                  </span>
                </div>

                {/* Social Link */}
                <button className="absolute top-4 left-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-accent transition-colors">
                  <Instagram className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-white mb-1 group-hover:text-red-accent transition-colors">
                  {trainer.name}
                </h3>
                <p className="text-red-accent text-sm font-medium mb-3">
                  {trainer.role}
                </p>
                <p className="text-gray-400 text-sm mb-4">{trainer.bio}</p>

                {/* Certifications */}
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-4 h-4 text-red-accent" />
                  <span className="text-xs text-gray-400">
                    {trainer.certification}
                  </span>
                </div>

                {/* Specialty Tags */}
                <div className="flex flex-wrap gap-2">
                  {trainer.specialty.split(', ').map((spec) => (
                    <span
                      key={spec}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300"
                    >
                      <Star className="w-3 h-3 text-red-accent" />
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <Button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg group"
          >
            Train With Our Experts
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
