import Image from "next/image";
import { Button } from "@/components/ui";
import Link from "next/link";

function Vendor() {
  return (
    <div className="pt-4">
      <div className="px-4">
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <div className="order-2 lg:order-1 bg-secondary w-full  rounded-[30px] flex items-center p-6 lg:p-8 xl:p-14 2xl:p-20">
            <div className="space-y-3">
              <div>
                <p>For vendors</p>
                <h1 className="text-[#000000] font-bold text-[16px] xl:text-[36px]">
                  Ready to Grow Your Cleaning Business?
                </h1>
              </div>
              <div>
                <p className="font-sans font-medium text-[16px] text-[#535353]">
                  Focus on the excellent service you provide. We handle the
                  demanding task of c lient acquisition, scheduling, and secure
                  payments so your{" "}
                </p>
                <p className="font-sans font-medium text-[16px] text-[#535353]">
                  business can thrive in the NYC market.
                </p>
              </div>

              <ul className="list-disc list-inside">
                <li className="">
                  <span className="font-bold">Reliable Leads:</span> Get steady
                  bookings in your service area.
                </li>

                <li>
                  <span className="font-bold">Set Your Rates:</span> You control
                  your pricing and schedule..
                </li>
                <li>
                  <span className="font-bold">Simple Payouts:</span> Fast,
                  secure payment processing.
                </li>
              </ul>
              <Link href={"/auth/vendor-register"}>
                <Button className="mt-4 xl:mt-0" size="lg" icon={true}>
                  Continue as vendor
                </Button>
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Image
              src="/images/vendor-web-photo2.png"
              alt="Nexus Logo"
              width={500}
              height={500}
              className="rounded-[30px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vendor;
