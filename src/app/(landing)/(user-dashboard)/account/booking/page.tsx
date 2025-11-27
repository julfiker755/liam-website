"use client";

import { ImgBox } from "@/components/reusable/Img-box";
import assets from "@/assets";
import { BookingHistoryIcon, DateDBIcon } from "@/icon";
import { TableCell, TableRow } from "@/components/ui";
import { PaymentTable } from "@/components/reusable/vendor-table";
import { useRouter } from "next/navigation";

interface Booking {
  id: number;
  service: string;
  price: number;
  customerName: string;
  customerEmail: string;
  date: string;
  rating?: number;
  status: "completed" | "pending" | "ongoing";
}
const bookings: Booking[] = [
  {
    id: 1,
    service: "House cleaning service for residential areas in New York City.",
    price: 250,
    customerName: "John Doe",
    customerEmail: "example@gmail.com",
    date: "10th Nov, 2025",
    status: "pending",
  },
  {
    id: 2,
    service: "House cleaning service for residential areas in New York City.",
    price: 250,
    customerName: "John Doe",
    customerEmail: "example@gmail.com",
    date: "10th Nov, 2025",
    status: "ongoing",
  },
  {
    id: 3,
    service: "House cleaning service for residential areas in New York City.",
    price: 250,
    customerName: "John Doe",
    customerEmail: "example@gmail.com",
    date: "10th Nov, 2025",
    status: "pending",
  },
];
const BookingPage = () => {
  const router = useRouter();

  const handleNavigate = (statusValue: string) => {
    if (statusValue === "pending") {
      router.push("/account/pending-package-history");
    } else if (statusValue === "ongoing") {
      router.push("/account/ongoing-package-history");
    }
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold  ">Ongoing bookings</h1>
        <BookingHistoryIcon
          onClick={() => router.push("/account/booking-history")}
          className="cursor-pointer"
        />
      </div>

      <PaymentTable>
        {bookings?.map((item) => (
          <TableRow
            key={item.id}
            className="cursor-pointer"
            onClick={() => handleNavigate(item.status)}
          >
            <TableCell className="font-medium">
              <div className="flex items-center gap-3">
                <div>
                  <ImgBox
                    src={assets.bookingPhoto}
                    alt="photo"
                    className="w-[72px] h-[72px] rounded-[10px] object-cover"
                  />
                </div>

                <div className="">
                  <p className="text-gray-800 whitespace-normal wrap-break-word">
                    {item.service}
                  </p>
                  <p className="text-gray-900 font-semibold text-base">
                    ${item.price}
                  </p>
                </div>
              </div>
            </TableCell>

            <TableCell>
              {" "}
              <div className="flex items-center gap-2">
                <div>
                  <ImgBox
                    src={assets.userPhoto1}
                    alt={"photo"}
                    className="rounded-full w-[50px] h-[50px]"
                  />
                </div>
                <div>
                  <h1 className="text-[#000000]  text-[16px]">
                    {item.customerName}
                  </h1>
                  <h2>{item.customerEmail}</h2>
                </div>
              </div>
            </TableCell>

            <TableCell>
              {" "}
              <div className="flex items-center gap-2 text-gray-600 ml-4">
                <DateDBIcon />
                <span className="text-sm whitespace-nowrap">{item.date}</span>
              </div>
            </TableCell>

            <TableCell className="text-right">
              <div>
                <ul className="list-disc list-inside">
                  <li
                    className={` text-white font-medium text-center text-sm px-4  p-2 rounded-figma-sm
                        ${
                          item.status === "pending"
                            ? "bg-[#2A7FFF]"
                            : item.status === "completed"
                              ? "bg-[#2D9D1E]"
                              : item.status === "ongoing"
                                ? "bg-[#8A38F5]"
                                : ""
                        }
                       `}
                  >
                    {item.status}
                  </li>
                </ul>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </PaymentTable>
    </div>
  );
};

export default BookingPage;
