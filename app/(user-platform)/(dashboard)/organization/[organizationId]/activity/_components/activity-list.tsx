import { getAllLogs } from "@/actions/log/get-all-logs";
import ActivityItem from "@/components/activity-item";
import { Skeleton } from "@/components/ui/skeleton";

import React from "react";

type Props = {};

const ActivityList = async (props: Props) => {
  const acitivityLogs = await getAllLogs();

  return acitivityLogs.length > 0 ? (
    <ol className="flex flex-col gap-4 my-4">
      {acitivityLogs.map((log) => (
        <ActivityItem key={log.id} log={log} large />
      ))}
    </ol>
  ) : (
    <div className="flex w-full h-[50vh] items-center justify-center">
      <p className="text-base md:text-lg font-medium text-rose-400 text-center">
        No activity found for the given Organization
      </p>
    </div>
  );
};

ActivityList.Skeleton = function ActivityListSkeleton() {
  return (
    <ul className="flex flex-col gap-3 w-full">
      <li>
        <Skeleton className="bg-neutral-700/20 h-10 w-[70%]" />
      </li>
      <li>
        <Skeleton className="bg-neutral-700/20 h-10 w-full" />
      </li>
      <li>
        <Skeleton className="bg-neutral-700/20 h-10 w-[80%]" />
      </li>
      <li>
        <Skeleton className="bg-neutral-700/20 h-10 w-full" />
      </li>
      <li>
        <Skeleton className="bg-neutral-700/20 h-10 w-[40%]" />
      </li>
      <li>
        <Skeleton className="bg-neutral-700/20 h-10 w-full" />
      </li>
    </ul>
  );
};

export default ActivityList;
