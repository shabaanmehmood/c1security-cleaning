"use client";

import { motion } from "framer-motion";
import { FaUsersCog, FaClipboardCheck, FaShieldAlt } from "react-icons/fa";
import { MdAccessTime, MdSecurity } from "react-icons/md";
import { BsBarChartLine } from "react-icons/bs";
import { CometCard } from "../ui/comet-card";

const problemsAndSolutions = [
  {
    id: 1,
    icon: <FaUsersCog className="text-blue-600 w-10 h-10 mb-4" />,
    problem: "Manual Staff Coordination",
    solution:
      "Automate scheduling and shift management with smart rostering tools that save hours every week.",
  },
  {
    id: 2,
    icon: <MdAccessTime className="text-blue-600 w-10 h-10 mb-4" />,
    problem: "Time Wastage on Reporting",
    solution:
      "Real-time digital reporting eliminates paperwork and ensures instant communication with clients.",
  },
  {
    id: 3,
    icon: <FaShieldAlt className="text-blue-600 w-10 h-10 mb-4" />,
    problem: "Inconsistent Guard Performance",
    solution:
      "Track attendance, feedback, and site activity for a transparent and reliable workforce.",
  },
  {
    id: 4,
    icon: <BsBarChartLine className="text-blue-600 w-10 h-10 mb-4" />,
    problem: "Limited Business Insights",
    solution:
      "Gain powerful analytics on workforce performance, compliance, and client satisfaction in one dashboard.",
  },
  {
    id: 5,
    icon: <MdSecurity className="text-blue-600 w-10 h-10 mb-4" />,
    problem: "Data Security Concerns",
    solution:
      "End-to-end encrypted platform ensures your staff and client data remain fully protected.",
  },
  {
    id: 6,
    icon: <FaClipboardCheck className="text-blue-600 w-10 h-10 mb-4" />,
    problem: "Complex Compliance Management",
    solution:
      "Automated documentation and verification workflows simplify compliance and audits effortlessly.",
  },
];

const RealSolutionsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 text-center">
      <div className="max-w-6xl rounded-2xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold text-blue-950 mt-10 mb-8 o-outfit"
        >
          Real Problems. Real Solutions.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-12"
        >
          Every challenge in security and labour management deserves a
          practical, data-driven solution — that is what Control-1 Security
          delivers.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {problemsAndSolutions.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              {/* ✅ Wrap each card in CometCard */}
              <CometCard
                rotateDepth={15}
                translateDepth={15}
                className="border border-gray-200 rounded-2xl"
              >
                <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center ">
                  {item.icon}
                  <h3 className="text-lg o-outfit font-semibold text-gray-900 mb-2">
                    {item.problem}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.solution}</p>
                </div>
              </CometCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealSolutionsSection;
