import React from "react";
import "./CustomCard.css";

const CustomCard = ({ children }: { children: React.ReactNode }) => {
  return <div className="card__wrapper">{children}</div>;
};

export default CustomCard;
