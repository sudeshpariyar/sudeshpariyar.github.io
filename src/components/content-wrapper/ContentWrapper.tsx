import React, { ReactNode } from "react";
import "./contentWrapper.css";

const ContentWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="children-wrapper">{children}</div>;
};

export default ContentWrapper;
