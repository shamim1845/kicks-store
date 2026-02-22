import Image from "next/image";
import Link from "next/link";

const categoryLinks = [
    { name: "Runners", href: "/runners" },
    { name: "Sneakers", href: "/sneakers" },
    { name: "Basketball", href: "/basketball" },
    { name: "Outdoor", href: "/outdoor" },
    { name: "Golf", href: "/golf" },
    { name: "Hiking", href: "/hiking" },
];

const companyLinks = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blogs", href: "/blogs" },
];

const socialLinks = [
    { name: "Facebook", href: "https://facebook.com", icon: "/social/facebook.svg" },
    { name: "Instagram", href: "https://instagram.com", icon: "/social/instagram.svg" },
    { name: "Twitter", href: "https://twitter.com", icon: "/social/twitter.svg" },
    { name: "TikTok", href: "https://tiktok.com", icon: "/social/tiktok.svg" },
];

const Footer = () => {
    return (
        <footer className="section_container">
            <div className="w-full overflow-hidden">

                {/* ── Newsletter Banner ── */}
                <div className="bg-blue rounded-tl-[24px] rounded-tr-[24px] lg:rounded-tl-[48px] lg:rounded-tr-[48px] p-4 lg:p-12 md:pb-[70px] lg:pb-[80px] flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                    {/* Left Copy */}
                    <div className="flex-1">
                        <h2 className="text-white font-semibold text-[32px] lg:text-[48px] lg:uppercase leading-[1.2] mb-2">
                            Join our KicksPlus<br />Club &amp; get 15% off
                        </h2>
                        <p className="text-gray text-base font-open-sans font-semibold mt-1 mb-6">
                            Sign up for free! Join the community.
                        </p>
                        {/* Email Form */}
                        <form
                            className="flex items-center gap-1 w-full max-w-sm overflow-hidden"
                        >
                            <input
                                type="email"
                                placeholder="Email address"
                                className="flex-1 h-[40px] lg:h-[48px] bg-transparent text-white placeholder-gray border border-white rounded-[8px] text-sm px-[16px] py-[10px] outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-dark text-white lg:h-[48px] h-[40px] text-[14px] font-medium uppercase tracking-wider px-[16px] py-[8px] rounded-[8px] hover:bg-dark/80 transition-colors duration-200 whitespace-nowrap cursor-pointer"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Right Logo */}
                    <div className="md:flex-1 flex items-center lg:justify-center pb-[40px]">
                        <div className="relative">
                            <Image
                                src="/logo/logo_light.svg"
                                alt="Kicks"
                                width={220}
                                height={80}
                                className="w-[192px] lg:w-[351px]"
                            />
                            {/* Orange plus icon — top-right of logo */}
                            <Image
                                src="/icons/add_circle.svg"
                                alt="Plus"
                                width={32}
                                height={32}
                                className="absolute -top-3 -right-3 lg:-top-6 lg:-right-6 w-[18px] h-[18px] lg:w-[32px] lg:h-[32px]"
                            />
                        </div>
                    </div>
                </div>

                {/* ── Dark Bottom Section ── */}
                <div className="bg-dark rounded-[24px] lg:rounded-[48px] text-white relative overflow-hidden -mt-[30px] lg:-mt-[40px]">

                    {/* Nav Columns */}
                    <div className="px-4 py-6 lg:px-14 lg:py-12 flex flex-col lg:flex-row gap-10 lg:gap-0 lg:justify-between relative z-10">

                        {/* About Us */}
                        <div className="lg:max-w-[346px]">
                            <h3 className="text-yellow font-semibold text-[24px] lg:text-[36px] mb-1">About us</h3>
                            <p className="text-gray font-open-sans font-semibold text-base lg:text-[20px] leading-relaxed">
                                We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.
                            </p>
                        </div>

                        {/* Categories */}
                        <div>
                            <h3 className="text-yellow font-semibold text-[20px] lg:text-[24px] mb-1">Categories</h3>
                            <ul className="flex flex-col gap-2">
                                {categoryLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray font-open-sans font-semibold text-base lg:text-[20px] leading-relaxed hover:text-white transition-colors duration-200"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="text-yellow font-semibold text-[20px] lg:text-[24px] mb-1">Company</h3>
                            <ul className="flex flex-col gap-2">
                                {companyLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray font-open-sans font-semibold text-base lg:text-[20px] leading-relaxed hover:text-white transition-colors duration-200"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Follow Us */}
                        <div>
                            <h3 className="text-yellow font-semibold text-[20px] lg:text-[24px] mb-1">Follow us</h3>
                            <div className="flex items-center gap-4">
                                {socialLinks.map((social) => (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className="hover:opacity-70 transition-opacity duration-200"
                                    >
                                        <Image
                                            src={social.icon}
                                            alt={social.name}
                                            width={28}
                                            height={28}
                                            className="w-[24px] h-[24px] lg:w-[28px] lg:h-[28px]"
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── Watermark KICKS ── */}
                    <div className="relative mt-[10px] -mb-[20px] lg:-mb-[100px]">
                        <Image
                            src="/logo/logo_light.svg"
                            alt="Kicks"
                            width={220}
                            height={80}
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </div>

            {/* ── Copyright Bar ── */}
            <div className="text-center py-4 text-dark text-base font-normal">
                © All rights reserved
            </div>
        </footer>
    );
};

export default Footer;