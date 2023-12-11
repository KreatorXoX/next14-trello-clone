import { Activity as AcivityIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Log } from "@prisma/client";
import ActivityItem from "@/components/activity-item";

type Props = { logs: Log[] };

const ContentActivity = ({ logs }: Props) => {
  return (
    <div className="flex w-full gap-3 text-neutral-700 ">
      <AcivityIcon size={25} />
      <div className="flex flex-col justify-start gap-2 ">
        <span className="text-sm font-semibold">Activity</span>
        <ol className="flex flex-col gap-3">
          {logs.map((log) => (
            <ActivityItem key={log.id} log={log} />
          ))}
        </ol>
      </div>
    </div>
  );
};

ContentActivity.Skeleton = function ActivitySkeleton() {
  return (
    <div>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
};
export default ContentActivity;
