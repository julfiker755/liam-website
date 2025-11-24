// import Navbar from "@/components/shared/Navbar";
import Customer from "@/components/common/home/customer";
import Vendor from "@/components/common/home/vendor";
import Works from "@/components/common/home/works";
import About from "@/components/common/home/about";
import LoveGuest from "@/components/common/home/love-guest";
import FQA from "@/components/common/home/fqa";
import CustomersSay from "@/components/common/home/customers-say";
import VendorBox from "@/components/common/home/vender-home";
import Footer from "@/components/shared/Footer";
import CleaningServiceHome from "@/components/common/home/cleaning-service-home";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <CleaningServiceHome />
      <Customer />
      <Vendor />
      <Works />
      <About />
      <LoveGuest />
      <FQA />
      <CustomersSay />
      <VendorBox />
      <Footer />
    </>
  );
}
