import React from "react";
import "./CustomHeading.css";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
}

const CustomHeading = ({
  headingLevel = "p",
  children,
  className,
}: HeadingProps) => {
  const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement(headingLevel, props, children);
  return <Heading className={`heading ${className}`}>{children}</Heading>;
};

export default CustomHeading;
