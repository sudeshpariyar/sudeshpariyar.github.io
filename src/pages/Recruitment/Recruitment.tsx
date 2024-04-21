import React from "react";
import PageTop from "../../components/PageTop/PageTop";
import CustomHeading from "../../components/CustomHeading/CustomHeading";
import ContentWrapper from "../../components/content-wrapper/ContentWrapper";
import "./Recruitment.css";
import { recruitmentInfoData } from "./RecruitmentInfo.Data";
import IndividualRecruitment from "./IndividualRecrument/IndividualRecruitment";

const Recruitment = () => {
  return (
    <div className="recruitment">
      <PageTop pageTitle="Recruitment"></PageTop>
      <ContentWrapper clasName="pages__wrapper">
        <CustomHeading headingLevel="h1">Recruitment Process</CustomHeading>
        <CustomHeading headingLevel="h4">
          We take following steps to ensure you get right person for the job.
        </CustomHeading>
        <div className="recruitment__process">
          {recruitmentInfoData.length &&
            recruitmentInfoData.map((rData) => (
              <IndividualRecruitment data={rData} key={rData.id} />
            ))}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Recruitment;
