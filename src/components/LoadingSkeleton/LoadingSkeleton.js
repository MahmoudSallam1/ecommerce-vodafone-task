import React from "react";
import { Skeleton } from "antd";

function LoadingSkeleton() {
  return (
    <>
      {" "}
      <Skeleton avatar />
      <Skeleton avatar />
    </>
  );
}

export default LoadingSkeleton;
