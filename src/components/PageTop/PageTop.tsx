import React from "react";
import pageTop_image from "../../asset/test.jpg";
import "./PageTop.css";
import CustomHeading from "../CustomHeading/CustomHeading";

const PageTop = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <div className="pagetop__wrapper">
      <img className="pagetop__image" src={pageTop_image} alt="page" />
      <CustomHeading className="pagetop__heading" headingLevel="h1">
        {pageTitle}
      </CustomHeading>
    </div>
  );
};

export default PageTop;
