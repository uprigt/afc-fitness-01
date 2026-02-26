import { useEffect, useRef, useState } from 'react';
import { Award, Users, Zap, Clock, Shield, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Certified Trainers',
    description: 'Our trainers are nationally certified with years of experience in MMA and fitness training.',
  },
  {
    icon: Users,
    title: 'Small Group Sessions',
    description: 'Maximum 8 members per batch ensures personalized attention and faster progress.',
  },
  {
    icon: Zap,
    title: 'Modern Equipment',
    description: 'State-of-the-art training equipment including MMA cages, heavy bags, and strength machines.',
  },
  {
    icon: Clock,
    title: 'Flexible Timings',
    description: 'Morning and evening batches available to fit your busy schedule.',
  },
  {
    icon: Shield,
    title: 'Safe Environment',
    description: 'Safety-first approach with proper warm-ups, cool-downs, and injury prevention protocols.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: '500+ successful transformations with measurable progress tracking.',
  },
];

const stats = [
  { value: '500+', label: 'Happy Members' },
  { value: '10+', label: 'Expert Trainers' },
  { value: '4+', label: 'Years Experience' },
  { value: '98%', label: 'Success Rate' },
];

export default function WhyChooseUs() {
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
      className="relative py-24 lg:py-32 bg-dark overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/why-train.jpg"
          alt="Training"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/95 to-dark/80" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 bg-red-accent/10 border border-red-accent/20 rounded-full mb-6 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="text-sm font-medium text-red-accent">
                Why Choose Us
              </span>
            </div>

            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white uppercase mb-4 transition-all duration-700 delay-100 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              Built For{' '}
              <span className="text-red-accent">Real Progress.</span>
            </h2>

            <div
              className={`w-20 h-1 bg-red-accent mb-6 transition-all duration-700 delay-200 ${
                isVisible ? 'scale-x-100' : 'scale-x-0'
              }`}
              style={{ transformOrigin: 'left' }}
            />

            <p
              className={`text-lg text-gray-400 mb-8 transition-all duration-700 delay-300 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              No crowds. No guesswork. Just coaching, structure, and a team that
              pushes you to be your best every single day.
            </p>

            {/* Stats */}
            <div
              className={`grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10 transition-all duration-700 delay-400 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="text-3xl sm:text-4xl font-heading font-black text-red-accent">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group p-6 bg-dark-secondary/80 backdrop-blur-sm rounded-2xl border border-white/[0.06] hover:border-red-accent/30 transition-all duration-500 hover:-translate-y-1 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-red-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-accent transition-colors">
                  <feature.icon className="w-6 h-6 text-red-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
