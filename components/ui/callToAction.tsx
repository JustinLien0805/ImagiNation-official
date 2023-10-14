import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
const CallToAction = ({
  isInView,
  fadeInVariants,
}: {
  isInView: boolean;
  fadeInVariants: {};
}) => {
  return (
    <motion.div
      className="relative w-48 border-0 bg-transparent rounded-lg h-16"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInVariants}
      transition={{ delay: 0.15, duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        className="self-center w-full h-full text-xl z-10 relative border-transparent rounded-lg"
        asChild
      >
        <a
          href="https://imagicnation.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start Imagine
        </a>
      </Button>
      <div className="absolute z-[9] w-[calc(100%+4px)] h-[calc(100%+4px)] box-content -top-1 -left-1 rounded-xl border-2 border-transparent bg-gradient-to-r from-[#FD513F] via-[#E0218C] to-[#1177F7] bg-clip-padding"></div>
    </motion.div>
  );
};

export default CallToAction;
