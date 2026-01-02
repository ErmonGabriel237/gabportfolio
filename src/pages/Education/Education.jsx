import { useState } from "react";
import { Code, Calendar, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import AdComponent from "@/components/AdComponent";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showPage] = useState(true); // State to control page visibility

  const educationData = [
    {
      degree: "Secondary School Certificate (SSC)",
      school: "Bodio Bilingual Complex",
      mascot: "📘",
      year: "2016-2021",
      achievements: ["GPA: 4.89", "Subject: Science"],
      skills: [
        "Mathematics",
        "A. Math",
        "Physics",
        "Chemistry",
        "Biology",
        "English",
        "French",
        "Economics",
        "Computer Science",
        "Geography",
      ],
      description: "Diving into the science world ",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      school: "Institut Mbeukam",
      mascot: "📗",
      year: "2021-2023",
      achievements: ["GPA: 4.25", "Subject: Arts"],
      skills: ["Literature", "Social Studies", "Economics", "History"],
      description:
        "Focused on core science subjects with emphasis on practical laboratory work and scientific research methodologies.",
    },
    {
      degree: "Software Engineer Certificate (SEC)",
      school: "IAI Cameroun",
      mascot: "📘",
      year: "On process",
      achievements: ["GPA: 4.25", "Subject: Arts"],
      skills: ["Literature", "Social Studies", "Economics", "History"],
      description:
        "Developing strong analytical and critical thinking skills through comprehensive study of humanities and social sciences.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="education"
      className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
        <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
      </div>

      {showPage ? (
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
              Educational Journey
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Discover how academic excellence shapes innovative thinking and
              professional growth.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
                  hoveredIndex === index
                    ? "border-teal-500 scale-[1.02]"
                    : "border-blue-400/20"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{edu.mascot}</span>
                      <h3 className="text-2xl font-bold text-white">
                        {edu.degree}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-300 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-teal-500" />
                      {edu.school}
                    </p>
                    <p className="text-gray-400 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {edu.year}
                    </p>
                  </div>

                  <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
                    {edu.description}
                  </p>

                  {/* <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-yellow-500" />
                      Key Achievements
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm"
                        >
                          <Award className="w-4 h-4" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div> */}

                  {/* <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div> */}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto px-4 relative z-10 min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center p-8"
          >
            <Code className="w-16 h-16 mx-auto mb-4 text-teal-400" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Page Under Development
            </h2>
            <p className="text-gray-300 text-lg max-w-md mx-auto">
              This page is currently being worked on. Check back soon for some
              awesome content!
            </p>
            {/* <motion.button
              onClick={() => toggleShowPage(true)}
              className="mt-6 bg-gradient-to-r from-teal-400 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Preview Content
            </motion.button> */}
          </motion.div>
        </div>
      )}
      <AdComponent slot="5613161938" />
    </section>
  );
};

export default EducationSection;
