import { DateDB2Icon, DeleteDBIcon, EditDBIcon } from "@/icon";
import { Plus } from "lucide-react";
import React from "react";

const PaymentPage = () => {
  const paymentCardInfo = [
    {
      id: 1,
      type: "Visa card",
      cardNumber: "**** **** **** 2154",
      lastFourDigits: "2154",
      brand: "visa",
    },
    {
      id: 2,
      type: "Visa card",
      cardNumber: "**** **** **** 2154",
      lastFourDigits: "2154",
      brand: "visa",
    },
    {
      id: 3,
      type: "Visa card",
      cardNumber: "**** **** **** 2154",
      lastFourDigits: "2154",
      brand: "visa",
    },
    {
      id: 4,
      type: "Master Card",
      cardNumber: "**** **** **** 2154",
      lastFourDigits: "2154",
      brand: "mastercard",
    },
  ];
  return (
    <div>
      <h1 className="text-xl font-semibold mb-6 ">Payment settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        {paymentCardInfo?.map((item) => (
          <div
            key={item.id}
            className="bg-secondary flex flex-col md:flex-row items-center justify-between gap-2 p-2 rounded-figma-sm"
          >
            <div className="flex items-center gap-2">
              <div>
                <DateDB2Icon />
              </div>
              <div>
                <h1 className="text-[20px] font-semibold">Visa card</h1>
                <h2>**** **** **** 2154</h2>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <EditDBIcon />
              <DeleteDBIcon />
            </div>
          </div>
        ))}
        <div className="bg-secondary flex justify-center items-center  p-2 rounded-figma-sm">
          <div className="flex items-center gap-2">
            <Plus />
            <h1 className="text-[20px] font-semibold">Add new card</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
