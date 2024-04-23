import React, { useState } from "react";
import "./header.css";
import ContentWrapper from "../../components/content-wrapper/ContentWrapper";
import CustomButton from "../../components/CustomButton/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

import CustomHeading from "../../components/CustomHeading/CustomHeading";

const Header = () => {
  const [mobileNavClicked, setMobileNavClicked] = useState(false);

  const navigate = useNavigate();
  const handleNav = () => {
    setMobileNavClicked(!mobileNavClicked);
  };
  const handleLinkClicked = (link: string) => {
    navigate(`${link}`);
  };
  return (
    <div className="header__wrapper">
      <ContentWrapper>
        <div className="header__items">
          <Link to="/">
            <CustomHeading headingLevel="h1" className="heading__white">
              Suhara
            </CustomHeading>
          </Link>

          <div
            className={
              mobileNavClicked ? "header__navItems" : "header__navItems__none"
            }
          >
            <CustomButton
              className="header__button"
              onClick={() => handleLinkClicked("/")}
            >
              Home
            </CustomButton>
            <CustomButton
              className="header__button"
              onClick={() => handleLinkClicked("/recruitment")}
            >
              Recruitments
            </CustomButton>
            {/* <CustomButton className="header__button">Clients</CustomButton> */}{" "}
            <CustomButton
              className="header__button"
              onClick={() => handleLinkClicked("/about")}
            >
              About
            </CustomButton>
            <CustomButton
              className="header__button"
              onClick={() => handleLinkClicked("/contact")}
            >
              Contacts
            </CustomButton>
          </div>
          <CustomButton onClick={handleNav} className="header__mobile__nav">
            {mobileNavClicked ? <IoCloseSharp /> : <GiHamburgerMenu />}
          </CustomButton>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Header;
