import React from "react";
import { IrecruitmentInfoData } from "../RecruitmentInfo.Data";
import CustomCard from "../../../components/CustomCard/CustomCard";
import CustomHeading from "../../../components/CustomHeading/CustomHeading";

const IndividualRecruitment = ({ data }: { data: IrecruitmentInfoData }) => {
  return (
    <CustomCard>
      <CustomHeading headingLevel="h3">
        {data.id}.{data.title}
      </CustomHeading>
      <span style={{ lineHeight: "1.5rem" }}>{data.description}</span>
    </CustomCard>
  );
};

export default IndividualRecruitment;
