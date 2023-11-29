import React from "react";
import { OrganizationController } from "./_components/organization-controller";
import { auth } from "@clerk/nextjs";

type Props = { children: React.ReactNode };

export async function generateMetadata() {
  const { orgSlug } = auth();

  return {
    title: orgSlug?.toUpperCase() || "Anonymous",
  };
}

const OrganizationIdLayout = ({ children }: Props) => {
  return (
    <>
      <OrganizationController />
      {children}
    </>
  );
};

export default OrganizationIdLayout;
