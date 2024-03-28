import React from "react";
import "./footer.css";
import logo from "../../asset/logo.jpg";
import ContentWrapper from "../../components/content-wrapper/ContentWrapper";
import CustomHeading from "../../components/CustomHeading/CustomHeading";

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <ContentWrapper>
        <div className="footer__content">
          <div className="footer__content__left">
            <div className="footer__left">
              <img className="footer__logo" src={logo} alt="logo" />
              <div className="footer__logo__description">
                <CustomHeading className="heading__white" headingLevel="h3">
                  Suhara
                </CustomHeading>
                <span>Foreign Employment Agency Pvt. Ltd.</span>
              </div>
            </div>
            <div className="footer__left__description">
              Excellent suppliers of skilled and semi-skilled human resources
              from Nepal to the Middle East, Malasiya, Europe and other parts of
              the world.
            </div>
          </div>
          <div className="footer__right">
            <CustomHeading className="heading__white" headingLevel="h3">
              Contact us
            </CustomHeading>
            <div className="footer__contact__info">
              <div> Sinamangal - 9 , Kathmandu</div>
              <div>+977-1-5920725</div>
              <div>info@suharaemployment.com</div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Footer;
