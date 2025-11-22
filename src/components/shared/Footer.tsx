"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/icon";
import Image from "next/image";
import assets from "@/assets";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [currentYear] = useState(new Date().getFullYear());
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div
      className="bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/images/footer.png')" }}
    >
      <div className="">
        {/* Hero Section with Gradient Background */}
        <div className="container flex-1 flex items-center justify-center py-16 sm:py-20 lg:py-24 ">
          <div className="">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="">
                <Image src={assets.logo} alt="photo" width={40} height={40} />
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {/* Heading */}
              <h1 className="text-[#ffff] font-bold text-[20px] text-center">
                Guest Ready: Trusted Local Cleaning Experts.
              </h1>

              {/* Subheading */}
              <p className="font-sans font-medium text-[16px] text-[#ffff]  text-center">
                Quality service and outstanding cleaning expertise, all backed
                up with certificates and after-training
              </p>
            </div>

            {/* Email Subscription Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col sm:flex-row gap-3 justify-center mb-8"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="flex-1 sm:flex-initial px-4 py-2.5 sm:py-3 bg-white/95 text-gray-900 placeholder-gray-500 rounded-md border-0 focus:ring-2 focus:ring-white focus:ring-offset-0 min-w-0"
              />
              <Button
                type="submit"
                className="bg-white text-gray-900 font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-md "
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className=" text-white  py-6 sm:py-8 border-t border-white/10">
          <div className="container">
            {/* Footer Content Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:place-items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* Copyright */}
              <div className="flex flex-col  justify-center  sm:col-span-1">
                <p className="text-sm font-medium flex items-center gap-2 text-blue-50">
                  <span className="text-lg">©</span>
                  Copyright © guest-ready, {currentYear}
                </p>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-wrap  justify-center gap-3 sm:gap-4 sm:col-span-1 lg:col-span-2 text-center sm:text-left">
                <a
                  href="#privacy"
                  className="text-sm hover:text-white transition-colors text-blue-50"
                >
                  Privacy policy
                </a>
                <a
                  href="#terms"
                  className="text-sm hover:text-white transition-colors text-blue-50"
                >
                  Terms & conditions
                </a>
                <a
                  href="#faq"
                  className="text-sm hover:text-white transition-colors text-blue-50"
                >
                  FAQ
                </a>
                <a
                  href="#contact"
                  className="text-sm hover:text-white transition-colors text-blue-50"
                >
                  Contact us
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-4 justify-center md:justify-start lg:justify-center ">
                <a href="#facebook">
                  <FacebookIcon />
                </a>
                <a href="#Instagram">
                  <InstagramIcon />
                </a>
                <a href="#facebook">
                  <YoutubeIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
