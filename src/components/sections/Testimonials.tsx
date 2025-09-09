import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { Card } from '../ui/Card';
import { TestimonialImagePlaceholder } from '../ui/ImagePlaceholder';
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from '../../utils/animations';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const handleImageError = (testimonialName: string) => {
    setImageErrors((prev) => new Set(prev).add(testimonialName));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev: number) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev: number) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="section bg-gray-50 dark:bg-dark-900">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="section-heading"
        >
          <motion.h2 variants={fadeInUp} className="section-title">
            Referanslar
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle">
            Çalıştığım kişi ve kurumlardan gelen geri bildirimler
          </motion.p>
        </motion.div>

        {/* Featured Testimonial Carousel */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto mb-16"
        >
          <Card className="p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-6 left-6 text-primary-200 dark:text-primary-800">
              <Quote className="w-16 h-16" />
            </div>

            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < testimonials[currentIndex].rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                  />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                {imageErrors.has(testimonials[currentIndex].name) ? (
                  <TestimonialImagePlaceholder
                    name={testimonials[currentIndex].name}
                  />
                ) : (
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                    onError={() =>
                      handleImageError(testimonials[currentIndex].name)
                    }
                  />
                )}
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {testimonials[currentIndex].position}
                  </p>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white dark:bg-dark-700 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white dark:bg-dark-700 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
          </Card>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-primary-600'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* All Testimonials Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.id} variants={staggerItem}>
              <Card
                hover
                className={`h-full p-6 cursor-pointer transition-all duration-300 ${
                  index === currentIndex
                    ? 'ring-2 ring-primary-500 bg-primary-50 dark:bg-primary-900/20'
                    : ''
                }`}
                onClick={() => goToTestimonial(index)}
              >
                <div className="flex items-center gap-3 mb-4">
                  {imageErrors.has(testimonial.name) ? (
                    <TestimonialImagePlaceholder name={testimonial.name} />
                  ) : (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                      onError={() => handleImageError(testimonial.name)}
                    />
                  )}
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.position}
                    </p>
                    <p className="text-sm text-primary-600 dark:text-primary-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>

                <blockquote className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed line-clamp-4">
                  "{testimonial.content}"
                </blockquote>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
