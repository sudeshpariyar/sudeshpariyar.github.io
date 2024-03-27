import React from "react";
import CustomHeading from "../CustomHeading/CustomHeading";
import "./GuidingPrinciples.css";
import IndividualPrinciples from "./IndividualPrinciple/IndividualPrinciples";
import { PrincipleDatas } from "./PrinciplesData";

const GuidingPrinciples = () => {
  return (
    <div className="principles__wrapper">
      <CustomHeading headingLevel="h1">Our Guiding Principles</CustomHeading>
      <div className="principles__grid">
        {PrincipleDatas &&
          PrincipleDatas.map((data) => (
            <IndividualPrinciples data={data} key={data.id} />
          ))}
      </div>
    </div>
  );
};

export default GuidingPrinciples;
