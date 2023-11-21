import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

type Props = { children: React.ReactNode };

const UserPlatformLayout = ({ children }: Props) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default UserPlatformLayout;
