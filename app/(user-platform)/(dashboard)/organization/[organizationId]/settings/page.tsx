import React from "react";
import { OrganizationProfile } from "@clerk/nextjs";
type Props = {};

const SettingsPage = (props: Props) => {
  return (
    <div className="w-full">
      <OrganizationProfile
        appearance={{
          elements: {
            rootBox: {
              width: "100%",
              boxShadow: "none",
              margin: "0",
              padding: "0",
            },
            card: {
              width: "100%",
              willChange: "scroll-position",
              boxShadow: "none",
            },
          },
        }}
      />
    </div>
  );
};

export default SettingsPage;
