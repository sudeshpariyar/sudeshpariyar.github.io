import React from "react";
import CustomCard from "../CustomCard/CustomCard";
import CustomHeading from "../CustomHeading/CustomHeading";
import { IcategoriesWeProvide } from "../../pages/About/AboutDatas";
import "./IndividualCategories.css";

const IndividualCategories = ({
  category,
}: {
  category: IcategoriesWeProvide;
}) => {
  return (
    <CustomCard>
      <CustomHeading headingLevel="h4" className="heading__uppercase">
        {category.category}
      </CustomHeading>
      <div className="individualCategory__wrapper">
        {category.specification.length &&
          category.specification.map((specific, index) => (
            <div key={index}>{specific}</div>
          ))}
      </div>
    </CustomCard>
  );
};

export default IndividualCategories;
