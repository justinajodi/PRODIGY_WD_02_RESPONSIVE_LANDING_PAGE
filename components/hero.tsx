"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";


import { Button } from "@/components/ui/button";
import { Boxes } from "./ui/background-boxes";

export const LandingHero = () => {

  return (
    <div className="font-bold py-20 mt-10 text-center space-y-5  dark:bg-[url('/bgv25.gif')] bg-cover">
    
      <div className="mt-10  text-5xl max-[400px]:mt-4 max-[400px]:text-3xl sm:text-4xl md:text-6xl lg:text-7xl space-y-5 ">
      Build Websites.
        <div className="text-rose-600">
          <TypewriterComponent
            options={{
              strings: [
                "Modern.","Elegant.","Futuristic."
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl max-[400px]:text-sm font-base ">
        Create Website using Nova 10x faster.
      </div>
      <div>
        <Link href="#about">
          <Button  >
            Explore
          </Button>
        </Link>
      </div>
      <div className=" text-xs md:text-sm font-normal">
        No credit card required.
      </div>
    </div>
  );
};






