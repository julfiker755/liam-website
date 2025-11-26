import { ImgBox } from "@/components/reusable/Img-box";
import assets from "@/assets";
import { DateDBIcon } from "@/icon";

interface Booking {
  id: number;
  service: string;
  price: number;
  customerName: string;
  customerEmail: string;
  date: string;
  rating?: number;
  status: "completed" | "pending";
}

const BookingPage = () => {
  const bookings: Booking[] = [
    {
      id: 1,
      service:
        "House cleaning service for residential areas House cleaning service for residential areas",
      price: 250,
      customerName: "John Doe",
      customerEmail: "example@gmail.com",
      date: "10th Nov, 2025",
      status: "pending",
    },
    {
      id: 2,
      service:
        "House cleaning service for residential areas House cleaning service for residential areas",
      price: 250,
      customerName: "John Doe",
      customerEmail: "example@gmail.com",
      date: "10th Nov, 2025",
      status: "pending",
    },
  ];

  return (
    <div>
      <h1 className="text-xl font-semibold mb-6 ">Ongoing bookings</h1>
      <div className="space-y-3 sm:space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-3 items-center"
          >
            <div className=" lg:col-span-5 ">
              <div className="flex items-center gap-3">
                {/* Service Image */}
                <div>
                  <ImgBox
                    src={assets.bookingPhoto}
                    alt="photo"
                    className="w-[72px] h-[72px] rounded-[10px] object-cover"
                  />
                </div>

                {/* Service Details */}
                <div className="flex-grow min-w-0">
                  <p className="text-gray-800">{booking.service}</p>
                  <p className="text-gray-900 font-semibold text-base">
                    ${booking.price}
                  </p>
                </div>
              </div>
            </div>

            <div className=" lg:col-span-3 ">
              {/* Customer Info */}
              <div className="flex items-center gap-3 ml-4">
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
                      {booking.customerName}
                    </h1>
                    <h2>{booking.customerEmail}</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className=" lg:col-span-2">
              {/* Date */}
              <div className="flex items-center gap-2 text-gray-600 ml-4">
                <DateDBIcon />
                <span className="text-sm whitespace-nowrap">
                  {booking.date}
                </span>
              </div>
            </div>

            <div className=" col-span-2 ">
              {/* Status */}
              <div>
                <ul className="list-disc list-inside">
                  <li
                    className={` text-white font-medium text-center text-sm  py-2 rounded-figma-sm ${booking.status === "pending" ? "bg-[#8A38F5]" : "bg-[#2A7FFF]"}`}
                  >
                    {booking.status}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingPage;
