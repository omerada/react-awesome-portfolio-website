import React, { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories, skills } from "../../data/skills";
import { Card } from "../ui/Card";
import { ProgressBar } from "../ui/ProgressBar";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from "../../utils/animations";

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSkills =
    selectedCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  const categories = [
    { id: "all", name: "Tümü", icon: "🎯", color: "#6b7280" },
    ...skillCategories,
  ];

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
            Yeteneklerim
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle">
            Modern teknolojiler ve araçlar konusundaki deneyimim
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
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? "bg-primary-600 text-white shadow-lg"
                  : "bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-700"
              }`}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={selectedCategory}
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill) => (
            <motion.div key={skill.id} variants={staggerItem}>
              <Card hover className="h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                    style={{ backgroundColor: `${skill.color}20` }}
                  >
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.experience}
                    </p>
                  </div>
                </div>

                <ProgressBar
                  value={skill.level}
                  color="primary"
                  showValue
                  animated
                />

                {skill.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                    {skill.description}
                  </p>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
