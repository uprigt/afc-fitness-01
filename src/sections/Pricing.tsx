import { useEffect, useRef, useState } from 'react';
import { Check, ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    id: 1,
    name: 'Starter',
    price: '1,499',
    period: 'week',
    description: 'Perfect for beginners starting their fitness journey',
    features: [
      '2 Training Sessions/Week',
      'Gym Access',
      'Basic Equipment Usage',
      'Locker Facility',
      'Group Classes',
    ],
    notIncluded: [
      'Personal Training',
      'Nutrition Plan',
      'Progress Tracking',
    ],
    popular: false,
  },
  {
    id: 2,
    name: 'Fighter',
    price: '4,999',
    period: 'month',
    description: 'Our most popular plan for serious fitness enthusiasts',
    features: [
      'Unlimited Training Sessions',
      'Full Gym Access',
      'All Equipment Usage',
      'Locker Facility',
      'All Group Classes',
      '1 PT Session/Month',
      'Basic Nutrition Guide',
    ],
    notIncluded: ['Custom Meal Plan'],
    popular: true,
  },
  {
    id: 3,
    name: 'Elite',
    price: '8,999',
    period: 'month',
    description: 'The ultimate package for maximum results',
    features: [
      'Unlimited Everything',
      'Priority Gym Access',
      'Premium Equipment',
      'Private Locker',
      'All Classes + Workshops',
      '4 PT Sessions/Month',
      'Custom Nutrition Plan',
      'Monthly Progress Review',
      'Recovery Sessions',
    ],
    notIncluded: [],
    popular: false,
  },
];

export default function Pricing() {
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
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/pricing-bg.jpg"
          alt="Gym Equipment"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark" />
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
              Membership
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white uppercase mb-4 transition-all duration-700 delay-100 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Simple <span className="text-red-accent">Pricing.</span>
            <br />
            No Hidden Fees.
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
            Choose the plan that fits your goals. All plans include access to
            our state-of-the-art facility.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative group bg-dark-secondary rounded-2xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 ${
                plan.popular
                  ? 'border-red-accent shadow-glow'
                  : 'border-white/[0.06] hover:border-red-accent/30'
              } ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-red-accent py-2 text-center">
                  <span className="text-sm font-semibold text-white flex items-center justify-center gap-2">
                    <Zap className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`p-8 ${plan.popular ? 'pt-16' : ''}`}>
                {/* Plan Name */}
                <h3 className="text-2xl font-heading font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-gray-400 text-sm">₹</span>
                  <span className="text-5xl font-heading font-black text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-400">/{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-red-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-red-accent" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 opacity-40"
                    >
                      <div className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-gray-500 text-xs">—</span>
                      </div>
                      <span className="text-gray-500 text-sm line-through">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full py-6 rounded-full font-semibold transition-all group/btn ${
                    plan.popular
                      ? 'bg-red-accent hover:bg-red-accent/90 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-gray-400 text-sm">
            All plans include a{' '}
            <span className="text-red-accent font-semibold">
              3-day free trial
            </span>
            . No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
