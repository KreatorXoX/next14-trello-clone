import React, { Suspense } from "react";
import ActivityList from "./_components/activity-list";
import OrganizationAvatar from "../_components/organization-avatar";
import { Separator } from "@/components/ui/separator";

// export const dynamic = "force-dynamic";
const AcitivityPage = ({
  params: { organizationId },
}: {
  params: { organizationId: string };
}) => {
  return (
    <div className="w-full">
      <OrganizationAvatar orgId={organizationId} />
      <Separator className="my-3" />
      <Suspense fallback={<ActivityList.Skeleton />}>
        <ActivityList orgId={organizationId} />
      </Suspense>
    </div>
  );
};

export default AcitivityPage;
