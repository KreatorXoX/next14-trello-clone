import Logo from "@/components/logo";
import Image from "next/image";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const LandingLayout = ({ children }: Props) => {
  return (
    <div className="h-full bg-[#3d348b] flex flex-col items-center justify-start">
      {/* Navbar */}
      <nav className="h-16 w-full flex items-center">
        <div className="ml-10">
          <Logo />
        </div>
      </nav>
      <main className="flex justify-center items-start h-full  w-full">
        {children}
      </main>
      {/* Footer */}
    </div>
  );
};

export default LandingLayout;
