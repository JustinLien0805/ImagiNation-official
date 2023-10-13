"use client";
import { Button } from "@/components/ui/button";
import BurgerButton from "@/components/ui/BurgerButton";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, {
    once: true,
  });
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
      <main className="flex reletive min-h-screen overflow-x-hidden flex-col items-center bg-[#fafafa]">
        <div className="flex drop-shadow-xl bg-[#fafafa] z-50 justify-between w-full fixed top-0 h-16 items-center p-4 border-b">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FD513F] via-[#E0218C] to-[#1177F7]">
              ImagicNation
            </h1>
            <nav className="sm:block hidden">
              <ul className="flex gap-4 font-medium text-xl">
                <li>
                  <a href="/contact">Pricing</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
              </ul>
            </nav>
          </div>
          <Button className="sm:block hidden" asChild>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                (window.location.href = "https://imagicnation.vercel.app/")
              }
            >
              Start Imagine
            </motion.button>
          </Button>
          <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
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
            Pricing
          </div>
          <div className="border-b p-8 text-center text-xl font-medium w-full">
            About Us
          </div>
          <div className="border-b p-8 font-medium text-center text-xl w-full">
            <Button className="w-48 self-center text-xl h-16 z-10" asChild>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  (window.location.href = "https://imagicnation.vercel.app/")
                }
              >
                Start Imagine
              </motion.button>
            </Button>
          </div>
        </motion.div>
        <section
          className="max-w-5xl sm:px-8 flex flex-col gap-5 w-screen h-screen relative pt-36 items-center z-10"
          ref={heroRef}
        >
          <motion.h1
            className="sm:text-6xl text-4xl font-extrabold tracking-wide leading-tight text-center max-w-3xl px-2"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInVariants}
            transition={{ duration: 0.4 }}
          >
            Textbooks Reimagined:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD513F] to-[#F2BA34]">
              Play
            </span>
            {", "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#790FD0] to-[#E0218C]">
              Create
            </span>
            {", "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1177F7] to-[#00D2E6]">
              Learn
            </span>
          </motion.h1>
          <motion.h2
            className="sm:text-3xl text-xl font-normal tracking-wide max-w-2xl text-center px-2"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInVariants}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            Revolutionizing primary education through interactive pixel art
            narratives.
          </motion.h2>
          <Button className="w-48 self-center text-xl h-16 z-10" asChild>
            <motion.button
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInVariants}
              transition={{ delay: 0.15, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                (window.location.href = "https://imagicnation.vercel.app/")
              }
            >
              Start Imagine
            </motion.button>
          </Button>
          <motion.div
            className="absolute -bottom-16 sm:-bottom-32 md:-bottom-48 lg:-bottom-56 w-[95%] px-4 aspect-video max-w-5xl"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInVariants}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <video
              src="/hero.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-lg"
            />
          </motion.div>
        </section>
        <section className="min-h-screen flex flex-col items-center w-screen bg-[#f6e0c1] pt-40 sm:pt-96 gap-8">
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-4xl font-semibold px-2 tracking-wide underline underline-offset-4 decoration-[#FD513F]">
              Powerful Features
            </h2>
            <h3 className="text-xl font-normal tracking-wide text-[#363636] px-2">
              Features built to let Stories and Studies Merge.
            </h3>
          </div>
          <div className="grid w-full p-4 max-w-5xl sm:grid-cols-2 gap-8">
            <div>
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/feature_1.png"
                  fill
                  alt="feature"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold tracking-tight pt-4">
                Engaging Learning Experience
              </h3>
              <p className="text-lg">
                Children can mold their learning journey by creating their own
                stories, ensuring they are actively involved and invested in the
                learning process
              </p>
            </div>
            <div>
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/feature_2.png"
                  fill
                  alt="feature"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold tracking-tight pt-4">
                Instant Feedback
              </h3>
              <p className="text-lg">
                Highlighted words and phrases offer immediate explanations,
                reinforcing vocabulary and concept understanding.
              </p>
            </div>
            <div>
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/feature_3.png"
                  fill
                  alt="feature"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold tracking-tight pt-4">
                Complete Curriculum Coverage
              </h3>
              <p className="text-lg">
                By blending textbook words and phrases into user-generated
                stories, children naturally learn and retain textbook content.
              </p>
            </div>
            <div>
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/feature_4.png"
                  fill
                  alt="feature"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold tracking-tight pt-4">
                Shareable Story Videos
              </h3>
              <p className="text-lg">
                Convert children's unique stories into videos with pixel art and
                text-to-speech, providing a URL for easy sharing and preserving
                memorable experiences.
              </p>
            </div>
            <div>
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/feature_5.png"
                  fill
                  alt="feature"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold tracking-tight pt-4">
                Ethic Story Section
              </h3>
              <p className="text-lg">
                A dedicated section for ethics allows users to explore multiple
                endings to ethical scenarios, offering diversified learning
                experiences.
              </p>
            </div>
          </div>
        </section>
      </main>
      <div className="absolute w-screen h-screen top-0 left-0">
        <img
          src="/wave.svg"
          alt="wave"
          className={`absolute bottom-0 left-0 w-screen min-h-[30%] object-cover`}
        />
      </div>
    </>
  );
}
