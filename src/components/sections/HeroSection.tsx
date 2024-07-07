import OrbitingCircles from "@/components/ui/orbiting-circles";
import { BiLogoAws } from "react-icons/bi";
import { FaFigma, FaGithub, FaLinkedin } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import MaxWidthWrapper from "../ui/MaxWidthWrapper";
import { FlipWords } from "../ui/flip-words";
import { Mail } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
const WORDS = [
  "Frontend Frameworks",
  "Backend Development",
  "Javascript Libraries",
];
const SOCIAL_MEDIA_HANDLES = [
  {
    name: "Github",
    url: "https://github.com/arjunbector/",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/arjun-bector",
    icon: FaLinkedin,
  },
  {
    name: "Email",
    url: "mailto:arjunbector@gmail.com",
    icon: Mail,
  },
];
const HeroSection = () => {
  return (
    <MaxWidthWrapper className="grid min-h-screen grid-cols-1 items-center sm:grid-cols-2">
      <div className="text-center sm:ml-20 sm:text-left flex flex-col items-center sm:items-start">
        <h1 className="mb-2 text-5xl font-semibold text-red-700 " style={{textShadow:"2px 2px red"}}>
          Hi, I&apos;m Ankush Ukil
          <div className="inline-block animate-rotate text-4xl">👋</div>
        </h1>
        <div className="max-w-prose px-10 text-xl sm:px-0 text-white">
          I&apos;m a passionate software engineer with an interest in
          <br />
          <FlipWords duration={2000} words={WORDS} className="text-white" />
        </div>
        
      </div>
      <div>
      <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="100" className="w-full mt-4">
          <img src="profilepic.jpg" alt="thumbnail"  />
        </CardItem>
      </CardBody>
    </CardContainer>
    </div>
    </MaxWidthWrapper>
  );
};

export default HeroSection;
