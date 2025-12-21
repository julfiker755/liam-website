"use client";

import Customer from "@/components/common/home/customer";
import Vendor from "@/components/common/home/vendor";
import Works from "@/components/common/home/works";
import About from "@/components/common/home/about";
import LoveGuest from "@/components/common/home/love-guest";
import FQA from "@/components/common/home/fqa";
import CustomersSay from "@/components/common/home/customers-say";
import VendorBox from "@/components/common/home/vender-home";
import TopService from "@/components/common/home/top-service";

import { useAppSelector } from "@/redux/hooks";
import BannerSection from "@/components/common/home/banner";

export default function Home() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <>
      <BannerSection />
      {user.role == "user" ? (
        <div>
          <TopService />
          <Customer />
        </div>
      ) : (
        <div>
          <Customer />
          <Vendor />
        </div>
      )}

      <About />
      <Works />
      <LoveGuest />
      <FQA />
      <CustomersSay />
      <VendorBox />
    </>
  );
}
