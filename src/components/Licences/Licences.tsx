import React from "react";
import CustomHeading from "../CustomHeading/CustomHeading";
import "./Licences.css";
import govLogo from "../../asset/gov_logo_nepal.png";

const Licences = () => {
  return (
    <div className="licence__wrapper">
      <CustomHeading headingLevel="h1">Licences</CustomHeading>
      <div className="licence__content">
        <CustomHeading headingLevel="h4">
          We are authorized by the Government of Nepal to provide Nepali
          manpower to companies all around the world. Our licenses and
          certification are as follows.
        </CustomHeading>
        <div className="licence__list">
          <div className="licence__individual">
            <img
              className="licence__logo"
              src={govLogo}
              alt="Nepal Government Logo"
            />
            <div>
              <CustomHeading headingLevel="h3">
                Ministry of Labour
              </CustomHeading>
              <CustomHeading headingLevel="h6">View Licence</CustomHeading>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Licences;
