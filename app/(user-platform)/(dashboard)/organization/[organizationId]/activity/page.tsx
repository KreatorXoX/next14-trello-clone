import React, { Suspense } from "react";
import ActivityList from "./_components/activity-list";
import OrganizationAvatar from "../_components/organization-avatar";
import { Separator } from "@/components/ui/separator";
type Props = {};

const AcitivityPage = (props: Props) => {
  return (
    <div className="w-full">
      <OrganizationAvatar />
      <Separator className="my-3" />
      <Suspense fallback={<ActivityList.Skeleton />}>
        <ActivityList />
      </Suspense>
    </div>
  );
};

export default AcitivityPage;
