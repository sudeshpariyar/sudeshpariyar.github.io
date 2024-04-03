import React from "react";
import "./header.css";
import ContentWrapper from "../../components/content-wrapper/ContentWrapper";
import CustomButton from "../../components/CustomButton/CustomButton";
import { Link } from "react-router-dom";
import logo from "../../asset/full-logo.png";

const Header = () => {
  return (
    <div className="header__wrapper">
      <ContentWrapper>
        <div className="header__items">
          <Link to="/">
            <img className="header__logo" src={logo} alt="logo" />
          </Link>
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
