import React from "react";
import OrganizationAvatar from "./_components/organization-avatar";
import { Separator } from "@/components/ui/separator";

type Props = {};

const OrganizationPage = (props: Props) => {
  return (
    <div className="w-full">
      <OrganizationAvatar />
      <Separator className="my-4" />
    </div>
  );
};

export default OrganizationPage;
