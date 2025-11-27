"use client";

import { ImgBox } from "@/components/reusable/Img-box";
import assets from "@/assets";
import { DateDBIcon } from "@/icon";
import { TableCell, TableRow } from "@/components/ui";
import { PaymentTable } from "@/components/reusable/vendor-table";
import { Star } from "lucide-react";

interface Booking {
  id: number;
  service: string;
  price: number;
  customerName: string;
  customerEmail: string;
  date: string;
  rating?: null | number;
  hasRating?: boolean;
  status: "completed" | "pending" | "ongoing";
}

const BookingHistory = () => {
  const bookings: Booking[] = [
    {
      id: 1,
      service:
        "House cleaning service for residential areas House cleaning service for residential areas",
      price: 250,
      customerName: "John Doe",
      customerEmail: "example@gmail.com",
      date: "10th Nov, 2025",
      rating: null,
      hasRating: false,
      status: "completed",
    },
    {
      id: 2,
      service:
        "House cleaning service for residential areas House cleaning service for residential areas",
      price: 250,
      customerName: "John Doe",
      customerEmail: "example@gmail.com",
      date: "10th Nov, 2025",
      rating: null,
      hasRating: false,
      status: "completed",
    },
    {
      id: 3,
      service:
        "House cleaning service for residential areas House cleaning service for residential areas areas House cleaning service for residential areas",
      price: 250,
      customerName: "John Doe",
      customerEmail: "example@gmail.com",
      date: "10th Nov, 2025",
      rating: 4.0,
      hasRating: true,
      status: "completed",
    },
    {
      id: 4,
      service:
        "House cleaning service for residential areas House cleaning service for residential areas areas House cleaning service for residential areas",
      price: 250,
      customerName: "John Doe",
      customerEmail: "example@gmail.com",
      date: "10th Nov, 2025",
      rating: 4.0,
      hasRating: true,
      status: "completed",
    },
    {
      id: 5,
      service:
        "House cleaning service for residential areas House cleaning service for residential areas areas House cleaning service for residential areas",
      price: 250,
      customerName: "John Doe",
      customerEmail: "example@gmail.com",
      date: "10th Nov, 2025",
      rating: 4.0,
      hasRating: true,
      status: "completed",
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-xl font-semibold  ">Ongoing bookings</h1>
      </div>

      <PaymentTable>
        {bookings?.map((item) => (
          <TableRow key={item.id} className="">
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

            <TableCell>
              <div className="shrink-0">
                {item.hasRating ? (
                  <div className="flex items-center gap-1.5 px-4 py-2 bg-gray-100 rounded-lg">
                    <Star className="w-4 h-4 fill-[#FFA900] text-[#FFA900]" />
                    <span className="text-sm font-semibold text-gray-900">
                      {item.rating?.toFixed(1)}
                    </span>
                  </div>
                ) : (
                  <button className="px-5 py-2 bg-[#FFA900] text-white text-sm font-medium rounded-lg transition-colors">
                    Give rating
                  </button>
                )}
              </div>
            </TableCell>

            <TableCell className="text-right">
              <div>
                <ul className="list-disc list-inside">
                  <li
                    className={` text-white font-medium text-center text-sm px-4  p-2 rounded-figma-sm 
                         ${
                           item.status === "pending"
                             ? "bg-[#8A38F5]"
                             : item.status === "completed"
                               ? "bg-[#2D9D1E]"
                               : "bg-[#2A7FFF]"
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

export default BookingHistory;
