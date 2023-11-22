import React from "react";

type Props = { children: React.ReactNode };

const OrganizationLayout = ({ children }: Props) => {
  return <main className="max-w-7xl px-4 pt-5 mx-auto ">{children}</main>;
};

export default OrganizationLayout;
