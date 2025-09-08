import React from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";

interface TimelineItem {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  description?: string;
  content?: React.ReactNode;
  icon?: React.ReactNode;
  color?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  orientation?: "vertical" | "horizontal";
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({
  items,
  orientation = "vertical",
  className,
}) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  if (orientation === "horizontal") {
    return (
      <motion.div
        className={clsx("flex space-x-8 overflow-x-auto pb-4", className)}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex-shrink-0 w-64"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Line */}
              {index < items.length - 1 && (
                <div className="absolute top-6 left-6 w-full h-0.5 bg-gray-200 dark:bg-gray-700 transform translate-x-6" />
              )}

              {/* Icon */}
              <div
                className={clsx(
                  "relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 bg-white dark:bg-dark-800",
                  item.color ? `border-${item.color}-500` : "border-primary-500"
                )}
              >
                {item.icon || (
                  <div
                    className={clsx(
                      "w-4 h-4 rounded-full",
                      item.color ? `bg-${item.color}-500` : "bg-primary-500"
                    )}
                  />
                )}
              </div>

              {/* Content */}
              <div className="mt-4 p-4 bg-white dark:bg-dark-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {item.date}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    {item.subtitle}
                  </p>
                )}
                {item.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                )}
                {item.content && item.content}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={clsx("relative", className)}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

      <div className="space-y-8">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="relative flex items-start"
            variants={itemVariants}
          >
            {/* Icon */}
            <div
              className={clsx(
                "relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 bg-white dark:bg-dark-800",
                item.color ? `border-${item.color}-500` : "border-primary-500"
              )}
            >
              {item.icon || (
                <div
                  className={clsx(
                    "w-4 h-4 rounded-full",
                    item.color ? `bg-${item.color}-500` : "bg-primary-500"
                  )}
                />
              )}
            </div>

            {/* Content */}
            <div className="ml-6 flex-1">
              <div className="p-6 bg-white dark:bg-dark-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    {item.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {item.date}
                  </span>
                </div>

                {item.subtitle && (
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {item.subtitle}
                  </p>
                )}

                {item.description && (
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {item.description}
                  </p>
                )}

                {item.content && item.content}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
