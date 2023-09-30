import React, { ReactNode } from "react";

export default function Section({ children, ...props }: Props) {
  return (
    <div className={"px-36 py-20 " + props.bgColour}>
      <div className="bg-neutral-100 p-10">{children}</div>
    </div>
  );
}

interface Props {
  children?: ReactNode;
  bgColour: string;
}
