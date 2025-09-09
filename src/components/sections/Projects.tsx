import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, Calendar, Users } from 'lucide-react';
import { projects } from '../../data/projects';
import type { Project } from '../../types';
import { Card } from '../ui/Card';
import { Modal } from '../ui/Modal';
import { ProjectImagePlaceholder } from '../ui/ImagePlaceholder';
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  scaleIn,
} from '../../utils/animations';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const handleImageError = (projectId: string) => {
    setImageErrors((prev) => new Set(prev).add(projectId));
  };

  const categories = [
    { id: 'all', name: 'Tümü' },
    { id: 'web', name: 'Web' },
    { id: 'mobile', name: 'Mobil' },
    { id: 'desktop', name: 'Desktop' },
    { id: 'game', name: 'Oyun' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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
            Projelerim
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle">
            Çalıştığım bazı projeler ve açık kaynak katkılarım
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={selectedCategory}
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={staggerItem}>
              <Card
                hover
                className="h-full overflow-hidden cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  {imageErrors.has(project.id) ? (
                    <ProjectImagePlaceholder title={project.title} />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={() => handleImageError(project.id)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-500 dark:text-gray-400 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-dark-700">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(project.startDate).getFullYear()}
                    </span>
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <Github className="w-4 h-4 text-gray-400" />
                      )}
                      {project.liveUrl && (
                        <ExternalLink className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Modal isOpen={true} onClose={() => setSelectedProject(null)}>
            <motion.div
              variants={scaleIn}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-white dark:bg-dark-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {imageErrors.has(selectedProject.id) ? (
                  <div className="w-full h-64 flex items-center justify-center">
                    <ProjectImagePlaceholder title={selectedProject.title} />
                  </div>
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                    onError={() => handleImageError(selectedProject.id)}
                  />
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h2>
                  <span className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium">
                    {selectedProject.category}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                  {selectedProject.longDescription ||
                    selectedProject.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Proje Detayları
                    </h3>
                    <div className="space-y-2 text-gray-600 dark:text-gray-300">
                      <p>
                        <strong>Başlangıç:</strong>{' '}
                        {new Date(
                          selectedProject.startDate
                        ).toLocaleDateString()}
                      </p>
                      {selectedProject.endDate && (
                        <p>
                          <strong>Bitiş:</strong>{' '}
                          {new Date(
                            selectedProject.endDate
                          ).toLocaleDateString()}
                        </p>
                      )}
                      <p>
                        <strong>Durum:</strong> {selectedProject.status}
                      </p>
                      {selectedProject.teamSize && (
                        <p className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <strong>Takım:</strong> {selectedProject.teamSize}{' '}
                          kişi
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Kullanılan Teknolojiler
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {selectedProject.highlights && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Öne Çıkan Özellikler
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                      {selectedProject.highlights.map(
                        (highlight: string, index: number) => (
                          <li key={index}>{highlight}</li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                {selectedProject.challenges && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Karşılaşılan Zorluklar
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                      {selectedProject.challenges.map(
                        (challenge: string, index: number) => (
                          <li key={index}>{challenge}</li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-4">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Canlı Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      Kaynak Kod
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
