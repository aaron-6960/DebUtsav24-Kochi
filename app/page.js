import About from "@/components/About";
import Contacts from "@/components/Contacts/Contacts";
import CountDown from "@/components/CountDown";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import Speakers from "@/components/Speakers";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Landing />
      <CountDown />
      <About />
      <Speakers />
      <Sponsors />
      <Contacts />
      <Footer />
    </div>
  );
}
