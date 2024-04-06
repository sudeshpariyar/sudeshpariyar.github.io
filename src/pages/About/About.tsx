import React from "react";
import PageTop from "../../components/PageTop/PageTop";
import ContentWrapper from "../../components/content-wrapper/ContentWrapper";
import CustomHeading from "../../components/CustomHeading/CustomHeading";
import {
  chairmanMessage,
  companyProfile,
  executiveDirectorMessage,
  managingDirectorMessage,
} from "./AboutDatas";
import "./About.css";
import companyProfileImage from "../../asset/companyProfile.png";
import chairmanImage from "../../asset/chairman.png";
import { categoriesWeProvide } from "./AboutDatas";
import IndividualCategories from "../../components/IndividualCategories/IndividualCategories";
import mdImage from "../../asset/managing-director.png";
import edImage from "../../asset/executive-director.png";
const About = () => {
  return (
    <div className="about">
      <PageTop pageTitle="About"></PageTop>
      <ContentWrapper clasName="pages__wrapper">
        <div className="about__profile__wrapper">
          <CustomHeading headingLevel="h1">Company Profile</CustomHeading>
          <div className="about__profile__info">
            <img
              className="about__profile__image"
              src={companyProfileImage}
              alt="company profile"
            />
            <span className="about__profile__description">
              {companyProfile}
            </span>
          </div>
        </div>
        <div className="about__chairman__wrapper">
          <CustomHeading headingLevel="h1">Chairman Message</CustomHeading>
          <div className="about__chairman__info">
            <span className="about__chairman__message">{chairmanMessage}</span>
            <img
              className="about__chairman__image"
              src={chairmanImage}
              alt="chairman"
            />
          </div>
        </div>
        <div className="about__md__wrapper">
          <CustomHeading headingLevel="h1">
            Managing Director Message
          </CustomHeading>
          <div className="about__md__info">
            <img
              className="about__md__image"
              src={mdImage}
              alt="Managing Director"
            />
            <span className="about__md__message">
              {managingDirectorMessage}
            </span>
          </div>
        </div>
        <div className="about__ed__wrapper">
          <CustomHeading headingLevel="h1">
            Managing Director Message
          </CustomHeading>
          <div className="about__ed__info">
            <span className="about__ed__message">
              {executiveDirectorMessage}
            </span>
            <img
              className="about__ed__image"
              src={edImage}
              alt="Executive Director"
            />
          </div>
        </div>
        <div className="about__categories__wrapper">
          <CustomHeading headingLevel="h2">
            Categories we can provide
          </CustomHeading>
          <div className="about__categories__info">
            {categoriesWeProvide.length &&
              categoriesWeProvide.map((category) => (
                <IndividualCategories key={category.id} category={category} />
              ))}
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default About;
