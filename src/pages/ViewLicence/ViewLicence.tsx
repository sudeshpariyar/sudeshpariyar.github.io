import React from "react";
import PageTop from "../../components/PageTop/PageTop";
import "./ViewLicence.css";
import ContentWrapper from "../../components/content-wrapper/ContentWrapper";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { ViewLicenceData } from "./ViewLicenceData";
const ViewLicence = () => {
  return (
    <div className="viewLicence">
      <PageTop pageTitle="View Licences"></PageTop>
      <ContentWrapper clasName="pages__wrapper">
        <div className="viewLicence__slider__wrapper">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={140}
            totalSlides={7}
          >
            <Slider>
              {ViewLicenceData.length &&
                ViewLicenceData.map((data) => (
                  <Slide index={data.id} key={data.id}>
                    <img
                      className="viewLicence__image"
                      src={data.imageURL}
                      alt="licence1"
                    />
                  </Slide>
                ))}
            </Slider>

            <ButtonBack className="viewLIcence__slider back__button">
              Back
            </ButtonBack>
            <ButtonNext className="viewLIcence__slider next__button">
              Next
            </ButtonNext>
          </CarouselProvider>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default ViewLicence;
