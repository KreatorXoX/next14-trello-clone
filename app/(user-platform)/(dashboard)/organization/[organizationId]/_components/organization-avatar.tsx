"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { useOrganization } from "@clerk/nextjs";
import { Receipt } from "lucide-react";
import Image from "next/image";

type Props = {};

const OrganizationAvatar = (props: Props) => {
  const { isLoaded, organization } = useOrganization();

  if (!isLoaded) {
    return (
      <div className="flex gap-2 items-center">
        <Skeleton className="w-10 h-10 bg-purple-900/30" />
        <div className=" flex flex-col items-start gap-1">
          <Skeleton className="w-[150px] h-5" />
          <Skeleton className="w-[120px] h-4" />
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-row items-center gap-2">
      <div className="w-10 h-10 relative">
        <Image
          src={organization?.imageUrl!}
          alt="Organization Avatar"
          fill
          className=" object-cover rounded-md"
        />
      </div>
      <div>
        <div className="flex items-center gap-1 font-medium">
          <p>{organization?.name.toUpperCase()}</p>

          <span className="text-xs text-neutral-500 italic">
            {organization?.membersCount +
              `${
                organization?.membersCount && organization.membersCount > 1
                  ? " - Members"
                  : " - Member"
              }`}
          </span>
        </div>
        <p className="text-xs flex flex-row gap-1 text-neutral-500 items-center italic">
          <Receipt className="w-4 h-4" />
          <span>Free</span>
        </p>
      </div>
    </div>
  );
};

export default OrganizationAvatar;