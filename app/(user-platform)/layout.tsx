import React from "react";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";

type Props = { children: React.ReactNode };

const UserPlatformLayout = ({ children }: Props) => {
  return (
    <>
      <ClerkProvider>
        <Toaster
          toastOptions={{
            className: "text-sm font-semibold text-gray-500",
          }}
        />
        {children}
      </ClerkProvider>
    </>
  );
};

export default UserPlatformLayout;
