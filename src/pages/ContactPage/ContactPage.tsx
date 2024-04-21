import React, { useRef } from "react";
import PageTop from "../../components/PageTop/PageTop";
import ContentWrapper from "../../components/content-wrapper/ContentWrapper";
import "./ContactPage.css";
import emailjs from "@emailjs/browser";
import CustomButton from "../../components/CustomButton/CustomButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactUs from "../../asset/contactus.jpg";

const ContactPage = () => {
  const form = useRef<HTMLFormElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          `${process.env.REACT_APP_SERVICE_ID}`,
          `${process.env.REACT_APP_TEMPLATE_ID}`,
          form.current,
          {
            publicKey: `${process.env.REACT_APP_PUBLIC_KEY}`,
          }
        )
        .then(
          () => {
            toast("Message Sent!");
            form.current?.reset();
          },
          (error) => {
            toast("There was an error sending. Please try again");
          }
        );
    }
  };

  return (
    <div className="contact">
      <ToastContainer />
      <PageTop pageTitle="Contact"></PageTop>
      <ContentWrapper clasName="pages__wrapper">
        <div className="contact__page__wrapper">
          <div>
            <img src={ContactUs} alt="contact us" className="contact__image" />
            <div className="contact__details">
              <strong>Suhara Foreign Employment Agency PVT.LTD</strong>
              <span>Sinamangal -9 Kathmandu, Nepal</span>
              <span>
                <strong>Phone:</strong>+977-1-5920725
              </span>
              <span>
                <strong>Email:</strong>info@suharaemployment.com
              </span>
            </div>
          </div>
          <div className="contact__info">
            <form className="contact__form" ref={form} onSubmit={handleSubmit}>
              <label className="contact__form__label">Name</label>
              <input
                className="contact__input__field"
                type="text"
                name="name"
                required
              />
              <label className="contact__form__label">Email</label>
              <input
                className="contact__input__field"
                type="email"
                name="email"
                required
              />
              <label className="contact__form__label">Phone</label>
              <input
                className="contact__input__field"
                type="text"
                name="phone"
                required
              />

              <label className="contact__form__label">Message</label>
              <textarea
                className="contact__input__field"
                name="message"
                required
              />
              <CustomButton className="send__email__button" typeof="submit">
                Submit
              </CustomButton>
            </form>
          </div>
        </div>
        <div className="contact__form__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.7089606580885!2d85.34979428709579!3d27.69538876463867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1987f971f3cd%3A0x4116790f3c3bb64e!2sSinamangal%20Rd%209%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sau!4v1713675121017!5m2!1sen!2sau"
            width="100%"
            title="suhara employment"
            height="400px"
            loading="lazy"
            style={{ border: "none" }}
          ></iframe>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default ContactPage;
