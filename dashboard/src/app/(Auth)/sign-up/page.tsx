"use client";

import { motion } from "framer-motion";
import SignUpForm from "./_components/signUpForm";

export default function SignUpPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
    >
      <SignUpForm />
    </motion.div>
  );
}