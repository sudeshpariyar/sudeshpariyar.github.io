import React from "react";
import "./HomePage.css";
import CustomHeading from "../../components/CustomHeading/CustomHeading";
import homepageImage from "../../asset/aeroplane1.jpg";
import CustomButton from "../../components/CustomButton/CustomButton";
import Ripples from "react-ripples";
import ContentWrapper from "../../components/content-wrapper/ContentWrapper";
import GuidingPrinciples from "../../components/GuidingPrinciples/GuidingPrinciples";
import Licences from "../../components/Licences/Licences";

const HomePage = () => {
  return (
    <div className="homePage__wrapper">
      <div className="homePage__image__wrapper">
        <img className="homePage__image" src={homepageImage} alt="homePage" />
        <div className="homePage__image__content">
          <CustomHeading headingLevel="h1" className="heading__white">
            Change Your Future with us.
          </CustomHeading>

          <div className="homePage__image__rightContent">
            <span>
              Suhara Foreign Employment Agency is a premier executive search,
              recruitment consultants, HR outsourcing consultancy, manpower
              consultants, HR consultants, international recruitment agencies,
              foreign recruitment agencies, gulf recruitment agencies, human
              resource agency and placement consultants that partner with global
              clients to provide them with best talents from Nepal....
            </span>
            <Ripples placeholder={undefined}>
              <CustomButton className="homePage__readMore__button">
                Read More
              </CustomButton>
            </Ripples>
          </div>
        </div>
      </div>
      <ContentWrapper>
        <GuidingPrinciples />
        <Licences />
      </ContentWrapper>
    </div>
  );
};

export default HomePage;
