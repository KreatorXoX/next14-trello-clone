import React from "react";
import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";

type Props = {
  children: React.ReactNode;
};

const LandingLayout = ({ children }: Props) => {
  return (
    <div className="h-full bg-[#3d348b] flex flex-col items-center justify-start">
      <Navbar />
      <main className="flex justify-center items-start h-full w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
