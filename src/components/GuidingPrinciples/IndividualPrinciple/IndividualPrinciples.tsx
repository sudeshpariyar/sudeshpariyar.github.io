import React from "react";
import CustomHeading from "../../CustomHeading/CustomHeading";
import { IPrincipleData } from "../PrinciplesData";
import "./IndividualPrinciples.css";
import CustomCard from "../../CustomCard/CustomCard";

const IndividualPrinciples = ({ data }: { data: IPrincipleData }) => {
  return (
    <CustomCard>
      <div
        style={{
          borderBottom: `3px solid ${data.backgroundColor}`,
          marginBottom: "0.5rem",
          padding: "0.5rem",
          color: "red",
        }}
      >
        <CustomHeading className="heading__uppercase" headingLevel="h3">
          {data.title}
        </CustomHeading>
      </div>
      <span className="individual__description">{data.description}</span>
    </CustomCard>
  );
};

export default IndividualPrinciples;
