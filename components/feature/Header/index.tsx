"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";

// Navigation Links
const navLinks = [
    { name: "New Drops 🔥", href: "/new-drops" },
    {
        name: "Men",
        href: "/men",
        children: [
            { name: "All", href: "/men" },
            { name: "Shoes", href: "/men/shoes" },
            { name: "Clothing", href: "/men/clothing" },
        ],
    },
    {
        name: "Women",
        href: "/women",
        children: [
            { name: "All", href: "/women" },
            { name: "Shoes", href: "/women/shoes" },
            { name: "Clothing", href: "/women/clothing" },
        ],
    },
];

const Header = () => {
    const [openMenu, setOpenMenu] = useState("");
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    return (
        <div className="page_container">
            {/* Mobile Sidebar */}
            {/* <Sidebar openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} /> */}
            <div className="header_wrapper">
                {/* Navigation */}
                <div className="flex items-center justify-between">
                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex items-center gap-[40px]">
                        {navLinks.map((link) => (
                            <li
                                className="text-base font-semibold relative flex items-center gap-[10px]"
                                key={link.name}
                                onMouseEnter={() => link?.children && setOpenMenu(link.name)}
                                onMouseLeave={() => setOpenMenu("")}
                            >
                                <Link href={link.href}>{link.name}</Link>
                                {/* Dropdown Arrow */}
                                {link?.children && (
                                    <Image
                                        src="/icons/caret_down.svg"
                                        alt="Arrow"
                                        width={20}
                                        height={20}
                                        className="cursor-pointer"
                                    />
                                )}
                                {/* Dropdown Menu */}
                                {openMenu === link?.name && (
                                    <ul className="absolute top-full left-0 bg-white shadow-lg p-4 rounded-lg">
                                        {link?.children?.map((child) => (
                                            <li key={child.name}>
                                                <Link
                                                    href={child.href}
                                                    className="text-base font-semibold"
                                                >
                                                    {child.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu */}
                    <div className="lg:hidden">
                        <Image src="/icons/bars.svg" alt="Menu" width={20} height={20}
                            className="cursor-pointer"
                            onClick={() => setOpenMobileMenu(!openMobileMenu)}
                        />
                    </div>
                </div>

                {/* Brand Logo */}
                <div>
                    <Link href="/">
                        <Image
                            src="/logo/logo_dark.svg"
                            alt="Logo"
                            width={128}
                            height={128}
                            className="w-[80px] lg:w-[128px]"
                        />
                    </Link>
                </div>

                {/* Header Icons */}
                <div className="flex items-center gap-[9px] lg:gap-[40px]">
                    <Image
                        src="/icons/search.svg"
                        alt="Search"
                        width={28}
                        height={28}
                        className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] hidden lg:block"
                    />

                    <Image
                        src="/icons/user.svg"
                        alt="User"
                        width={28}
                        height={28}
                        className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]"
                    />

                    {/* Cart Count */}
                    <div className="w-[20px] h-[20px] lg:w-[32px] lg:h-[32px] bg-yellow rounded-full flex items-center justify-center">
                        <span className="text-[14px] font-open-sans font-semibold">0</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
