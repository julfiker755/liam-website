"use client"
import React, { useState } from 'react';
import { Plus, Minus, MessageCircle, Star } from 'lucide-react';
import assets from '@/assets';
import Image from 'next/image';

interface AddOn {
    id: number;
    label: string;
    price: number;
    count: number;
}

export default function PackageDetails() {
    const [addOns, setAddOns] = useState<AddOn[]>([
        { id: 1, label: 'Add-on number 1', price: 50, count: 0 },
        { id: 2, label: 'Add-on number 2', price: 50, count: 0 },
        { id: 3, label: 'Add-on number 3', price: 50, count: 0 },
        { id: 4, label: 'Add-on number 4', price: 50, count: 0 },
        { id: 5, label: 'Add-on number 5', price: 50, count: 0 },
        { id: 6, label: 'Add-on number 6', price: 50, count: 0 },
        { id: 7, label: 'Add-on number 7', price: 50, count: 0 },
        { id: 8, label: 'Add-on number 8', price: 50, count: 0 },
    ]);

    const basePrice = 250;

    const incrementAddOn = (id: number) => {
        setAddOns(addOns.map(addon =>
            addon.id === id ? { ...addon, count: addon.count + 1 } : addon
        ));
    };

    const decrementAddOn = (id: number) => {
        setAddOns(addOns.map(addon =>
            addon.id === id && addon.count > 0 ? { ...addon, count: addon.count - 1 } : addon
        ));
    };

    const calculateSubtotal = () => {
        const addOnsTotal = addOns.reduce((sum, addon) => sum + (addon.price * addon.count), 0);
        return basePrice + addOnsTotal;
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className='container px-4'>
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Section */}
                    <div className="space-y-6">
                        {/* Image */}
                        <div className="relative h-80 bg-gray-800 rounded-2xl overflow-hidden">
                            <Image
                                src={assets.service1}
                                alt={"photo"}
                                fill
                                className="object-cover rounded-lg transition duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>

                        {/* Title */}
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                House cleaning service for residential areas in New York City.
                            </h1>
                        </div>

                        {/* Vendor Info */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                                        JD
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">John Doe</h3>
                                        <div className="flex items-center gap-1 text-sm text-gray-600">
                                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                            <span>4.5</span>
                                            <span className="text-gray-400">(10 reviews)</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition">
                                    <MessageCircle className="w-4 h-4" />
                                    <span className="text-sm font-medium">Message</span>
                                </button>
                            </div>

                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">About vendor</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Lorem ipsum dolor sit amet consectetur. Senectus a condimentum dapibus aliquet gravida placerat molestie dui non lorem. Suscipit eu sed tortor egestas elit tristique felis arcu in facilisis. Sagittis lectus aliquet urna velit velit vulputate vitae pellentesque aliquam. Ornare in donec facilisis sit dui. Etumod elementum potentique molestie feugiat enim maecenas ac morbi. Sodales aliquet eu purus ac dui scelerisque.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="lg:sticky lg:top-8 h-fit">
                        <div className="bg-white rounded-2xl p-6 shadow-sm space-y-6">
                            <div>
                                <h2 className="text-sm font-semibold text-gray-900 mb-3">Package details</h2>
                                <div className="text-4xl font-bold text-gray-900">${basePrice}</div>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-gray-900 mb-3">About this package</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Lorem ipsum dolor sit amet consectetur. Senectus a condimentum dapibus aliquet gravida placerat molestie dui non lorem. Suscipit eu sed tortor egestas elit tristique felis arcu in facilisis. Sagittis lectus aliquet urna velit velit vulputate vitae pellentesque aliquam. Ornare in donec facilisis sit dui. Etumod elementum potentigue molestie feugiat enim maecenas ac morbi. Sodales aliquet eu purus ac dui scelerisque.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-gray-900 mb-3">Service included</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-sm text-gray-600">
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                                        Yard cleaning
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-gray-600">
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                                        4 room cleaning
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-gray-600">
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                                        2 bathroom cleaning
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-gray-600">
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                                        Window cleaning
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-gray-900 mb-3">Available add-ons with this package</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {addOns.map((addon) => (
                                        <div key={addon.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                                            <div className="flex-1">
                                                <div className="text-xs text-gray-600 mb-1">{addon.label}</div>
                                                <div className="text-sm font-semibold text-gray-900">+ ${addon.price}</div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => decrementAddOn(addon.id)}
                                                    disabled={addon.count === 0}
                                                    className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition"
                                                >
                                                    <Minus className="w-3 h-3" />
                                                </button>
                                                <span className="text-sm font-medium w-4 text-center">{addon.count}</span>
                                                <button
                                                    onClick={() => incrementAddOn(addon.id)}
                                                    className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 transition"
                                                >
                                                    <Plus className="w-3 h-3" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-200">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="font-semibold text-gray-900">Subtotal:</span>
                                    <span className="text-2xl font-bold text-gray-900">${calculateSubtotal()}</span>
                                </div>
                                <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2">
                                    Continue
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}