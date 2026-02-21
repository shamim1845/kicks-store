'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { navLinks } from './index'


interface SidebarProps {
    openMobileMenu: boolean
    setOpenMobileMenu: (value: boolean) => void
}

const Sidebar = ({ openMobileMenu, setOpenMobileMenu }: SidebarProps) => {
    const [expandedMenu, setExpandedMenu] = useState<string | null>(null)

    const close = () => setOpenMobileMenu(false)
    const toggleMenu = (name: string) =>
        setExpandedMenu((prev) => (prev === name ? null : name))

    return (
        <>
            {/* Backdrop */}
            <div
                onClick={close}
                className={`fixed inset-0 z-40 bg-dark/40 backdrop-blur-sm transition-opacity duration-300 ${openMobileMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                aria-hidden="true"
            />

            {/* Sidebar Panel */}
            <aside
                className={`fixed top-0 left-0 z-50 h-full w-[300px] bg-light-gray flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${openMobileMenu ? 'translate-x-0' : '-translate-x-full'
                    }`}
                aria-label="Mobile navigation"
            >
                {/* Header row: Logo + Close */}
                <div className="flex items-center justify-between px-5 py-5 border-b border-[#E8E8E8]">
                    <Link href="/" onClick={close}>
                        <Image
                            src="/logo/logo_dark.svg"
                            alt="Kicks Store"
                            width={100}
                            height={100}
                            className="w-[80px]"
                        />
                    </Link>

                    {/* Close (X) button */}
                    <button
                        onClick={close}
                        aria-label="Close menu"
                        className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#E8E8E8] transition-colors cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto px-5 py-6">
                    <ul className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                {link.children ? (
                                    <>
                                        {/* Expandable item */}
                                        <button
                                            onClick={() => toggleMenu(link.name)}
                                            className="w-full flex items-center justify-between py-3 px-4 rounded-[10px] text-[15px] font-semibold text-dark hover:bg-[#E8E8E8] transition-colors cursor-pointer"
                                        >
                                            <span>{link.name}</span>
                                            <Image
                                                src="/icons/caret_down.svg"
                                                alt=""
                                                width={18}
                                                height={18}
                                                className={`transition-transform duration-200 ${expandedMenu === link.name ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>

                                        {/* Children */}
                                        <ul
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedMenu === link.name
                                                ? 'max-h-[200px] opacity-100'
                                                : 'max-h-0 opacity-0'
                                                }`}
                                        >
                                            {link.children.map((child) => (
                                                <li key={child.name}>
                                                    <Link
                                                        href={child.href}
                                                        onClick={close}
                                                        className="flex items-center gap-2 py-2.5 pl-8 pr-4 rounded-[10px] text-[14px] font-medium text-dark/70 hover:text-blue hover:bg-[#E8E8E8] transition-colors"
                                                    >
                                                        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50 shrink-0" />
                                                        {child.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        onClick={close}
                                        className="flex items-center py-3 px-4 rounded-[10px] text-[15px] font-semibold text-dark hover:bg-[#E8E8E8] hover:text-blue transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Footer — icons row */}
                <div className="px-5 py-5 border-t border-[#E8E8E8] flex items-center gap-5">
                    <Image src="/icons/search.svg" alt="Search" width={22} height={22} className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity" />
                    <Image src="/icons/user.svg" alt="Account" width={22} height={22} className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity" />
                    <div className="w-[28px] h-[28px] bg-yellow rounded-full flex items-center justify-center ml-auto">
                        <span className="text-[13px] font-semibold">0</span>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Sidebar