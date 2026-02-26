import { useEffect, useRef, useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Karthik R.',
    role: 'Member since 2023',
    image: '/images/gallery3.jpg',
    rating: 5,
    text: "I walked in nervous, three months later, I'm stronger, calmer, and actually look forward to training. The coaches here genuinely care about your progress.",
  },
  {
    id: 2,
    name: 'Divya M.',
    role: 'Member since 2022',
    image: '/images/testimonials-action.jpg',
    rating: 5,
    text: "Lost 15kg in 6 months with their weight loss program. The combination of MMA training and nutritional guidance worked wonders for me. Best decision ever!",
  },
  {
    id: 3,
    name: 'Rahul S.',
    role: 'Member since 2024',
    image: '/images/gallery5.jpg',
    rating: 5,
    text: "The strength and conditioning program transformed my athletic performance. I'm faster, stronger, and more confident than ever. Highly recommend AFC!",
  },
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-dark overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/testimonials-action.jpg"
          alt="Training"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/95 to-dark/80" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                Testimonials
              </span>
            </div>

            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white uppercase mb-4 transition-all duration-700 delay-100 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              They Came to Train.
              <br />
              <span className="text-red-accent">They Stayed for the Team.</span>
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
              Hear from our members who have transformed their lives through
              dedication and expert guidance at AFC Fitness Studio.
            </p>

            {/* Navigation */}
            <div
              className={`flex items-center gap-4 transition-all duration-700 delay-400 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-dark-secondary border border-white/10 rounded-full flex items-center justify-center hover:bg-red-accent hover:border-red-accent transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-dark-secondary border border-white/10 rounded-full flex items-center justify-center hover:bg-red-accent hover:border-red-accent transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
              <span className="text-gray-400 ml-4">
                {activeIndex + 1} / {testimonials.length}
              </span>
            </div>
          </div>

          {/* Right Content - Testimonial Card */}
          <div
            className={`transition-all duration-700 delay-500 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative bg-dark-secondary rounded-2xl p-8 border border-white/[0.06]">
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-red-accent rounded-xl flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6 pt-4">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-red-accent fill-red-accent"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                "{testimonials[activeIndex].text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-heading font-bold text-white">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeIndex
                        ? 'w-8 bg-red-accent'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
