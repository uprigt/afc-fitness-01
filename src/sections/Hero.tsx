import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronRight, Users, Dumbbell, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-fighter.jpg"
          alt="MMA Fighter"
          className={`w-full h-full object-cover transition-all duration-1000 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
          }`}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-16 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 bg-red-accent/20 border border-red-accent/30 rounded-full mb-6 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="w-2 h-2 bg-red-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium text-red-accent">
                Theni's Premier MMA & Strength Studio
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white uppercase leading-[0.95] mb-6 transition-all duration-700 delay-100 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              Train Like a{' '}
              <span className="text-red-accent">Fighter.</span>
              <br />
              Transform Like a{' '}
              <span className="text-red-accent">Champion.</span>
            </h1>

            {/* Red Rule */}
            <div
              className={`w-24 sm:w-32 h-1 bg-red-accent mb-6 transition-all duration-700 delay-200 ${
                isVisible ? 'scale-x-100' : 'scale-x-0'
              }`}
              style={{ transformOrigin: 'left' }}
            />

            {/* Subheadline */}
            <p
              className={`text-lg sm:text-xl text-gray-300 mb-8 max-w-lg transition-all duration-700 delay-300 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              MMA • Strength • Conditioning — for all levels. Join Theni's most
              dedicated fitness community and unleash your potential.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <Button
                onClick={() => scrollToSection('#contact')}
                size="lg"
                className="bg-red-accent hover:bg-red-accent/90 text-white font-bold px-8 py-6 rounded-full text-lg transition-all hover:shadow-glow group"
              >
                Book Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection('#programs')}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg group"
              >
                View Programs
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div
            className={`hidden lg:block transition-all duration-700 delay-500 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="card-dark rounded-2xl p-8 max-w-md ml-auto">
              <h3 className="text-xl font-heading font-bold text-white mb-6">
                Why Train at AFC?
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-red-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Small-Group Coaching
                    </h4>
                    <p className="text-sm text-gray-400">
                      Personalized attention in every session
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Dumbbell className="w-6 h-6 text-red-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Open Gym Access
                    </h4>
                    <p className="text-sm text-gray-400">
                      Train on your schedule with full facility access
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-red-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Fight-Ready Conditioning
                    </h4>
                    <p className="text-sm text-gray-400">
                      Proven methods used by professional athletes
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-heading font-black text-red-accent">
                      500+
                    </p>
                    <p className="text-sm text-gray-400">Happy Members</p>
                  </div>
                  <div>
                    <p className="text-3xl font-heading font-black text-red-accent">
                      10+
                    </p>
                    <p className="text-sm text-gray-400">Expert Trainers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent z-10" />
    </section>
  );
}
