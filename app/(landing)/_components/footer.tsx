import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <nav className="w-full flex items-center max-w-7xl mx-auto fixed bottom-0 py-2">
      <div className="ml-10 hidden md:block">
        <Logo />
      </div>
      <div className="w-full flex md:justify-end justify-between items-center gap-5 px-10 ">
        <Button size={"sm"} variant={"ghost"} className="text-white">
          Privacy Policy
        </Button>
        <Button size={"sm"} variant={"ghost"} className="text-white">
          Terms of Service
        </Button>
      </div>
    </nav>
  );
};
