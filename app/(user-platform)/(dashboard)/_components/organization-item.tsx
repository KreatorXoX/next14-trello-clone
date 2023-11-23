"use client";

import React from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

import { Activity, CreditCard, Settings, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Organization = {
  id: string;
  slug: string;
  imageUrl: string;
  name: string;
};
type Props = {
  isActive: boolean;
  isOpen: boolean;
  organization: Organization;
  onOpen: (id: string) => void;
};

const OrganizationItem = ({
  isActive,
  isOpen,
  onOpen,
  organization,
}: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const routes = [
    {
      label: "Boards",
      icon: <Layout className="w-4 h-4" />,
      href: `/organization/${organization.id}`,
    },
    {
      label: "Activity",
      icon: <Activity />,
      href: `/organization/${organization.id}/activity`,
    },
    {
      label: "Settings",
      icon: <Settings />,
      href: `/organization/${organization.id}/settings`,
    },
    {
      label: "Billing",
      icon: <CreditCard />,
      href: `/organization/${organization.id}/billing`,
    },
  ];

  const onClick = (href: string) => {
    router.push(href);
  };
  return (
    <AccordionItem value={organization.id} className="border-none">
      <AccordionTrigger
        onClick={onOpen.bind(null, organization.id)}
        className={cn(
          "flex items-center gap-x-2 p-1 rounded-md hover:bg-gray-300",
          isActive && !isOpen && "bg-sky-500/10 text-sky-700 "
        )}
      >
        <div className="flex items-center gap-x-2">
          <div className="w-7 h-7 relative">
            <Image src={organization.imageUrl} fill alt="avatar" />
          </div>
          <span>{organization.name}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="p-1 text-gray-700">
        {routes.map((route) => (
          <Button
            size={"sm"}
            key={route.href}
            onClick={() => onClick(route.href)}
            className={cn(
              "w-full justify-start",
              pathname === route.href && "bg-sky-500/10 text-sky-700"
            )}
            variant={"ghost"}
          >
            {route.icon}
            {route.label}
          </Button>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};

export default OrganizationItem;
