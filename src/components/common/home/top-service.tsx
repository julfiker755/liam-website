"use client"



import SubTitle from "@/components/reusable/title"
import { Button } from "@/components/ui"
import { ArrowBlackRightIcon } from "@/icon"
import { Star, } from "lucide-react"
import Image from "next/image"
import photo1 from "@/assets/service1.png"
import photo2 from "@/assets/service2.png"
import photo3 from "@/assets/service3.png"
import photo4 from "@/assets/service4.png"



interface Service {
    id: number
    title: string
    category: string
    price: number
    rating: number
    reviews: number
    image: string
}

// Sample service data
const services: Service[] = [
    {
        id: 1,
        title: "House cleaning service for residential areas in New York City.",
        category: "Home Cleaning",
        price: 250,
        rating: 4.8,
        reviews: 128,
        image: `${photo1}`,
    },
    {
        id: 2,
        title: "House cleaning service for residential areas in New York City.",
        category: "Deep Cleaning",
        price: 250,
        rating: 4.9,
        reviews: 256,
        image: `${photo2}`,
    },
    {
        id: 3,
        title: "House cleaning service for residential areas in New York City.",
        category: "Carpet Care",
        price: 250,
        rating: 4.7,
        reviews: 89,
        image: `${photo3}`,
    },
    {
        id: 4,
        title: "House cleaning service for residential areas in New York City.",
        category: "Carpet Care",
        price: 250,
        rating: 4.7,
        reviews: 89,
        image: `${photo4}`,
    },
]


export default function TopService() {

    return (
        <div className="container px-4 py-12">

            <div className="pb-8">
                <SubTitle text="Top services" />
            </div>

            {/* Main Content */}
            <main className="">
                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-secondary rounded-lg overflow-hidden shadow-sm hover:shadow-md transition border border-border"
                        >
                            {/* Service Image */}
                            <div className="relative w-full h-64 bg-muted overflow-hidden">
                                <Image
                                    src={photo3}
                                    alt={"photo"}
                                    fill
                                    className="object-cover rounded-lg transition duration-300"
                                />
                            </div>

                            {/* Service Info */}
                            <div className="p-4">
                                {/* Category */}
                                <div className="flex justify-between">
                                    <p className="max-w-[80%] ">{service.title}</p>
                                    <span className="text-[#000000] font-bold text-[16px] xl:text-[20px]">${service.price}</span>
                                </div>





                                {/* Price */}
                                <div className="flex items-center justify-between mt-4 pt-4 ">
                                    <div className="flex items-center gap-2">
                                        <div>
                                            <Image src={"/images/footer.png"}
                                                alt={"photo"}
                                                width={40}
                                                height={40}
                                                className="rounded-full w-[40px] h-[40px]"
                                            />
                                        </div>
                                        <div>
                                            <h1 className="text-[#000000]  text-[16px] xl:text-[20px]">John Doe</h1>

                                            <div className="flex items-center gap-1">
                                                {[...Array(1)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-4 h-4 ${i < Math.floor(service.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                                                            }`}
                                                    />
                                                ))}
                                                {service.rating}
                                            </div>
                                        </div>
                                    </div>


                                    <Button className=" bg-white text-black font-bold" size={"lg"} icon={false}>
                                        Order
                                        <ArrowBlackRightIcon className="text-black" />
                                    </Button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>


        </div>
    )
}
