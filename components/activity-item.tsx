import { format } from "date-fns";
import { generateLogMessage } from "@/config/generate-log-message";
import { Log } from "@prisma/client";
import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";

type Props = {
  log: Log;
};

const ActivityItem = ({ log }: Props) => {
  return (
    <li className="flex items-center w-full gap-2">
      <Avatar className="w-6 h-6">
        <AvatarImage src={log.userImage} />
      </Avatar>
      <div className="flex flex-col text-xs w-full">
        <p className="flex items-center gap-2">
          <span className="font-bold">{log.userName}</span>
          <span>
            {generateLogMessage({
              action: log.action,
              entityTitle: log.entityTitle,
              entity: log.entity,
            })}
          </span>
        </p>
        <p className="italic font-light text-neutral-500">
          {format(new Date(log.createdAt), "MMM d, yyyy 'at' h:mm a")}
        </p>
      </div>
    </li>
  );
};

export default ActivityItem;
