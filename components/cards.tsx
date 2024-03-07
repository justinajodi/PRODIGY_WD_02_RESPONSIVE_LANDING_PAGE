import { Box, Flex } from "@radix-ui/themes";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
function Card() {
  return (
    <div id="card" className="grid max-sm:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 ">
      <div className="mt-20">
        <PinContainer
          title="/ui.nova.com"
          href="https://twitter.com/mannupaaji"
        >
          <div className="flex basis-full flex-col p-4  tracking-tight   sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold   text-2xl ">
              Fuchsia
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-zinc-500 ">Innovate. Create. Design.</span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-[url('/p1.jpg')]" />
          </div>
        </PinContainer>
      </div>

      <div className="mt-20">
        {" "}
        <PinContainer
          title="/ui.nova.com"
          href="https://twitter.com/mannupaaji"
        >
          <div className="flex basis-full flex-col p-4  tracking-tight   sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-2xl  ">
              Pureple
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-zinc-500 ">Innovate. Create. Design.</span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-[url('/p2.jpg')]" />
          </div>
        </PinContainer>
      </div>

      <div className="mt-20">
        {" "}
        <PinContainer
          title="/ui.nova.com"
          href="https://twitter.com/mannupaaji"
        >
          <div className="flex basis-full flex-col p-4  tracking-tight   sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-2xl  ">Creme</h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-zinc-500 ">Innovate. Create. Design.</span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-[url('/p3.jpg')]" />
          </div>
        </PinContainer>
      </div>

      <div className="mt-20">
        {" "}
        <PinContainer
          title="/ui.nova.com"
          href="https://twitter.com/mannupaaji"
        >
          <div className="flex basis-full flex-col p-4  tracking-tight   sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-2xl  ">
              Rose Gold
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-zinc-500 ">Innovate. Create. Design.</span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-[url('/p4.jpg')]" />
          </div>
        </PinContainer>
      </div>
    </div>
  );
}

export default Card;
