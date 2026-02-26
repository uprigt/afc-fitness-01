import { useEffect, useRef, useState } from 'react';
import { Swords, Dumbbell, Flame, ArrowRight, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const programs = [
  {
    id: 1,
    title: 'MMA Training',
    description: 'Master the art of mixed martial arts with our comprehensive program covering striking, grappling, and ground game.',
    icon: Swords,
    features: ['Striking Techniques', 'Grappling', 'Fight IQ'],
    image: '/images/gallery4.jpg',
  },
  {
    id: 2,
    title: 'Boxing',
    description: 'Learn proper boxing form, footwork, and combinations while building cardiovascular endurance and strength.',
    icon: Target,
    features: ['Footwork', 'Combinations', 'Defense'],
    image: '/images/gallery1.jpg',
  },
  {
    id: 3,
    title: 'Strength & Conditioning',
    description: 'Build functional strength and explosive power with our science-backed training protocols.',
    icon: Dumbbell,
    features: ['Power Lifts', 'Plyometrics', 'Athletic Performance'],
    image: '/images/gallery2.jpg',
  },
  {
    id: 4,
    title: 'Weight Loss Program',
    description: 'Transform your body with our specialized fat-burning workouts combined with nutritional guidance.',
    icon: Flame,
    features: ['HIIT Workouts', 'Nutrition Plans', 'Progress Tracking'],
    image: '/images/gallery5.jpg',
  },
];

export default function Programs() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
        <div className="max-w-3xl mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-red-accent/10 border border-red-accent/20 rounded-full mb-6 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-sm font-medium text-red-accent">
              Our Programs
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white uppercase mb-4 transition-all duration-700 delay-100 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Train Across <span className="text-red-accent">Disciplines.</span>
            <br />
            One Membership.
          </h2>
          <div
            className={`w-20 h-1 bg-red-accent mb-6 transition-all duration-700 delay-200 ${
              isVisible ? 'scale-x-100' : 'scale-x-0'
            }`}
            style={{ transformOrigin: 'left' }}
          />
          <p
            className={`text-lg text-gray-400 transition-all duration-700 delay-300 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            Choose from our expertly crafted programs designed to take you from
            beginner to fighter level. Each program is tailored to maximize your
            results.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className={`group relative bg-dark-secondary rounded-2xl overflow-hidden border border-white/[0.06] hover:border-red-accent/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-card ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary via-dark-secondary/50 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-red-accent rounded-xl flex items-center justify-center shadow-lg">
                  <program.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-red-accent transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {program.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {program.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-red-accent hover:text-white hover:bg-transparent group/btn"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-red-accent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
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
            className="border-red-accent text-red-accent hover:bg-red-accent hover:text-white px-8 py-6 rounded-full text-lg"
          >
            Start Your Journey Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
