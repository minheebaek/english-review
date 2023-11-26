import React from "react";

interface LoadingProps {
  type: "spinner" | "dots" | "ring";
  size: "xs" | "sm" | "md" | "lg";
}

const Loading: React.FC<LoadingProps> = ({ size, type }) => {
  return (
    <div
      className={`loading text-primary loading-${type} loading-${size}`}
    ></div>
  );
};

export default Loading;
