"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

type Props = {};

export const OrganizationController = (props: Props) => {
  // when manually typing or copy pasting organization page link
  // it  doesnt reflect the changes in the ui
  // thats why we need this check to use it in the layout
  const params = useParams();
  const { setActive } = useOrganizationList();
  useEffect(() => {
    if (!setActive) return;

    setActive({ organization: params.organizationId as string });
  }, [setActive, params.organizationId]);
  return null;
};
