import React from "react";
import { IOurMessageData } from "../../pages/About/AboutDatas";
import CustomHeading from "../CustomHeading/CustomHeading";
import "./OurMessage.css";

const OurMessage = ({ messageData }: { messageData: IOurMessageData }) => {
  return (
    <div className="ourMessage__wrapper">
      <CustomHeading headingLevel="h1">
        {messageData.messageTitle}
      </CustomHeading>
      <div className="ourMessage__info">
        <img
          className="ourMessage__image"
          src={messageData.imageURL}
          alt={messageData.messageTitle}
        />
        <div className="ourMessage__description">
          {messageData.message}
          <br />
          <strong>-{messageData.messageFrom}</strong>
        </div>
      </div>
    </div>
  );
};

export default OurMessage;
