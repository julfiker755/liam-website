"use client";

import assets from "@/assets";
import Form from "@/components/reusable/from";
import Modal2 from "@/components/reusable/modal2";
import { Button } from "@/components/ui";
import { useGlobalState } from "@/hooks";
import {
  CVCIcon,
  DateDB2Icon,
  DeleteDBIcon,
  EditDBIcon,
  ScreenCardIcon,
} from "@/icon";
import { new_addPaymentCard } from "@/lib";
import useConfirmation from "@/provider/confirmation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

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

const intState = {
  isAdd: false,
  isEdit: false,
};

const PaymentPage = () => {
  const [paymentModal, setPaymentModal] = useGlobalState(intState);
  const { confirm } = useConfirmation();
  const [saveCard, setSaveCard] = useState(false);

  // == add on ==
  const from = useForm({
    resolver: zodResolver(new_addPaymentCard),
    defaultValues: {
      name: "",
    },
  });

  const handleDelete = async (id: any) => {
    const confirmed = await confirm({
      title: "You are going to delete this card",
      titleStyle: "text-black",
      description:
        "After deleting, you won’t be able to use this card during placing order.",
    });
    if (confirmed) {
      console.log(id);
    }
  };

  const handleSubmit = async (values: FieldValues) => {
    console.log(values);
  };

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
              <EditDBIcon
                onClick={() => setPaymentModal("isEdit", true)}
                className="cursor-pointer"
              />
              <DeleteDBIcon
                onClick={() => handleDelete("4343")}
                className="cursor-pointer"
              />
            </div>
          </div>
        ))}
        <div
          className="bg-secondary cursor-pointer flex justify-center items-center  p-2 rounded-figma-sm"
          onClick={() => setPaymentModal("isAdd", true)}
        >
          <div className="flex items-center gap-2 py-4">
            <Plus />
            <h1 className="text-[20px] font-semibold ">Add new card</h1>
          </div>
        </div>
      </div>

      {/* ============== add on  ============== */}
      <Modal2
        open={paymentModal.isAdd}
        setIsOpen={(v: any) => setPaymentModal("isAdd", v)}
        title="Add new card"
        titleStyle="text-center"
        className="sm:max-w-xl"
      >
        <div
          className="absolute top-3 right-4 cursor-pointer"
          onClick={() => setPaymentModal("isAdd", false)}
        >
          <X className="text-black" />
        </div>
        <Form className="space-y-4" from={from} onSubmit={handleSubmit}>
          <div>
            {/* Header */}
            <div className="flex items-center justify-between ">
              <h2 className="text-lg sm:text-xl font-normal text-gray-700">
                Card information
              </h2>
              <ScreenCardIcon />
            </div>

            {/* Card Information Section */}
            <div className="border border-gray-300 rounded-lg overflow-hidden mb-6">
              {/* Card Number Field */}
              <div className="border-b border-gray-300">
                <div className="flex items-center justify-between px-4">
                  <input
                    type="text"
                    placeholder="Card information"
                    className="flex-1 text-base outline-none"
                  />
                  <div className="flex gap-2 ml-4">
                    <Image
                      src={assets.paymentCard}
                      alt="photo"
                      width={40}
                      height={40}
                      className="w-[50px] h-[50px]  object-contain rounded-md"
                    />
                  </div>
                </div>
              </div>

              {/* Expiry and CVC Fields */}
              <div className="flex">
                <div className="flex-1 border-r border-gray-300 p-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full text-base outline-none"
                  />
                </div>
                <div className="flex-1 p-4 flex items-center justify-between">
                  <input
                    type="text"
                    placeholder="CVC"
                    className="flex-1 text-base outline-none"
                  />
                  <CVCIcon />
                </div>
              </div>
            </div>

            {/* Billing Address Section */}
            <h3 className="text-lg sm:text-xl font-normal text-gray-700 mb-2">
              Billing address
            </h3>

            <div className="border border-gray-300 rounded-lg overflow-hidden mb-6">
              {/* Country Field */}
              <div className="border-b border-gray-300 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-1">
                      Country or region
                    </p>
                    <p className="text-base font-medium">United States</p>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* ZIP Field */}
              <div className="p-4">
                <input
                  type="text"
                  placeholder="ZIP"
                  className="w-full text-base outline-none"
                />
              </div>
            </div>

            {/* Save Card Checkbox */}
            <div className="flex items-center gap-3 mb-6">
              <input
                type="checkbox"
                id="saveCard"
                checked={saveCard}
                onChange={(e) => setSaveCard(e.target.checked)}
                className="w-5 h-5 border-2 border-gray-300 rounded cursor-pointer"
              />
              <label
                htmlFor="saveCard"
                className="text-base text-gray-700 cursor-pointer"
              >
                Save this card for future payment
              </label>
            </div>

            <Button
              onClick={() => setPaymentModal("isAdd", false)}
              size="lg"
              className="w-full"
            >
              Add card
            </Button>
          </div>
        </Form>
      </Modal2>
      {/* ============== edit on  ============== */}
      <Modal2
        open={paymentModal.isEdit}
        setIsOpen={(v: any) => setPaymentModal("isEdit", v)}
        title="Edit card details"
        titleStyle="text-center"
        className="sm:max-w-xl"
      >
        <div
          className="absolute top-3 right-4 cursor-pointer"
          onClick={() => setPaymentModal("isEdit", false)}
        >
          <X className="text-black" />
        </div>
        <Form className="space-y-4" from={from} onSubmit={handleSubmit}>
          <div>
            {/* Header */}
            <div className="flex items-center justify-between ">
              <h2 className="text-lg sm:text-xl font-normal text-gray-700">
                Card information
              </h2>
              <ScreenCardIcon />
            </div>

            {/* Card Information Section */}
            <div className="border border-gray-300 rounded-lg overflow-hidden mb-6">
              {/* Card Number Field */}
              <div className="border-b border-gray-300">
                <div className="flex items-center justify-between px-4">
                  <input
                    type="text"
                    placeholder="Card information"
                    className="flex-1 text-base outline-none"
                  />
                  <div className="flex gap-2 ml-4">
                    <Image
                      src={assets.paymentCard}
                      alt="photo"
                      width={40}
                      height={40}
                      className="w-[50px] h-[50px]  object-contain rounded-md"
                    />
                  </div>
                </div>
              </div>

              {/* Expiry and CVC Fields */}
              <div className="flex">
                <div className="flex-1 border-r border-gray-300 p-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full text-base outline-none"
                  />
                </div>
                <div className="flex-1 p-4 flex items-center justify-between">
                  <input
                    type="text"
                    placeholder="CVC"
                    className="flex-1 text-base outline-none"
                  />
                  <CVCIcon />
                </div>
              </div>
            </div>

            {/* Billing Address Section */}
            <h3 className="text-lg sm:text-xl font-normal text-gray-700 mb-2">
              Billing address
            </h3>

            <div className="border border-gray-300 rounded-lg overflow-hidden mb-6">
              {/* Country Field */}
              <div className="border-b border-gray-300 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-1">
                      Country or region
                    </p>
                    <p className="text-base font-medium">United States</p>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* ZIP Field */}
              <div className="p-4">
                <input
                  type="text"
                  placeholder="ZIP"
                  className="w-full text-base outline-none"
                />
              </div>
            </div>

            {/* Save Card Checkbox */}
            <div className="flex items-center gap-3 mb-6">
              <input
                type="checkbox"
                id="saveCard"
                checked={saveCard}
                onChange={(e) => setSaveCard(e.target.checked)}
                className="w-5 h-5 border-2 border-gray-300 rounded cursor-pointer"
              />
              <label
                htmlFor="saveCard"
                className="text-base text-gray-700 cursor-pointer"
              >
                Save this card for future payment
              </label>
            </div>

            <Button
              onClick={() => setPaymentModal("isEdit", false)}
              size="lg"
              className="w-full"
            >
              Save changes
            </Button>
          </div>
        </Form>
      </Modal2>
    </div>
  );
};

export default PaymentPage;
