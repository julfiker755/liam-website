import { Button } from "@/components/ui";
import React from "react";

function VendorBox() {
  return (
    <div className="pt-[48px] xl:pt-[148px]">
      <div className="container px-4 ">
        <div
          className="h-auto xl:h-[380px] mb-10 flex items-center rounded-2xl"
          style={{
            backgroundImage: "url('/images/vendor-web-account.png')",
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="p-8 xl:p-20 space-y-4 md:w-[80%] xl:w-[65%]">
            <h1 className="text-[#ffff] font-bold text-[24px] xl:text-[36px]">
              Focus on Cleaning. We Handle the Bookings.
            </h1>
            <p className="font-medium text-[16px] xl:text-[20px] text-[#ffff]">
              Join the fastest-growing platform connecting top-tier cleaning
              professionals with clients across New York City. Get reliable,
              quality leads directly to your business.
            </p>
            <Button className="mt-4 xl:mt-0" size="lg" icon={true}>
              Create your vendor account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorBox;
