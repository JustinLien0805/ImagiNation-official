"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import BurgerButton from "@/components/ui/BurgerButton";
import CallToAction from "@/components/ui/callToAction";
import PricingCard from "@/components/ui/pricing";

const Pricing = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const variants = {
    open: { opacity: 1, y: 0, zIndex: 50 },
    closed: { opacity: 0, y: 0, zIndex: -1 },
  };
  return (
    <>
      <div className="flex drop-shadow-xl w-full bg-[#fafafa] z-50 fixed top-0 h-16 justify-center items-center p-4 border-b">
        <div className="flex justify-between items-center w-full max-w-7xl">
          <div className="flex items-center gap-4">
            <h1
              className="text-3xl cursor-pointer font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FD513F] via-[#E0218C] to-[#1177F7]"
              onClick={() => {
                router.push("/");
              }}
            >
              ImagicNation
            </h1>
            <nav className="sm:block hidden">
              <ul className="flex gap-4 font-medium text-xl">
                <li>
                  <a
                    href="/pricing"
                    className="hover:text-transparent bg-clip-text bg-gradient-to-r from-[#FD513F] to-[#F2BA34]"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="hover:text-transparent bg-clip-text bg-gradient-to-r from-[#790FD0] to-[#E0218C]"
                  >
                    About
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <motion.div
            className="relative sm:flex hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="z-10 relative border-transparent rounded-lg"
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
            <div className="absolute -z-20 border-transparent w-[calc(100%+4px)] h-[calc(100%+4px)] box-content -top-1 -left-1 rounded-xl border-2 bg-gradient-to-r from-[#FD513F] via-[#E0218C] to-[#1177F7] bg-clip-padding"></div>
          </motion.div>
          <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
      <motion.div
        className={`${
          isOpen ? "flex" : "hidden"
        } bg-[#fafafa] drop-shadow-xl flex-col w-full fixed top-16`}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.2 }}
      >
        <div className="border-b p-8 text-center text-xl font-medium w-full">
          <a
            href="/pricing"
            className="hover:text-transparent bg-clip-text bg-gradient-to-r from-[#FD513F] to-[#F2BA34]"
          >
            Pricing
          </a>
        </div>
        <div className="border-b p-8 text-center text-xl font-medium w-full">
          <a
            href="/about"
            className="hover:text-transparent bg-clip-text bg-gradient-to-r from-[#790FD0] to-[#E0218C]"
          >
            About
          </a>
        </div>
        <div className="border-b p-8 font-medium flex justify-center text-xl w-full">
          <CallToAction fadeInVariants={fadeInVariants} isInView={true} />
        </div>
      </motion.div>
      <PricingCard />
    </>
  );
};

export default Pricing;
