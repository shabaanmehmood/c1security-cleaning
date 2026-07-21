

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbProps {
  title: string;
}

export default function Breadcrumb({
  title,
}: BreadcrumbProps) {
  return (
    <>
      <div className="container mx-auto px-6 py-4 lg:px-10">
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-sm"
        >
          

          <ChevronRight className="h-4 w-4 text-slate-400" />

          {/* Current Page */}

          <span className="font-semibold text-blue-600">
            {title}
          </span>
        </motion.nav>
      </div>
    </>
  );
}