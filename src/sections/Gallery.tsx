import { useEffect, useRef, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: '/images/gallery1.jpg',
    alt: 'Boxing Training',
    category: 'Boxing',
  },
  {
    id: 2,
    src: '/images/gallery2.jpg',
    alt: 'Strength Training',
    category: 'Strength',
  },
  {
    id: 3,
    src: '/images/gallery3.jpg',
    alt: 'Group Training',
    category: 'Group',
  },
  {
    id: 4,
    src: '/images/gallery4.jpg',
    alt: 'MMA Sparring',
    category: 'MMA',
  },
  {
    id: 5,
    src: '/images/gallery5.jpg',
    alt: 'Kettlebell Workout',
    category: 'Conditioning',
  },
  {
    id: 6,
    src: '/images/gallery6.jpg',
    alt: 'Gym Interior',
    category: 'Facility',
  },
  {
    id: 7,
    src: '/images/hero-fighter.jpg',
    alt: 'MMA Fighter',
    category: 'MMA',
  },
  {
    id: 8,
    src: '/images/trainer-spotlight.jpg',
    alt: 'Personal Training',
    category: 'Training',
  },
];

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
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

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-dark-secondary overflow-hidden"
    >
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
            <span className="text-sm font-medium text-red-accent">Gallery</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white uppercase mb-4 transition-all duration-700 delay-100 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            See The <span className="text-red-accent">Action.</span>
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
            Take a look inside our facility and see how our members train to
            become champions.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative aspect-square overflow-hidden rounded-xl cursor-pointer transition-all duration-500 hover:scale-[1.02] ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              } ${index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''}`}
              style={{ transitionDelay: `${400 + index * 50}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-red-accent font-medium mb-1">
                  {image.category}
                </span>
                <h4 className="text-white font-semibold">{image.alt}</h4>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-red-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <ZoomIn className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <div
            className="relative max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl">
              <span className="text-sm text-red-accent font-medium">
                {selectedImage.category}
              </span>
              <h3 className="text-xl font-heading font-bold text-white">
                {selectedImage.alt}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
