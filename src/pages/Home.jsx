import Hero from "../components/layout-contact/Hero";
import Appointment from "../components/layout-contact/Appointment";
import Office from "../components/layout-contact/office";
import SocialGallery from "../components/layout-contact/social";
import Footer from "../components/layout-contact/footer";
import Herohome from "../components/layout-home/Herohome";
import GetInTouch from "../components/layout-home/getInTouch";
import Spec from "../components/layout-home/spec";
import Workwme from "../components/layout-home/workwme";
import Chat from "../components/layout-home/chat";  
import FAQSection from "../components/layout-home/faq";
import Start from "../components/layout-home/start";
export default function Home() {
  return (
    <>
      <Herohome />
      <GetInTouch />
      <Spec />
      <Workwme />
      <Chat />  
      <FAQSection />
      <Start />
      
    </>   
  );
}
