import React, { Suspense } from "react";
import OrganizationAvatar from "./_components/organization-avatar";
import { Separator } from "@/components/ui/separator";
import BoardList from "./_components/board-list";
import { checkSubscription } from "@/lib/subcription";

// export const dynamic = "force-dynamic";
const OrganizationPage = async ({
  params: { organizationId },
}: {
  params: { organizationId: string };
}) => {
  const isSubscribed = await checkSubscription();
  return (
    <div className="w-full">
      <OrganizationAvatar orgId={organizationId} isSubscribed={isSubscribed} />
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
