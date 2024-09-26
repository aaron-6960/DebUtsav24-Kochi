import About from "@/components/About";
import Contacts from "@/components/Contacts/Contacts";
import CountDown from "@/components/CountDown";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import Speakers from "@/components/Speakers";
import Sponsors from "@/components/Sponsors";
import TimelineSection from "@/components/Timeline/TimelineSection";
import Faq from "@/components/Faq/Faq";
import Tickets from "@/components/Tickets/Tickets";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Landing />
      <CountDown />
      <About />
      <TimelineSection />
      {/*<Speakers />*/}
      <Tickets />
      <Sponsors />
      <Faq />
      <Contacts />
      <Footer />
    </div>
  );
}
