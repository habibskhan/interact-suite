import { Route, Routes } from 'react-router-dom';
import { cxURL, dxURL, homepageURL, avURL, faqURL, termsURL, ppURL, industriesAndUseCasesURL, dmURL, partnersURL, awardsURL, eventsURL, contactUsURL, caseStudiesURL, caseStudiesExploreURL, ourStoryURL, customerAnalyticsURL } from './components/helpers/constant-words';
import Homepage from './pages/Homepage/Homepage';
import InteractDX from './pages/InteractDX/InteractDX';
import InteractCX from './pages/InteractCX/InteractCX';
import InteractAV from './pages/InteractAV/InteractAV';
import FAQ from "./pages/FAQ/FAQ";
import TermsAndConditions from "./pages/T&C/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import IndustriesAndUseCases from './pages/IndustriesAndUseCases/IndustriesAndUseCases';
import InteractDM from './pages/InteractDM/InteractDM';
import Partners from './pages/Partners/Partners';
import Awards from './pages/Awards/Awards';
import ContactUs from './pages/contactUs/ContactUs';
import Events from './pages/Events/Events';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CaseStudies from './pages/CaseStudies/CaseStudies';
import CaseStudiesExplore from './pages/CaseStudies/CaseStudiesExplore';
import OurStory from './pages/OurStory/OurStory';
import CustomerAnalytics from './pages/CustomerAnalytics/CustomerAnalytics';

const Routing = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={homepageURL} element={<Homepage />} />
        <Route path={dxURL} element={<InteractDX />} />
        <Route path={cxURL} element={<InteractCX />} />
        <Route path={dmURL} element={<InteractDM />} />
        <Route path={avURL} element={<InteractAV />} />
        <Route path={faqURL} element={<FAQ />} />
        <Route path={termsURL} element={<TermsAndConditions />} />
        <Route path={ppURL} element={<PrivacyPolicy />} />
        <Route path={industriesAndUseCasesURL} element={<IndustriesAndUseCases />} />
        <Route path={partnersURL} element={<Partners />} />
        <Route path={awardsURL} element={<Awards />} />
        <Route path={contactUsURL} element={<ContactUs />} />
        <Route path={eventsURL} element={<Events />} />
        <Route path={caseStudiesURL} element={<CaseStudies />} />
        <Route path={caseStudiesExploreURL} element={<CaseStudiesExplore />} />
        <Route path={ourStoryURL} element={<OurStory />} />
        <Route path={customerAnalyticsURL} element={<CustomerAnalytics />} />
        {/* <Route exact path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} /> */}
      </Routes>
      <Footer />
    </>
  );
};
export default Routing;
