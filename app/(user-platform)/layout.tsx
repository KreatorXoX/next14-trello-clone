import React from "react";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";

type Props = { children: React.ReactNode };

const UserPlatformLayout = ({ children }: Props) => {
  return (
    <ClerkProvider>
      <Toaster />
      {children}
    </ClerkProvider>
  );
};

export default UserPlatformLayout;
