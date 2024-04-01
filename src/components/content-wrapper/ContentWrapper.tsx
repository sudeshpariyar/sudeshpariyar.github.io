import React, { ReactNode } from "react";
import "./contentWrapper.css";

const ContentWrapper = ({
  children,
  clasName,
}: {
  children: ReactNode;
  clasName?: string;
}) => {
  return <div className={`children__wrapper ${clasName}`}>{children}</div>;
};

export default ContentWrapper;
