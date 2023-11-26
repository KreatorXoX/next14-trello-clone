import React from "react";
import OrganizationAvatar from "./_components/organization-avatar";
import { Separator } from "@/components/ui/separator";
import BoardList from "./_components/board-list";

type Props = {};

const OrganizationPage = (props: Props) => {
  return (
    <div className="w-full">
      <OrganizationAvatar />
      <Separator className="my-4" />
      <div>
        <BoardList />
      </div>
    </div>
  );
};

export default OrganizationPage;
