import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Award, ExternalLink } from 'lucide-react';
import { experiences } from '../../data/experience';
import { CompanyLogoPlaceholder } from '../ui/ImagePlaceholder';
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from '../../utils/animations';

const Experience: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const handleImageError = (experienceId: string) => {
    setImageErrors((prev) => new Set(prev).add(experienceId));
  };

  return (
    <section className="section">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="section-heading"
        >
          <motion.h2 variants={fadeInUp} className="section-title">
            Deneyimim
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle">
            Profesyonel kariyer yolculuğum ve başarılarım
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative space-y-8"
        >
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              variants={staggerItem}
              className="relative flex items-start"
            >
              {/* Timeline dot */}
              <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary-500 bg-white dark:bg-dark-800">
                <div className="w-4 h-4 rounded-full bg-primary-500" />
              </div>

              {/* Content */}
              <div className="ml-6 flex-1">
                <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    {/* Company Logo */}
                    {experience.companyLogo && (
                      <div className="flex-shrink-0">
                        {imageErrors.has(experience.id) ? (
                          <CompanyLogoPlaceholder
                            company={experience.company}
                          />
                        ) : (
                          <img
                            src={experience.companyLogo}
                            alt={experience.company}
                            className="w-16 h-16 rounded-lg object-contain bg-gray-50 dark:bg-dark-700 p-2"
                            onError={() => handleImageError(experience.id)}
                          />
                        )}
                      </div>
                    )}

                    <div className="flex-1">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {experience.position}
                          </h3>
                          <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium">
                            <span>{experience.company}</span>
                            {experience.companyUrl && (
                              <a
                                href={experience.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Meta Information */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(experience.startDate).toLocaleDateString(
                              'tr-TR',
                              {
                                month: 'long',
                                year: 'numeric',
                              }
                            )}{' '}
                            -{' '}
                            {experience.endDate
                              ? new Date(experience.endDate).toLocaleDateString(
                                  'tr-TR',
                                  {
                                    month: 'long',
                                    year: 'numeric',
                                  }
                                )
                              : 'Devam ediyor'}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="w-4 h-4" />
                          <span>{experience.employmentType}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      {experience.achievements &&
                        experience.achievements.length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                              Başarılar:
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                              {experience.achievements.map(
                                (achievement: string, index: number) => (
                                  <li key={index}>{achievement}</li>
                                )
                              )}
                            </ul>
                          </div>
                        )}

                      {/* Technologies */}
                      {experience.technologies &&
                        experience.technologies.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                              Kullanılan Teknolojiler:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {experience.technologies.map((tech: string) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
