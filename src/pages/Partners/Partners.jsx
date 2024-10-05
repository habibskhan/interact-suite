import React, { useEffect, useState } from "react";
import "./partners.scss";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import {
  mbPartnersBanner,
  mbPartnersBg,
  partnersBanner,
  partnersBg,
} from "../../images";
import { useWindowSize } from "react-use";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import LogoBox from "../../components/LogoBox/LogoBox";
import { partnershipDetails, partnershipLogo } from "../../data/partners";
import CardBox from "../../components/CardBox/CardBox";
import CommonCta from "../../components/commonCta/CommonCta";
import Joi from "joi";
import config from "../../config/config";
import helper from "../../helpers/helper";
import http from "../../helpers/http";
import { toast } from "react-toastify";

const Partners = () => {
  const { width } = useWindowSize();
  const joiOptions = config.joiOptions;
  const [formData, setFormData] = useState({
    first_name: "",
    email: "",
    phone: "",
    job_title: "",
    company: "",
    country: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const base_url = config.api_url;

  const validate = async (data) => {
    let schemaObj = {
      first_name: Joi.string().trim().required().label("First Name"),
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .label("Email"),
      phone: Joi.string().trim().required().length(10).label("Phone No"),
      country: Joi.string().trim().required().label("Country"),
      company: Joi.string().trim().required().label("Company"),
      job_title: Joi.string().trim().required().label("Job Title"),
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = await validate(formData);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      helper.scroll(helper.getFirstError(validationErrors));
      return;
    } else {
      setErrors("");
      const { data } = await http.post(`${base_url}/partner-leads`, {
        ...formData,
      });
      if (data) {
        setSubmitted(true);
        setFormData({
          first_name: "",
          email: "",
          phone: "",
          job_title: "",
          company: "",
          country: "",
          message: "",
        });
      }
    }
  };

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <section className="partners_sec1">
        <CommonBanner
          banner={width > 767 ? partnersBanner : mbPartnersBanner}
          linkText1="Partners"
          title="Partners"
        />
      </section>

      <section className="partners_sec2">
        <SectionHeading
          heading="Our Partnerships &"
          orangeHeading="Alliances Include"
        />
        <LogoBox logos={partnershipLogo} />
      </section>

      <section className="partners_sec3">
        <img
          src={width > 767 ? partnersBg : mbPartnersBg}
          alt="background"
          className="bg_img"
        />
        <CardBox cardData={partnershipDetails} columns="col-md-4 col-6" />
      </section>

      <section className="partners_sec4">
        <SectionHeading heading="Become a" orangeHeading="Partner" />
        <form className="form_wrapper" onSubmit={handleSubmit}>
          <div className="my_container">
            <div className="row form_row">
              <div className="col-md-6 form_col">
                <div className="input_wrapper">
                  <label className="label" htmlFor="name">
                    First Name*
                  </label>
                  <input
                    className="input_field"
                    type="text"
                    name="first_name"
                    id="name"
                    placeholder="Enter Your Name"
                    value={formData.first_name}
                    onChange={handleChange}
                  />
                  <div id="first_name_error">
                    {errors.first_name && (
                      <div className="error_text">{errors.first_name}</div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-6 form_col">
                <div className="input_wrapper">
                  <label className="label" htmlFor="email">
                    Your Email*
                  </label>
                  <input
                    className="input_field"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email Here"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <div id="email_error">
                    {errors.email && (
                      <div className="error_text">{errors.email}</div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-6 form_col">
                <div className="input_wrapper">
                  <label className="label" htmlFor="phone">
                    Phone*
                  </label>
                  <input
                    className="input_field"
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, "");
                      setFormData((prevFormData) => ({
                        ...prevFormData,
                        phone: value,
                      }));
                    }}
                  />
                  <div id="phone_error">
                    {errors.phone && (
                      <div className="error_text">{errors.phone}</div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-6 form_col">
                <div className="input_wrapper">
                  <label className="label" htmlFor="job">
                    Job Title*
                  </label>
                  <input
                    className="input_field"
                    type="text"
                    name="job_title"
                    id="job"
                    placeholder="Enter Job Title"
                    value={formData.job_title}
                    onChange={handleChange}
                  />
                  <div id="job_title_error">
                    {errors.job_title && (
                      <div className="error_text">{errors.job_title}</div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-6 form_col">
                <div className="input_wrapper">
                  <label className="label" htmlFor="company">
                    Company*
                  </label>
                  <input
                    className="input_field"
                    type="text"
                    name="company"
                    id="company"
                    placeholder="Enter Your Company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                  <div id="company_error">
                    {errors.company && (
                      <div className="error_text">{errors.company}</div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-6 form_col">
                <div className="input_wrapper">
                  <label className="label" htmlFor="country">
                    Country
                  </label>
                  <input
                    className="input_field"
                    type="text"
                    name="country"
                    id="country"
                    placeholder="Enter your Country"
                    value={formData.country}
                    onChange={handleChange}
                  />
                  <div id="country_error">
                    {errors.country && (
                      <div className="error_text">{errors.country}</div>
                    )}
                  </div>
                </div>
              </div>
              {/* <div className="col-md-6 form_col">
                <div className="input_wrapper">
                  <label className="label" htmlFor="country">
                    Country
                  </label>
                  <select
                    name="country"
                    id="country"
                    className="input_field select_field"
                  >
                    <option value="Enter your Country">
                      Enter your Country
                    </option>
                    <option value="India">India</option>
                    <option value="Australia">Australia</option>
                    <option value="America">America</option>
                  </select>
                </div>
              </div> */}
              <div className="col-md-12 form_col">
                <div className="input_wrapper">
                  <label className="label" htmlFor="msg">
                    Message*
                  </label>
                  <input
                    className="input_field"
                    type="text"
                    name="message"
                    id="msg"
                    placeholder="Enter Your Message Here"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <div id="message_error">
                    {errors.message && (
                      <div className="error_text">{errors.message}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {submitted && Object.keys(errors).length === 0 && (
              <p className="success_text">
                Thank You for Your Interest! Our team will review it and get in
                touch with you shortly.
              </p>
            )}
            <div className="cta_wrapper">
              <CommonCta linkText="SUBMIT" />
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Partners;
