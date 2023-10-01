import React, { ReactNode } from "react";

export default function Section({ children, ...props }: Props) {
  return (
    <>
      <div className="h-2 bg-neutral-50" />
      <div className={"px-36 py-20 " + props.bgColour}>
        <div className="shadow-xl rounded-xl bg-neutral-100 px-20 py-10">
          {children}
        </div>
      </div>
    </>
  );
}

interface Props {
  children?: ReactNode;
  bgColour: string;
}
