import React from "react";
import { motion } from "framer-motion";
import { Download, Award, Users, Coffee, Clock } from "lucide-react";
import { personalInfo } from "../../data/personal-info";
import { experienceYears } from "../../data/experience";
import { projects } from "../../data/projects";
import { featuredSkills } from "../../data/skills";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { ProgressBar } from "../ui/ProgressBar";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from "../../utils/animations";

const About: React.FC = () => {
  const stats = [
    {
      icon: <Clock className="w-6 h-6" />,
      label: "Yıl Deneyim",
      value: `${experienceYears}+`,
      color: "text-blue-600",
    },
    {
      icon: <Award className="w-6 h-6" />,
      label: "Tamamlanan Proje",
      value: `${projects.filter((p) => p.status === "completed").length}+`,
      color: "text-green-600",
    },
    {
      icon: <Users className="w-6 h-6" />,
      label: "Mutlu Müşteri",
      value: "25+",
      color: "text-purple-600",
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      label: "Kahve Tüketimi",
      value: "∞",
      color: "text-amber-600",
    },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = personalInfo.cvUrl;
    link.download = "Omer-Ada-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="section bg-gray-50 dark:bg-dark-800/50">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="section-heading"
        >
          <motion.h2 variants={fadeInUp} className="section-title">
            Hakkımda
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle">
            Kendimi ve deneyimlerimi daha yakından tanıyın
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Merhaba! Ben{" "}
                <span className="text-primary-600 dark:text-primary-400">
                  Ömer
                </span>
              </h3>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {personalInfo.bio}
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="text-center p-4 bg-white dark:bg-dark-800 rounded-lg shadow-sm"
                >
                  <div className={`${stat.color} mb-2 flex justify-center`}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeInUp}>
              <Button
                onClick={handleDownloadCV}
                leftIcon={<Download size={20} />}
                size="lg"
              >
                CV'mi İndir
              </Button>
            </motion.div>
          </motion.div>

          {/* Skills Preview */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <motion.h3
                variants={fadeInUp}
                className="text-xl font-semibold text-gray-900 dark:text-white mb-6"
              >
                Temel Yeteneklerim
              </motion.h3>

              <motion.div variants={fadeInUp} className="space-y-4">
                {featuredSkills.slice(0, 6).map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                        <span>{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <ProgressBar
                      value={skill.level}
                      color="primary"
                      size="sm"
                    />
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-6 text-center">
                <Button
                  variant="outline"
                  onClick={() => {
                    const skillsSection = document.getElementById("skills");
                    if (skillsSection) {
                      skillsSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Tüm Yetenekleri Gör
                </Button>
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
