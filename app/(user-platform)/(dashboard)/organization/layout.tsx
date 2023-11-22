import React from "react";

type Props = { children: React.ReactNode };

const OrganizationLayout = ({ children }: Props) => {
  return (
    <main className="max-w-7xl px-4 pt-5 mx-auto">
      <div className="flex gap-7">
        <div className="w-64 bg-red-500 md:block hidden shrink-0">Side Bar</div>
        {children}
      </div>
    </main>
  );
};

export default OrganizationLayout;
