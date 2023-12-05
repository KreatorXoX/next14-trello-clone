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
            className: "text-sm font-semibold",
            success: {
              style: {
                background: "rgba(61,52,139,1)",
                color: "white",
              },
            },
            error: {
              style: {
                background: "rgba(154,14,36,1)",
                color: "white",
              },
            },
          }}
        />
        {children}
      </ClerkProvider>
    </>
  );
};

export default UserPlatformLayout;
