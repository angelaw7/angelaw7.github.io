import React from "react";

export default function Section({ children }) {
  return (
    <div className="px-36 py-20 bg-orange-200">
      <div className="bg-neutral-100 p-10">{children}</div>
    </div>
  );
}
