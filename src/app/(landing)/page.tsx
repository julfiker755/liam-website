import CleaningServiceHome from "@/components/common/home/cleaning-service-home";
import Customer from "@/components/common/home/customer";
import Vendor from "@/components/common/home/vendor";
import Works from "@/components/common/home/works";
import About from "@/components/common/home/about";
import LoveGuest from "@/components/common/home/love-guest";
import FQA from "@/components/common/home/fqa";
import CustomersSay from "@/components/common/home/customers-say";
import VendorBox from "@/components/common/home/vender-home";
import TopService from "@/components/common/home/top-service";
import { loginUser } from "@/assets";

export default function Home() {
  return (
    <>
      <CleaningServiceHome />
      {loginUser ? (
        <div>
          <TopService />
        </div>
      ) : (
        <div>
          <Customer />
          <Vendor />
        </div>
      )}

      <Works />
      <About />
      <LoveGuest />
      <FQA />
      <CustomersSay />
      <VendorBox />
    </>
  );
}
