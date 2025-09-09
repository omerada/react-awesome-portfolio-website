import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from 'lucide-react';
import { personalInfo } from '../../data/personal-info';
import { Button } from '../ui/Button';
import { ProfileImagePlaceholder } from '../ui/ImagePlaceholder';
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from '../../utils/animations';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  const titles = [
    'Full Stack Developer',
    'React Uzmanı',
    'UI/UX Geliştirici',
    'Problem Çözücü',
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    if (displayText.length < currentTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [displayText, currentIndex, titles]);

  const getSocialIcon = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      github: <Github size={20} />,
      linkedin: <Linkedin size={20} />,
      twitter: <Twitter size={20} />,
      instagram: <Instagram size={20} />,
      mail: <Mail size={20} />,
    };
    return iconMap[iconName] || <Mail size={20} />;
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = personalInfo.cvUrl;
    link.download = 'Omer-Ada-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-dark-900 dark:via-dark-800 dark:to-blue-900/20">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-500/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={staggerItem}
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="text-primary-600 dark:text-primary-400 font-medium text-lg">
                Merhaba, ben
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.div variants={fadeInUp} className="mb-6">
              <h2 className="text-xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                <span className="text-primary-600 dark:text-primary-400">
                  {displayText}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-primary-500"
                >
                  |
                </motion.span>
              </h2>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
            >
              {personalInfo.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                onClick={handleContactClick}
                size="lg"
                leftIcon={<Mail size={20} />}
              >
                İletişime Geç
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleDownloadCV}
                leftIcon={<Download size={20} />}
              >
                CV İndir
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeInUp}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {personalInfo.socialLinks.map((social) => (
                <motion.a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white dark:bg-dark-800 shadow-lg hover:shadow-xl transition-all duration-200 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={
                    { '--social-color': social.color } as React.CSSProperties
                  }
                >
                  {getSocialIcon(social.icon)}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div className="flex-shrink-0" variants={staggerItem}>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white dark:border-dark-700 shadow-2xl">
                {imageError ? (
                  <ProfileImagePlaceholder name={personalInfo.name} />
                ) : (
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                )}
              </div>

              {/* Floating elements around image */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white shadow-lg"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 2, repeat: Infinity },
                }}
              >
                ⚛️
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 1,
                }}
              >
                💻
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
