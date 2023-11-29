import React from "react";

type Props = { children: React.ReactNode };

const CardWrapper = ({ children }: Props) => {
  return (
    <div className="shrink-0 h-full w-[250px] select-none">{children}</div>
  );
};

export default CardWrapper;
