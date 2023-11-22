import React from "react";
import { OrganizationController } from "./_components/organization-controller";

type Props = { children: React.ReactNode };

const OrganizationIdLayout = ({ children }: Props) => {
  return (
    <>
      <OrganizationController />
      {children}
    </>
  );
};

export default OrganizationIdLayout;
