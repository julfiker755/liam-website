'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import photo1 from '@/assets/contactUsPhoto.png';
import { LocationIcon, MessageIcon, PhoneIcon, SendIcon } from '@/icon';
import Footer from '@/components/shared/Footer';
import { Button } from '@/components/ui';



interface ContactFormInputs {
    name: string;
    email: string;
    message: string;
}

const ContactUs: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormInputs>();

    const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
        console.log('Form Data:', data);
        // Handle form submission here
        // Example: Send data to API
        alert(`Form Submitted!\nName: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`);
        reset(); // Reset form after submission
    };

    return (
        <div className=" bg-white pt-4">
            <div className="container px-4 mb-8">
                {/* Header Section */}
                <div
                    className="relative h-[200px] md:h-[250px] xl:h-[380px] rounded-2xl"
                    style={{
                        backgroundImage: `url(${photo1.src})`,
                        backgroundSize: '100% 100%',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <h1 className='text-[#ffff] absolute bottom-0 p-6 xl:p-10 font-bold text-[16px] xl:text-[20px]'>Contact Us</h1>
                </div>

                {/* Content Section */}
                <div className="mt-6 xl:mt-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:px-40">
                        {/* Left Column - Contact Information */}
                        <div className="space-y-4 bg-secondary flex flex-col justify-center px-4 md:px-8 py-6 rounded-lg h-[350px]">
                            {/* Address 1 */}
                            <div className="flex items-center gap-4">
                                <div className="self-start">
                                    <LocationIcon className=" shrink-0" />
                                </div>
                                <div>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        V-Manhattan Square North, New York, NY 10001, United States
                                    </p>
                                </div>
                            </div>
                            {/* Address 2 */}
                            <div className="flex items-center gap-4">
                                <div className="self-start">
                                    <LocationIcon className=" shrink-0" />
                                </div>
                                <div>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        P-Washington Square South, New York, NY 10012, United States
                                    </p>
                                </div>
                            </div>



                            {/* Phone */}
                            <div className="flex items-center  gap-4">
                                <PhoneIcon />
                                <div>
                                    <p className="text-gray-700 text-sm leading-relaxed">+1234567890</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center  gap-4">
                                <MessageIcon />
                                <div>
                                    <p className="text-gray-700 text-sm leading-relaxed">example@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Contact Form */}
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            {/* Name Input */}
                            <div>
                                <label htmlFor="name" className="block text-gray-800 text-sm font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your full name here"
                                    {...register('name', {
                                        required: 'Name is required',
                                        minLength: {
                                            value: 2,
                                            message: 'Name must be at least 2 characters',
                                        },
                                    })}
                                    className={`w-full px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${errors.name ? 'border-red-500' : 'border-gray-200'
                                        }`}
                                />
                                {errors.name && (
                                    <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                                )}
                            </div>

                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-gray-800 text-sm font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email address"
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Invalid email address',
                                        },
                                    })}
                                    className={`w-full px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${errors.email ? 'border-red-500' : 'border-gray-200'
                                        }`}
                                />
                                {errors.email && (
                                    <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <label htmlFor="message" className="block text-gray-800 text-sm font-medium mb-2">
                                    Your message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Write your message here"
                                    {...register('message', {
                                        required: 'Message is required',
                                        minLength: {
                                            value: 10,
                                            message: 'Message must be at least 10 characters',
                                        },
                                    })}
                                    className={`w-full px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none ${errors.message ? 'border-red-500' : 'border-gray-200'
                                        }`}
                                ></textarea>
                                {errors.message && (
                                    <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-end pt-2">
                                <Button className="mt-4 xl:mt-0" size="lg" icon={false}>
                                    Get a quote
                                    <SendIcon />
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;