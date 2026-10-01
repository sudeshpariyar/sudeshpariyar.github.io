import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from "pure-react-carousel";
import ContentWrapper from "../../components/content-wrapper/ContentWrapper";
import PageTop from "../../components/PageTop/PageTop";
import { ViewNoticeData } from "./ViewNoticeData";

const Notices = ()=>{
return (
    <div className="notices">
      <PageTop pageTitle="Notices"></PageTop>
      <ContentWrapper clasName="pages__wrapper">
        <div className="viewNotive__slider__wrapper">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={140}
            totalSlides={ViewNoticeData.length}
          >
            <Slider>
              {ViewNoticeData.length &&
                ViewNoticeData.map((data) => (
                  <Slide index={data.id} key={data.id}>
                    <img
                      className="viewNotice__image"
                      src={data.imageURL}
                      alt="notice1"
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
)
}
export default Notices;