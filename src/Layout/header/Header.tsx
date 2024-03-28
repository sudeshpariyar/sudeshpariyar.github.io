import React from "react";
import "./header.css";
import ContentWrapper from "../../components/content-wrapper/ContentWrapper";
import CustomHeading from "../../components/CustomHeading/CustomHeading";
import CustomButton from "../../components/CustomButton/CustomButton";
import { Link } from "react-router-dom";
// import logo from "../../asset/logo.jpg";

const Header = () => {
  return (
    <div className="header__wrapper">
      <ContentWrapper>
        <div className="header__items">
          <CustomHeading headingLevel="h2">
            <Link to="/">Suharaemployment</Link>
          </CustomHeading>
          <div className="header__navItems">
            <CustomButton className="header__button">
              <Link to="/">Home</Link>
            </CustomButton>
            <CustomButton className="header__button">
              <Link to="/recruitment">Recruitments</Link>
            </CustomButton>
            <CustomButton className="header__button">Clients</CustomButton>
            <CustomButton className="header__button">
              <Link to="/about">About</Link>
            </CustomButton>
            <CustomButton className="header__button">Contacts</CustomButton>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Header;
