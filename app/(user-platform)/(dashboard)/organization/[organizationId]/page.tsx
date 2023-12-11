import React, { Suspense } from "react";
import OrganizationAvatar from "./_components/organization-avatar";
import { Separator } from "@/components/ui/separator";
import BoardList from "./_components/board-list";

const OrganizationPage = ({
  params: { organizationId },
}: {
  params: { organizationId: string };
}) => {
  return (
    <div className="w-full">
      <OrganizationAvatar orgId={organizationId} />
      <Separator className="my-4" />
      <div>
        <Suspense fallback={<BoardList.Skeleton />}>
          <BoardList orgId={organizationId} />
        </Suspense>
      </div>
    </div>
  );
};

export default OrganizationPage;
