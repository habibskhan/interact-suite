import React, { useEffect } from "react";
import "./customerAnalytics.scss";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import {
  customerBenefitBG,
  customerAnalyticsBanner,
  mbCustomerBenefitBG,
  mbCustomerAnalyticsBanner,
  chartDownload,
  rightWave,
  leftWave,
  smallwave,
} from "../../images";
import { useWindowSize } from "react-use";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Analytics from "../../components/Analytics/Analytics";
import {
  bankData,
  customerAnalyticsData,
  reportData,
  successData,
} from "../../data/analytics";
import ClientJourney from "../../components/clientJourney/clientJourney";
import SmartData from "../../components/SmartData/SmartData";
import CardBox from "../../components/CardBox/CardBox";

const CustomerAnalytics = () => {
  const { width } = useWindowSize();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <section className="cust_Anly_sec1">
        <CommonBanner
          banner={
            width > 767 ? customerAnalyticsBanner : mbCustomerAnalyticsBanner
          }
          linkText1="Product & Solutions"
          linkText2="Analytics"
          title="Customer Analytics"
        />
      </section>

      <section className="cust_Anly_sec2">
        <SectionHeading heading="What is" orangeHeading="Customer Analytics?" />
        <div className="my_container">
          <div className="content_wrapper">
            <p className="section_desc">
              Interact Suite’s Interactive Customer Analytics empowers
              businesses with real-time data visualization, customizable
              dashboards, and self-service analytics tools. It enhances customer
              understanding, drives personalised experiences, and fosters a
              collaborative, data-driven culture. Interact Suite analyses data
              from various customer interactions to understand users behavior,
              preferences, and needs.
            </p>
            <p className="section_desc">
              In the competitive world of Banking, Financial Services,
              Insurance, Telecom, Retail & Utility customer experience is
              paramount. Interactivity in customer analytics transforms data
              into actionable insights. From real-time updates to dynamic
              dashboards, empower businesses to explore, visualise, and act on
              customer data. Enhance decision-making, drive customer engagement,
              and foster a data-driven culture across organisation.
            </p>
          </div>
        </div>
      </section>

      <section className="cust_Anly_sec3">
        <img
          src={width > 767 ? customerBenefitBG : mbCustomerBenefitBG}
          alt="background"
          className="bg_img"
        />
        <SectionHeading
          heading="Benefits of"
          orangeHeading="Customer Analytics"
        />
        <Analytics data={customerAnalyticsData} />
      </section>

      <section className="cust_Anly_sec4">
        <video
          muted
          autoPlay
          loop
          playsInline
          width="100%"
          className="right_wave"
        >
          <source type="video/mp4" src={smallwave} />
        </video>
        <SectionHeading
          heading="Elevate Decision-Making with Real-Time"
          orangeHeading="Reporting & Dashboards"
          description="According to Gartner's survey, 84% of customer service leaders consider customer data <br/> and analytics crucial for achieving organisational goals. This data helps improve operations, <br/> enhance customer loyalty, and create value, especially during economic challenges"
        />

        <div className="my_container">
          <div className="chart_wrapper">
            <h2 className="chart_title">My performance</h2>
            <div className="highlight_wrapper">
              <img
                src={chartDownload}
                alt="download"
                className="download_icon"
              />
              <h4 className="short_title">54.2k</h4>
              <p className="short_desc">Shortfall</p>
            </div>
            <div className="row chart_row">
              <div className="col-md-3 chart_col">
                <div className="chart_box">
                  {/* <img src={chartImg} alt="chart" className="chart_img" /> */}
                  {/* chart animation start*/}
                  {/* <div class="hemisphere-wrap">
                    <div class="hemisphere right-hemisphere"></div>
                    <div class="hemisphere left-hemisphere"></div>
                    <div class="hemisphere-clip"></div>
                  </div> */}

                  <section class="svg-container">
                    <svg
                      class="radial-progress"
                      data-countervalue="80"
                      viewBox="0 0 80 80"
                    >
                      <circle
                        class="bar-static"
                        cx="40"
                        cy="40"
                        // r="35"
                        r={`${width > 1536 ? "35" : "32"}`}
                      ></circle>
                      <circle
                        class="bar--animated"
                        cx="40"
                        cy="40"
                        //  r="35"
                         r={`${width > 1536 ? "35" : "32"}`}
                      ></circle>
                    </svg>
                  </section>
                  {/* chart animation end */}
                </div>
              </div>
              <div className="col-md-9 chart_col">
                <div className="chart_box">
                  {width > 767 ? (
                    <table className="chart_table">
                      <tr>
                        <td>
                          <p className="heading">Type</p>
                        </td>
                        <td>
                          <p className="heading">Weightage</p>
                        </td>
                        <td>
                          <p className="heading">Count</p>
                        </td>
                        <td>
                          <p className="heading">Total Payment Collected</p>
                        </td>
                        <td>
                          <p className="heading">Premium due</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="data">Shortfall</p>
                        </td>
                        <td>
                          <div className="blue_line"></div>
                        </td>
                        <td>
                          <p className="data">600</p>
                        </td>
                        <td>
                          <p className="data">$2410</p>
                        </td>
                        <td>
                          <p className="data">$410</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="data">Achievement</p>
                        </td>
                        <td>
                          <div className="orange_line"></div>
                        </td>
                        <td>
                          <p className="data">1080</p>
                        </td>
                        <td>
                          <p className="data">$2631</p>
                        </td>
                        <td>
                          <p className="data">$231</p>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={5}>
                          <div className="radio_wrapper">
                            <label htmlFor="monthly" className="radio_label">
                              <input
                                type="radio"
                                className="radio_btn"
                                name="months"
                                id="monthly"
                                value="monthly"
                                // checked={true}
                              />
                              Monthly
                            </label>

                            <label htmlFor="quaterly" className="radio_label">
                              <input
                                type="radio"
                                className="radio_btn"
                                name="months"
                                id="quaterly"
                                value="quaterly"
                              />
                              Quaterly{" "}
                            </label>

                            <label htmlFor="ytd" className="radio_label">
                              <input
                                type="radio"
                                className="radio_btn"
                                name="months"
                                id="ytd"
                                value="ytd"
                              />
                              YTD
                            </label>
                          </div>
                        </td>
                      </tr>
                    </table>
                  ) : (
                    <table className="chart_table">
                      <tr>
                        <td>
                          <p className="heading">Type</p>
                        </td>
                        <td>
                          <p className="data">Shortfall</p>
                        </td>
                        <td>
                          <p className="data">Achievement</p>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <p className="heading">Weightage</p>
                        </td>
                        <td>
                          <div className="blue_line"></div>
                        </td>
                        <td>
                          <div className="orange_line"></div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <p className="heading">Count</p>
                        </td>
                        <td>
                          <p className="data">600</p>
                        </td>
                        <td>
                          <p className="data">1080</p>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <p className="heading">Total rent Collected</p>
                        </td>
                        <td>
                          <p className="data">$2410</p>
                        </td>
                        <td>
                          <p className="data">$2631</p>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <p className="heading">Rent due</p>
                        </td>
                        <td>
                          <p className="data">$231</p>
                        </td>
                        <td>
                          <p className="data">$410</p>
                        </td>
                      </tr>

                      <tr>
                        <td colSpan={3}>
                          <div className="radio_wrapper">
                            <label htmlFor="monthly" className="radio_label">
                              <input
                                type="radio"
                                className="radio_btn"
                                name="months"
                                id="monthly"
                                value="monthly"
                                // checked={true}
                              />
                              Monthly
                            </label>

                            <label htmlFor="quaterly" className="radio_label">
                              <input
                                type="radio"
                                className="radio_btn"
                                name="months"
                                id="quaterly"
                                value="quaterly"
                              />
                              Quaterly{" "}
                            </label>

                            <label htmlFor="ytd" className="radio_label">
                              <input
                                type="radio"
                                className="radio_btn"
                                name="months"
                                id="ytd"
                                value="ytd"
                              />
                              YTD
                            </label>
                          </div>
                        </td>
                      </tr>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my_container">
          <div className="row report_row">
            <div className="col-lg-4 report_col">
              <div className="report_box">
                <p className="section_desc">
                  Interact Suite’s customer analytics empowers businesses to
                  transform customer communications from reactive to proactive.
                  By leveraging data-driven insights, businesses can create a
                  more personalised and efficient CCX, leading to happier
                  customers, increased loyalty, and ultimately, business growth.
                </p>
              </div>
            </div>
            <div className="col-lg-8 report_col">
              <div className="report_box">
                <CardBox
                  cardData={reportData}
                  columns="col-lg-6 col-md-6 col-6"
                  numb={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cust_Anly_sec5">
        <div className="vertical_line_1"></div>
        <div className="vertical_line_2"></div>
        <div className="vertical_line_3"></div>
        <ClientJourney dataList={bankData} />
      </section>

      <section className="cust_Anly_sec6">
        {width > 767 ? (
          <img src={leftWave} alt="wave" className="left_wave" />
        ) : (
          <img src={rightWave} alt="wave" className="right_wave" />
        )}
        <div className="vertical_line_1"></div>
        <div className="vertical_line_2"></div>
        <div className="vertical_line_3"></div>
        <SectionHeading
          heading="Transformative Power of Customer Analytics in"
          orangeHeading="Driving Business Success"
          description="By harnessing insights from customer behavior, preferences, and interactions, organisations <br/> can drive personalised experiences, optimize operations, and foster lasting customer loyalty"
        />
        <SmartData smartDataCol={successData} />
      </section>
    </>
  );
};

export default CustomerAnalytics;
