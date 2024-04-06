import React from "react";
import PageTop from "../../components/PageTop/PageTop";
import ContentWrapper from "../../components/content-wrapper/ContentWrapper";
import CustomHeading from "../../components/CustomHeading/CustomHeading";
import { ourMessageData } from "./AboutDatas";
import "./About.css";
import { categoriesWeProvide } from "./AboutDatas";
import IndividualCategories from "../../components/IndividualCategories/IndividualCategories";
import OurMessage from "../../components/ourMessage/OurMessage";
const About = () => {
  return (
    <div className="about">
      <PageTop pageTitle="About"></PageTop>
      <ContentWrapper clasName="pages__wrapper">
        <div className="our__message__wrapper">
          {ourMessageData.length &&
            ourMessageData.map((message) => (
              <OurMessage key={message.id} messageData={message} />
            ))}
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
