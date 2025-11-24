import Image from "next/image";
import SubTitle from "@/components/reusable/title";
import { COOIcon } from "@/icon";

const CustomersSay = () => {
  const testimonialData = [
    {
      id: 1,
      message:
        "I've been consistently impressed with the quality of service provided by this website. They have exceeded my expectations and delivered exceptional results. Highly recommended!",
      name: "John D.",
      position: "Project Manager",
      image: "/images/logo.png",
    },
    {
      id: 2,
      message:
        "I've been consistently impressed with the quality of service provided by this website. They have exceeded my expectations and delivered exceptional results. Highly recommended!",
      name: "John D.",
      position: "Company CEO",
      image: "/images/logo.png",
    },
    {
      id: 3,
      message:
        "I've been consistently impressed with the quality of service provided by this website. They have exceeded my expectations and delivered exceptional results. Highly recommended!",
      name: "John D.",
      position: "Company CEO",
      image: "/images/logo.png",
    },
  ];
  return (
    <div className="pt-[48px] xl:pt-[148px]">
      <div className="container px-4">
        <div className="pb-8">
          <SubTitle text="See what our customers say" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {testimonialData?.map((item, index) => {
            return (
              <div
                key={index}
                className=" bg-[#F8F8F8] shadow-md space-y-4  rounded-lg"
              >
                <div className="bg-white flex flex-col gap-4 py-8 p-8">
                  <span>{<COOIcon />}</span>
                  <p className="font-medium text-[16px] text-[#535353]">
                    {item.message}
                  </p>
                </div>

                <div className="flex justify-between py-4 px-8">
                  <div>
                    <h1 className="text-[#000000] font-bold text-[16px] xl:text-[20px]">
                      {item.name}
                    </h1>
                    <span className="text-[#777777] text-[14px]">
                      {item.position}
                    </span>
                  </div>
                  <div>
                    <Image
                      src={item.image}
                      alt="Photo"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomersSay
