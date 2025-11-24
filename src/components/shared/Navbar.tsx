"use client"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "../ui"


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState("Home")
    const pathname = usePathname()

    const navLinks = [
        { href: "/", text: "Home" },
        { href: "/services", text: "Services" },
        { href: "/how-it-works", text: "How it works" },
        { href: "/about-us", text: "About us" },
        { href: "/faq", text: "FAQ" },
    ]

    useEffect(() => {
        // Set active link based on current pathname
        const currentLink = navLinks.find(link => link.href === pathname)
        if (currentLink) {
            setActiveLink(currentLink.text)
        }
    }, [pathname])

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [isMenuOpen])

    const handleCreateAccount = () => {
        console.log('click')
    }

    const handleLinkClick = (linkText: string) => {
        setActiveLink(linkText)
        setIsMenuOpen(false)
    }

    const isLinkActive = (linkText: string) => {
        return activeLink === linkText
    }

    return (
        <>
            <header className="sticky top-0 z-50 w-full bg-secondary  backdrop-blur-md border-gray-200 ">
                <div className="container px-4">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo Section */}
                        <div className="">
                            <Image
                                src="/images/logo.png"
                                alt="Nexus Logo"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.text}
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors duration-300 ${isLinkActive(link.text)
                                        ? "text-primary  font-semibold"
                                        : "text-gray-600  hover:text-primary "
                                        }`}
                                    onClick={() => handleLinkClick(link.text)}
                                >
                                    {link.text}
                                </a>
                            ))}
                        </nav>

                        {/* Desktop Actions */}
                        <div className="hidden md:flex items-center space-x-3">
                            <Button onClick={() => handleCreateAccount()}>Create an account</Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="py-2 text-gray-600  hover:bg-gray-100  rounded-md"
                                aria-label="Toggle menu"
                            >
                                <Menu
                                    className={`h-6 w-6 transition-transform duration-300 ${isMenuOpen ? "rotate-90 scale-0" : "rotate-0 scale-100"
                                        }`}
                                />
                                <X
                                    className={`h-6 w-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${isMenuOpen ? "rotate-0 scale-100" : "-rotate-90 scale-0"
                                        }`}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity md:hidden ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setIsMenuOpen(false)}
                aria-hidden="true"
            ></div>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-4/5 max-w-sm z-50 bg-white  transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-200 ">
                        <Image
                            src="/images/logo.png"
                            alt="Nexus Logo"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="p-2 text-gray-500  rounded-md hover:bg-gray-100 "
                            aria-label="Close menu"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Mobile Navigation Links */}
                    <nav className="p-4">
                        <div className="flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.text}
                                    href={link.href}
                                    className={`px-3 py-2 text-base font-medium rounded-md transition-colors duration-300 ${isLinkActive(link.text)
                                        ? "text-primary  bg-secondary  font-semibold"
                                        : "text-gray-700  hover:bg-gray-100 "
                                        }`}
                                    onClick={() => handleLinkClick(link.text)}
                                >
                                    {link.text}
                                </a>
                            ))}
                        </div>
                    </nav>

                    {/* Mobile Footer */}
                    <div className="p-4 border-t border-gray-200  mt-auto">
                        <Button onClick={() => handleCreateAccount()}>Create an account</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar