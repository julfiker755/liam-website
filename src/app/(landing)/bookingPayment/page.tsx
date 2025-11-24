// import React from 'react'

// const BookingPayment = () => {
//     return (
//         <div>BookingPayment</div>
//     )
// }

// export default BookingPayment

"use client"

import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Star, Trash2 } from 'lucide-react';

const BookingPayment = () => {
    const [addOns, setAddOns] = useState([
        { id: 1, label: 'Add-on number 1', price: 50, enabled: true },
        { id: 2, label: 'Add-on number 2', price: 50, enabled: true }
    ]);

    const toggleAddOn = (id: number) => {
        setAddOns(addOns.map(addon =>
            addon.id === id ? { ...addon, enabled: !addon.enabled } : addon
        ));
    };

    const removeAddOn = (id: number) => {
        setAddOns(addOns.filter(addon => addon.id !== id));
    };

    const calculateSubtotal = () => {
        const basePrice = 250;
        const addOnsTotal = addOns.reduce((sum, addon) =>
            addon.enabled ? sum + addon.price : sum, 0
        );
        return basePrice + addOnsTotal;
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="container px-4">
                <h1 className="text-center text-2xl font-normal mb-8 text-gray-900">
                    Schedule booking
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Billing Details Section */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6">
                        <h2 className="text-sm font-medium text-gray-900 mb-6">
                            Billing details
                        </h2>

                        <div className="space-y-5">
                            {/* Name and Email Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-normal text-gray-900 mb-2">
                                        Your full name
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Enter your full name here"
                                            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-md text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-normal text-gray-900 mb-2">
                                        Email address
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-md text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Phone and Address Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-normal text-gray-900 mb-2">
                                        Phone number
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input
                                            type="tel"
                                            placeholder="Enter your phone number"
                                            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-md text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-normal text-gray-900 mb-2">
                                        Address
                                    </label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Enter your address"
                                            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-md text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Details Section */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6">
                        <h2 className="text-sm font-medium text-gray-900 mb-6">
                            Order details
                        </h2>

                        {/* Package */}
                        <div className="mb-5">
                            <h3 className="text-sm font-normal text-gray-900 mb-3">Package</h3>
                            <div className="flex items-start gap-3">
                                <img
                                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=100&h=100&fit=crop"
                                    alt="Cleaning service"
                                    className="w-12 h-12 rounded-md object-cover"
                                />
                                <div className="flex-1">
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        House cleaning service for residential areas in New York City.
                                    </p>
                                    <p className="text-base font-semibold text-gray-900 mt-1">$250</p>
                                </div>
                            </div>
                        </div>

                        {/* Date */}
                        <div className="mb-5">
                            <h3 className="text-sm font-normal text-gray-900 mb-2">Date</h3>
                            <p className="text-sm text-gray-700">17th November, 2025</p>
                        </div>

                        {/* Add-ons */}
                        <div className="mb-5">
                            <h3 className="text-sm font-normal text-gray-900 mb-3">Add-ons</h3>
                            <div className="space-y-2">
                                {addOns.map((addon) => (
                                    <div key={addon.id} className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-gray-700">{addon.label}</span>
                                            <span className="text-sm text-gray-700">+ ${addon.price}</span>
                                            <button
                                                onClick={() => toggleAddOn(addon.id)}
                                                className={`w-5 h-5 rounded-full flex items-center justify-center ${addon.enabled ? 'bg-green-500' : 'bg-gray-300'
                                                    }`}
                                            >
                                                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => removeAddOn(addon.id)}
                                            className="w-8 h-8 bg-red-500 rounded flex items-center justify-center hover:bg-red-600 transition-colors"
                                        >
                                            <Trash2 className="w-4 h-4 text-white" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Vendor */}
                        <div className="mb-6">
                            <h3 className="text-sm font-normal text-gray-900 mb-3">Vendor</h3>
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                                    alt="John Doe"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <p className="text-sm font-medium text-gray-900">John Doe</p>
                                    <div className="flex items-center gap-1">
                                        <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                                        <span className="text-xs text-gray-600">4.5</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Subtotal and Order Button */}
                        <div className="pt-4 border-t border-gray-200">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm text-gray-700">Subtotal:</span>
                                <span className="text-lg font-bold text-gray-900">${calculateSubtotal()}</span>
                            </div>
                            <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 rounded-md text-sm transition-colors flex items-center justify-center gap-2">
                                Order now
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingPayment;