import { useEffect, useState } from "react";
import "./styles.scss";
import CommonCta from "../../components/commonCta/CommonCta";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import email from "../../assets/email.png";
import phone from "../../assets/phone-call.png";
import placeholder from "../../assets/placeholder.png";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import { useWindowSize } from "react-use";
import contactUsbanner from "../../assets/contactus-banner.png";
import contactUsMobobanner from "../../assets/contactus-banner-mobo.png";
import config from "../../config/config";
import Joi from "joi";
import helper from "../../helpers/helper";
import http from "../../helpers/http";

const ContactUs = () => {
  const { width } = useWindowSize();
  const joiOptions = config.joiOptions;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query_type: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const base_url = config.api_url;

  const validate = async (data) => {
    let schemaObj = {
      name: Joi.string().trim().required().label("Name"),
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .label("Email"),
      phone: Joi.string().trim().required().length(10).label("Phone No"),
      query_type: Joi.string().trim().required().label("Query"),
      message: Joi.string().trim().required().label("Message"),
    };

    const schema = Joi.object(schemaObj).options({ allowUnknown: true });

    const { error } = schema.validate(data, joiOptions);

    const errors = {};

    if (error) {
      error.details.map((field) => {
        errors[field.path[0]] = field.message;
        return true;
      });
    }

    return errors ? errors : null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = await validate(formData);

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      helper.scroll(helper.getFirstError(validationErrors));
      return;
    } else {
      setErrors("");
      const { data } = await http.post(`${base_url}/contact-leads`, {
        ...formData,
      });

      if (data) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          query_type: "",
          message: "",
        });
        // window.scrollTo(0, 0);
      }
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className={"contact-us"}>
      <main>
        <section className="ac_sec1">
          <CommonBanner
            banner={width > 767 ? contactUsbanner : contactUsMobobanner}
            linkText1="Contact Us"
            title="Contact Us"
          />
        </section>

        <section className="contact-section">
          <div className="get-in-touch">
            <div className="map-section">
              <iframe
                title="location"
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30171.00939475582!2d72.85244145!3d19.10743265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c85099bd2947%3A0x1ecc1a60c474a8ae!2sAndheri%2C%20Mumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1629789892553!5m2!1sen!2sus"
                // width="100%"
                // height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
              <div className="contact-info">
                <div className="info-box">
                  <img src={email} alt="email" />
                  <p>
                    Prefer to send us an email directly?
                    <br />
                    Feel free to reach out to our support team at
                    <br />
                    <a href="mailto:wecare@interactsuite.com">
                      wecare@interactsuite.com
                    </a>
                  </p>
                </div>
                <div className="info-box">
                  <img src={placeholder} alt="placeholder" />
                  <p>
                    <strong>Address:</strong>
                    <br />
                    Grnd1 Lorem ipsum, CTS-95 to 99,
                    <br />
                    Multiplex Complex, Next to Divine
                    <br />
                    School,127, ABC Road,
                    <br />
                    Andheri(East) Mumbai, Maharashtra 400059
                  </p>
                </div>
                <div className="info-box">
                  <img src={phone} alt="phone" />
                  <p>
                    <strong>Contact number:</strong>
                    <br />
                    9137894236
                  </p>
                </div>
              </div>
            </div>
            <div className="form-section">
              <SectionHeading heading={"Get in"} orangeHeading={"Touch"} />

              <p>
                Cookies are small files of data that help us with the
                functionality of our website. On your first connection with our
                website, the cookie technology identifies your browser
                anonymously. We only use the cookies to understand the traffic
                movement on our website. No personal information is disseminated
                to us through cookies at any point.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                    // required
                  />
                  <div id="name_error">
                    {errors.name && (
                      <div className="error_text">{errors.name}</div>
                    )}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email Here"
                    // required
                  />
                  <div id="email_error">
                    {errors.email && (
                      <div className="error_text">{errors.email}</div>
                    )}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone*</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, "");
                      setFormData((prevFormData) => ({
                        ...prevFormData,
                        phone: value,
                      }));
                    }}
                    placeholder="Phone Number"
                    // required
                  />
                  <div id="phone_error">
                    {errors.phone && (
                      <div className="error_text">{errors.phone}</div>
                    )}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="query">Type Of Query*</label>
                  <input
                    type="text"
                    id="query"
                    name="query_type"
                    value={formData.query_type}
                    onChange={handleChange}
                    placeholder="Enter your Query"
                    // required
                  />
                  <div id="query_type_error">
                    {errors.query_type && (
                      <div className="error_text">{errors.query_type}</div>
                    )}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message*</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter Your Message Here"
                    rows={1}
                    // required
                  ></textarea>
                  <div id="message_error">
                    {errors.message && (
                      <div className="error_text">{errors.message}</div>
                    )}
                  </div>
                </div>
                {submitted && Object.keys(errors).length === 0 && (
                  <p className="success_text">
                    Thanks for reaching out to us. We’ll review your query and
                    reply as soon as possible.
                  </p>
                )}
                <button type="submit" className="submit-btn">
                  <CommonCta
                    linkText="SUBMIT"
                    link={() => false}
                    linkCta={false}
                  />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactUs;
