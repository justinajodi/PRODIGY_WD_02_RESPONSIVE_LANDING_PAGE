// "use client";

// import TypewriterComponent from "typewriter-effect";
// import Link from "next/link";


// import { Button } from "@/components/ui/button";
// import { Boxes } from "./ui/background-boxes";

// export const LandingHero = () => {

//   return (
//     <div className="font-bold py-20 text-center space-y-5">
    
      // <div className="mt-20 text-5xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 ">
      // Build Websites.
      //   <div className="text-rose-600">
      //     <TypewriterComponent
      //       options={{
      //         strings: [
      //           "Modern.","Elegant.","Futuristic."
      //         ],
      //         autoStart: true,
      //         loop: true,
      //       }}
      //     />
      //   </div>
      // </div>
      // <div className="text-sm md:text-xl font-light ">
      //   Create content Nova 10x faster.
      // </div>
      // <div>
      //   <Link href="/dashboard">
      //     <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
      //       Start Generating For Free
      //     </Button>
      //   </Link>
      // </div>
      // <div className=" text-xs md:text-sm font-normal">
      //   No credit card required.
      // </div>
//     </div>
//   );
// };







"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parralax";


export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://i.pinimg.com/564x/02/8a/89/028a89281739f7166deca49ae20207ce.jpg",
    thumbnail:
      "https://i.pinimg.com/564x/02/8a/89/028a89281739f7166deca49ae20207ce.jpg",
  },
  {
    title: "Cursor",
    link: "https://i.pinimg.com/564x/50/11/98/50119899d1bbf6d5d1294060eb1b44d8.jpg",
    thumbnail:
      "https://i.pinimg.com/564x/50/11/98/50119899d1bbf6d5d1294060eb1b44d8.jpg",
  },
  {
    title: "Rogue",
    link: "https://i.pinimg.com/564x/e9/9b/b2/e99bb2be966b27649ba7cf28720c192c.jpg",
    thumbnail:
      "https://i.pinimg.com/564x/e9/9b/b2/e99bb2be966b27649ba7cf28720c192c.jpg",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://i.pinimg.com/564x/fd/c8/be/fdc8be3b1eeee3bff24fc28ea5b03737.jpg",
    thumbnail:
      "https://i.pinimg.com/564x/fd/c8/be/fdc8be3b1eeee3bff24fc28ea5b03737.jpg",
  },

  {
    title: "Algochurn",
    link: "https://i.pinimg.com/564x/43/79/bf/4379bf99edc66ffe8334f4e6298579d7.jpg",
    thumbnail:
      "https://i.pinimg.com/564x/43/79/bf/4379bf99edc66ffe8334f4e6298579d7.jpg",
  },
  {
    title: "Aceternity UI",
    link: "https://i.pinimg.com/564x/1e/d1/3e/1ed13e158565c53016707734c8c3c77d.jpg",
    thumbnail:
      "https://i.pinimg.com/564x/1e/d1/3e/1ed13e158565c53016707734c8c3c77d.jpg",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://i.pinimg.com/564x/43/3f/a7/433fa7ba3c566148b27122aafc452219.jpg",
    thumbnail:
      "https://i.pinimg.com/564x/43/3f/a7/433fa7ba3c566148b27122aafc452219.jpg",
  },

  {
    title: "Creme Digital",
    link: "https://i.pinimg.com/564x/35/c4/e8/35c4e8095d3bd378d8e611e6721becbb.jpg",
    thumbnail:
      "https://i.pinimg.com/564x/35/c4/e8/35c4e8095d3bd378d8e611e6721becbb.jpg",
  },
  {
    title: "Golden Bells Academy",
    link: "https://i.pinimg.com/564x/8d/a9/17/8da917d5b47d788a7ddac73200cb3915.jpg",
    thumbnail:
      "https://i.pinimg.com/564x/8d/a9/17/8da917d5b47d788a7ddac73200cb3915.jpg",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
