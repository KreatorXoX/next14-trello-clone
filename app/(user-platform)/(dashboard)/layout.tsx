import React from "react";
import Navbar from "./_components/navbar";
type Props = { children: React.ReactNode };

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="h-[calc(100vh-4rem)]">
      <Navbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
