"use client";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BurgerButton from "@/components/ui/BurgerButton";
import CallToAction from "@/components/ui/callToAction";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { galleryData } from "@/lib/gallery";
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
            <CallToAction fadeInVariants={fadeInVariants} isInView={isInView} />
          </div>
        </motion.div>
        <section
          className="max-w-5xl sm:px-8 flex flex-col gap-5 w-screen h-screen relative pt-36 items-center z-10"
          ref={heroRef}
        >
          <motion.h1
            className="sm:text-6xl xs:text-5xl text-4xl font-extrabold tracking-wide leading-tight text-center max-w-3xl px-2"
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
            className="sm:text-3xl xs:text-2xl text-xl font-normal tracking-wide max-w-2xl text-center px-2"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInVariants}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            Revolutionizing primary education through interactive pixel art
            narratives.
          </motion.h2>
          <CallToAction fadeInVariants={fadeInVariants} isInView={isInView} />
          <motion.div
            className="absolute -bottom-16 sm:-bottom-32 md:-bottom-48 lg:-bottom-60  w-[95%] px-4 aspect-video max-w-5xl"
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
                  src="/feature_1.webp"
                  fill
                  sizes="100%"
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
                  src="/feature_2.webp"
                  fill
                  sizes="100%"
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
                  src="/feature_3.webp"
                  fill
                  sizes="100%"
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
                  src="/feature_4.webp"
                  fill
                  sizes="100%"
                  alt="feature"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold tracking-tight pt-4">
                Shareable Story Videos
              </h3>
              <p className="text-lg">
                Convert children&apos;s unique stories into videos with pixel
                art and text-to-speech, providing a URL for easy sharing and
                preserving memorable experiences.
              </p>
            </div>
            <div>
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/feature_5.webp"
                  fill
                  sizes="100%"
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
        <section className="min-h-screen flex flex-col items-center w-screen bg-[#f6e0c1] py-40 gap-8">
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-4xl font-semibold px-2 tracking-wide underline underline-offset-4 decoration-[#1177F7]">
              Gallery
            </h2>
            <h3 className="text-xl font-normal tracking-wide text-[#363636] text-center px-2">
              Turn the page to pixel: where school content becomes a digital
              adventure.
            </h3>
          </div>
          <div className="grid w-full p-4 max-w-5xl md:grid-cols-5 grid-cols-3 gap-8">
            {galleryData.map((item, index) => (
              <div
                className={`relative w-full group aspect-square bg-[#f6e0c1] overflow-hidden  rounded-lg ${
                  index === 0 || index === 15 ? "col-span-2 row-span-2" : ""
                }`}
                key={index}
              >
                <div className="hidden group-hover:flex text-white bg-black/50 w-full h-full flex-col absolute bottom-0 left-0 p-2 z-10 justify-end">
                  <h3 className="text-lg font-semibold tracking-tight pt-4">
                    {item.title}
                  </h3>
                  <p className="text-lg">{item.type}</p>
                </div>
                <Image
                  src={item.url}
                  fill
                  sizes="100%"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8oNjzHwAGBAKOvdbtWwAAAABJRU5ErkJggg=="
                  alt="feature"
                  className="rounded-lg group-hover:scale-110 transition ease-in duration-300 object-cover"
                />
              </div>
            ))}
          </div>
        </section>
        <section className="flex flex-col items-center w-screen bg-[#fafafa] py-40 gap-8 p-4 max-w-5xl">
          <h2 className="text-4xl font-semibold px-2 tracking-wide underline text-center underline-offset-4 decoration-[#790FD0]">
            FAQs
          </h2>
          <Accordion type="single" collapsible className="sm:w-2/3 w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl text-left">
                Is it available for mobile?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                No, it is only available for desktop for now.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-xl">
                How does the video generation feature work?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                Once a child completes their unique story, our platform
                seamlessly combines pixel art visuals and text-to-speech
                narration to create a video. After processing, a URL is
                provided, making it easy for the child to share their
                masterpiece with friends and family.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-xl">
                Are there any options for children who may not want to create a
                story from scratch?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                Yes! For those seeking guidance, we provide prewritten ethical
                stories with multiple endings. Children simply choose from four
                options, maintaining engagement and control over the narrative.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-xl">
                How does the platform ensure that the generated stories align
                with textbook content?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                Imagicnation's AI integrates content from three major publishers
                into stories, ensuring they align with curriculum standards.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-xl">
                What if my child encounters a word or phrase they don't
                understand in their story?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                Words from the textbook are highlighted in stories; children can
                click them for instant explanations, enhancing interactivity and
                comprehension.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
