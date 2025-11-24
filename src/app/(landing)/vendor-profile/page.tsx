"use client"

import React, { useState } from 'react';
import { Clock, Package, CheckCircle, Star } from 'lucide-react';

interface VendorData {
    name: string;
    email: string;
    phone: string;
    rating: number;
    availableFrom: string;
    availableTo: string;
    totalPackages: number;
    totalOrders: number;
    image: string;
    bio: string;
}

interface PackageItem {
    id: number;
    title: string;
    price: number;
    vendor: string;
    rating: number;
    image: string;
}

interface Review {
    id: number;
    customerName: string;
    rating: number;
    comment: string;
    date: string;
}

const VendorProfile: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'packages' | 'reviews'>('packages');

    // Sample vendor data
    const vendorData: VendorData = {
        name: 'Elizabeth Olson',
        email: 'hello@gmail.com',
        phone: '+880 1521452656',
        rating: 4.5,
        availableFrom: '09:00 AM',
        availableTo: '06:00 PM',
        totalPackages: 5,
        totalOrders: 160,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
        bio: 'Lorem ipsum dolor sit amet consectetur. Viverra pharetra maximus tortor facilisis erat amet dictum. Emc erat pulvinar amet id. Viverra tortor blandit faucibus enim consequat ligula lectus in. Ut at consequat velit sociis mauris tortor. Nunc ut molestie tristique id.'
    };

    // Sample packages data
    const packages: PackageItem[] = [
        {
            id: 1,
            title: 'House cleaning service for residential areas in New York City.',
            price: 250,
            vendor: 'John Doe',
            rating: 4.5,
            image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400&h=300&fit=crop'
        },
        {
            id: 2,
            title: 'House cleaning service for residential areas in New York City.',
            price: 250,
            vendor: 'John Doe',
            rating: 4.5,
            image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400&h=300&fit=crop'
        },
        {
            id: 3,
            title: 'House cleaning service for residential areas in New York City.',
            price: 260,
            vendor: 'John Doe',
            rating: 4.5,
            image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400&h=300&fit=crop'
        },
        {
            id: 4,
            title: 'House cleaning service for residential areas in New York City.',
            price: 250,
            vendor: 'John Doe',
            rating: 4.5,
            image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400&h=300&fit=crop'
        }
    ];

    // Sample reviews data
    const reviews: Review[] = [
        {
            id: 1,
            customerName: 'Sarah Johnson',
            rating: 5,
            comment: 'Excellent service! Very professional and thorough cleaning. Highly recommended.',
            date: '2024-01-15'
        },
        {
            id: 2,
            customerName: 'Mike Peters',
            rating: 4,
            comment: 'Good service overall. Arrived on time and did a great job.',
            date: '2024-01-10'
        },
        {
            id: 3,
            customerName: 'Emily Davis',
            rating: 5,
            comment: 'Amazing work! My house has never been cleaner. Will definitely book again.',
            date: '2024-01-05'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="container px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left Sidebar - Vendor Profile */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            {/* Profile Image */}
                            <div className="flex justify-center mb-4">
                                <img
                                    src={vendorData.image}
                                    alt={vendorData.name}
                                    className="w-24 h-24 rounded-full object-cover"
                                />
                            </div>

                            {/* Vendor Name */}
                            <h2 className="text-xl font-semibold text-gray-900 text-center mb-1">
                                {vendorData.name}
                            </h2>
                            <p className="text-sm text-gray-500 text-center mb-1">{vendorData.email}</p>
                            <p className="text-sm text-gray-500 text-center mb-4">{vendorData.phone}</p>

                            {/* Top Vendor Badge */}
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <span className="text-blue-600 text-sm">⚡</span>
                                <span className="text-sm font-medium text-gray-700">Top vendor</span>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center justify-center gap-2 mb-6 pb-6 border-b border-gray-200">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm font-semibold text-gray-900">{vendorData.rating}</span>
                            </div>

                            {/* Message Button */}
                            <button className="w-full bg-white border border-gray-300 text-gray-700 py-2.5 px-4 rounded-lg text-sm font-medium mb-6 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                                <span>💬</span>
                                <span>Message</span>
                            </button>

                            {/* Bio */}
                            <p className="text-xs text-gray-600 leading-relaxed mb-6 pb-6 border-b border-gray-200">
                                {vendorData.bio}
                            </p>

                            {/* Available Between */}
                            <div className="mb-6 pb-6 border-b border-gray-200">
                                <div className="flex items-center gap-2 mb-3">
                                    <Clock className="w-4 h-4 text-gray-600" />
                                    <span className="text-sm font-medium text-gray-900">Available between:</span>
                                </div>
                                <p className="text-sm text-gray-700 ml-6">
                                    {vendorData.availableFrom} - {vendorData.availableTo}
                                </p>
                            </div>

                            {/* Total Package Offered */}
                            <div className="mb-4 pb-4 border-b border-gray-200">
                                <div className="flex items-center gap-2 mb-1">
                                    <Package className="w-4 h-4 text-gray-600" />
                                    <span className="text-xs text-gray-600">Total package offered</span>
                                </div>
                                <p className="text-2xl font-bold text-gray-900 ml-6">{vendorData.totalPackages}</p>
                            </div>

                            {/* Total Order Completed */}
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <CheckCircle className="w-4 h-4 text-gray-600" />
                                    <span className="text-xs text-gray-600">Total order completed</span>
                                </div>
                                <p className="text-2xl font-bold text-gray-900 ml-6">{vendorData.totalOrders}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Packages/Reviews */}
                    <div className="lg:col-span-9">
                        {/* Tabs */}
                        <div className="bg-white rounded-t-lg shadow-sm">
                            <div className="flex border-b border-gray-200">
                                <button
                                    onClick={() => setActiveTab('packages')}
                                    className={`px-6 py-4 text-sm font-medium transition-colors relative ${activeTab === 'packages'
                                        ? 'text-blue-600 border-b-2 border-blue-600'
                                        : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                >
                                    Packages
                                </button>
                                <button
                                    onClick={() => setActiveTab('reviews')}
                                    className={`px-6 py-4 text-sm font-medium transition-colors relative ${activeTab === 'reviews'
                                        ? 'text-blue-600 border-b-2 border-blue-600'
                                        : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                >
                                    Reviews
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="bg-white rounded-b-lg shadow-sm p-6">
                            {activeTab === 'packages' ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {packages.map((pkg) => (
                                        <div
                                            key={pkg.id}
                                            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                                        >
                                            {/* Package Image */}
                                            <div className="relative h-48">
                                                <img
                                                    src={pkg.image}
                                                    alt={pkg.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* Package Info */}
                                            <div className="p-4">
                                                <h3 className="text-sm font-normal text-gray-900 mb-3 line-clamp-2">
                                                    {pkg.title}
                                                </h3>

                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <img
                                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop"
                                                            alt={pkg.vendor}
                                                            className="w-6 h-6 rounded-full"
                                                        />
                                                        <span className="text-xs text-gray-600">{pkg.vendor}</span>
                                                        <div className="flex items-center gap-1">
                                                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                                            <span className="text-xs font-medium text-gray-900">
                                                                {pkg.rating}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <span className="text-base font-semibold text-gray-900">
                                                        ${pkg.price}
                                                    </span>
                                                </div>

                                                <button className="w-full mt-4 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                                                    <span>Order now</span>
                                                    <span>→</span>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {reviews.map((review) => (
                                        <div
                                            key={review.id}
                                            className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
                                        >
                                            <div className="flex items-start justify-between mb-3">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={`https://i.pravatar.cc/40?img=${review.id}`}
                                                        alt={review.customerName}
                                                        className="w-10 h-10 rounded-full"
                                                    />
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-gray-900">
                                                            {review.customerName}
                                                        </h4>
                                                        <p className="text-xs text-gray-500">{review.date}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                    <span className="text-sm font-semibold text-gray-900">
                                                        {review.rating}
                                                    </span>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-600 leading-relaxed">{review.comment}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VendorProfile;