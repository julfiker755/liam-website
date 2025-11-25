"use client";

import { useState } from "react";
import { Menu, X, Bell } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";

export default function VendorNav() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: "home_ven", icon_i: " home_ven_i", href: "/vendor" },
    {
      name: "Bookings",
      icon: "bookings_ven",
      icon_i: "bookings_ven_i",
      href: "/vendor/bookings",
    },
    {
      name: "Packages",
      icon: "packages_ven",
      icon_i: "packages_ven_i",
      href: "/vendor/packages",
    },
    {
      name: "Shifts",
      icon: "stuffs_ven",
      icon_i: "stuffs_ven_i",
      href: "/vendor/stuffs",
    },
    {
      name: "Inventory",
      icon: "inventory_ven",
      icon_i: "inventory_ven_i",
      href: "/vendor/inventory",
    },
  ];

  return (
    <nav className="bg-secondary text-primary-foreground sticky top-0 z-50">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Image
            src="/images/logo.png"
            alt="Nexus Logo"
            width={50}
            height={50}
            className="rounded-md"
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 bg-white rounded-md text-[#535353]  font-medium transition-colors ${
                  item.name === "Home"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-primary-foreground/10"
                }`}
              >
                <div className="flex items-center gap-2">
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 rounded-lg hover:bg-primary-foreground/10 transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Elizabeth" />
                <AvatarFallback>EO</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-semibold">Elizabeth Olson</p>
                <p className="text-xs opacity-75">example@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-primary-foreground/10 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors block w-full ${
                  item.name === "Home"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-primary-foreground/10"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </a>
            ))}
            <div className="px-3 py-2 border-t border-primary-foreground/20 mt-2 pt-3">
              <div className="flex items-center gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Elizabeth" />
                  <AvatarFallback>EO</AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <p className="font-semibold">Elizabeth Olson</p>
                  <p className="text-xs opacity-75">example@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
