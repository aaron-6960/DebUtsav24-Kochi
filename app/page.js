import About from "@/components/About";
import Contacts from "@/components/Contacts/Contacts";
import CountDown from "@/components/CountDown";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import Speakers from "@/components/Speakers";
import Sponsors from "@/components/Sponsors";
<<<<<<< HEAD
import Faq from "@/components/Faq/Faq";
=======
import TimelineSection from "@/components/Timeline/TimelineSection";
>>>>>>> 96737d17241eaaea45b1a31df63083f4f5fc4dd2

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Landing />
      <CountDown />
      <About />
<<<<<<< HEAD
      {/* <Speakers />*/}
      <Sponsors />
      <Faq />
=======
      <TimelineSection />
      {/* <Speakers />
      <Sponsors /> */}
>>>>>>> 96737d17241eaaea45b1a31df63083f4f5fc4dd2
      <Contacts />
      <Footer />
    </div>
  );
}
