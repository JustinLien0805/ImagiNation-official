"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import BurgerButton from "@/components/ui/BurgerButton";
import CallToAction from "@/components/ui/callToAction";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
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
        transition={{ duration: 0.3 }}
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
      <section className="mb-auto pt-36 pb-12 max-w-3xl flex flex-col gap-8">
        <div className="flex flex-col gap-4 items-center justify-center">
          <h2 className="text-4xl font-semibold px-4 tracking-wide underline underline-offset-4 decoration-[#1177F7]">
            About Us
          </h2>
          <h3 className="text-xl font-normal tracking-wide text-[#363636] text-center px-4">
            We are a team of 5 people from NCCU MIS who are passionate about the
            future of technology and how it can be used to improve the lives of
            people around the world.
          </h3>
        </div>
        <div className="px-4">
          <div className="relative w-full place-self-center group aspect-[4/3] bg-[#f6e0c1] overflow-hidden rounded-lg">
            <Image
              priority
              src="/about.webp"
              fill
              sizes="100%"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8oNjzHwAGBAKOvdbtWwAAAABJRU5ErkJggg=="
              alt="feature"
              className="rounded-lg sm:group-hover:scale-110 transition ease-in duration-300 object-cover"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 px-4">
          <div className="rounded-lg w-full border drop-shadow-lg bg-white py-4 px-8 flex items-center gap-6">
            <Avatar>
              <AvatarImage src="/quokka.webp" />
              <AvatarFallback>練</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-2xl font-semibold tracking-wide">練家辰</h3>
              <h3 className="text-xl font-normal tracking-wide text-[#363636] text-left">
                Frontend Developer
              </h3>
            </div>
          </div>
          <div className="rounded-lg w-full border drop-shadow-lg bg-white py-4 px-8 flex items-center gap-6">
            <Avatar>
              <AvatarImage src="/quokka.webp" />
              <AvatarFallback>劉</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-2xl font-semibold tracking-wide">劉承翰</h3>
              <h3 className="text-xl font-normal tracking-wide text-[#363636] text-left">
                Backend Developer
              </h3>
            </div>
          </div>
          <div className="rounded-lg w-full border drop-shadow-lg bg-white py-4 px-8 flex items-center gap-6">
            <Avatar>
              <AvatarImage src="/quokka.webp" />
              <AvatarFallback>莊芷芸</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-2xl font-semibold tracking-wide">莊芷芸</h3>
              <h3 className="text-xl font-normal tracking-wide text-[#363636] text-left">
                Strategy and Design Specialist
              </h3>
            </div>
          </div>
          <div className="rounded-lg w-full border drop-shadow-lg bg-white py-4 px-8 flex items-center gap-6">
            <Avatar>
              <AvatarImage src="/quokka.webp" />
              <AvatarFallback>謝</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-2xl font-semibold tracking-wide">謝怡庭</h3>
              <h3 className="text-xl font-normal tracking-wide text-[#363636] text-left">
                Content and Strategy Specialist
              </h3>
            </div>
          </div>
          <div className="rounded-lg w-full border drop-shadow-lg bg-white py-4 px-8 flex items-center gap-6">
            <Avatar>
              <AvatarImage src="/quokka.webp" />
              <AvatarFallback>蔡</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-2xl font-semibold tracking-wide">蔡旻桓</h3>
              <h3 className="text-xl font-normal tracking-wide text-[#363636] text-left">
                Backend Developer
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
