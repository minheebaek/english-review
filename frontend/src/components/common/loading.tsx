import clsx from "clsx";
import React from "react";

interface LoadingProps {
  type: "spinner" | "dots" | "ring";
  size: "xs" | "sm" | "md" | "lg";
}

const Loading: React.FC<LoadingProps> = ({ size, type }) => {
  return (
    <div
      className={clsx(
        `loading text-primary`,
        `loading-${type}`,
        ` loading-${size}`
      )}
    ></div>
  );
};

export default Loading;
