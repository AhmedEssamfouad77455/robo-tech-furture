import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Achievements", path: "/achievement" },
        { name: "Gallery", path: "/gallery" },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCategoryOpen, setCategoryOpen] = useState(false);

    // القائمة المنسدلة
    const category = [
        { name: "3-6 Years Projects", path: "/Curriculum#three-years" },
        { name: "6-9 Years Projects", path: "/Curriculum#six-years" },
        { name: "9-12 Years Projects", path: "/Curriculum#nine-years" },
    ];

    const dropdownRef = useRef(null);

    const handleSelect = (item) => {
        setCategoryOpen(false);
        navigate(item.path);
    };

    // إغلاق القائمة لو ضغطت برّه
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setCategoryOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 bg-indigo-500 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled
                    ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
                    : "py-4 md:py-6"
                }`}
        >
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 text-white font-bold">
                LOGO
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
                {navLinks.map((link, i) => (
                    <a
                        key={i}
                        href={link.path}
                        className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"
                            }`}
                    >
                        {link.name}
                        <div
                            className={`${isScrolled ? "bg-gray-700" : "bg-white"
                                } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
                        />
                    </a>
                ))}

                {/* Dropdown Curriculum */}
                <div ref={dropdownRef} className="relative">
                    <button
                        type="button"
                        onClick={() => setCategoryOpen(!isCategoryOpen)}
                        className={`group px-4 py-2 rounded ${isScrolled ? "text-gray-700" : "text-white "
                            }`}
                    >
                      <div className="flex items-center gap-1">

                        Curriculum
                        <span>

                        <svg
                            className={`w-4 h-4 transform transition-transform duration-300 ${isCategoryOpen ? "rotate-180" : "rotate-0"
                              }`}
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                        </span>
                                </div>
                        <div
                            className={`${isScrolled ? "bg-gray-700" : "bg-white"
                                } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
                        />
                    </button>

                    {isCategoryOpen && (
                        <ul className="absolute w-52 bg-white border border-gray-300 rounded shadow-md mt-2 py-2">
                            {category.map((item) => (
                                <li
                                    key={item.name}
                                    className="px-4 py-2 hover:bg-indigo-500 hover:text-white cursor-pointer"
                                    onClick={() => handleSelect(item)}
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <a
                    href="/contact-us"
                    className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"
                        }`}
                >
                    Contact Us
                    <div
                        className={`${isScrolled ? "bg-gray-700" : "bg-white"
                            } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
                    />
                </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg
                        className={`h-6 w-6 ${isScrolled ? "text-gray-700" : "text-white"}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        {isMenuOpen ? (
                            <>
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </>
                        ) : (
                            <>
                                <line x1="4" y1="6" x2="20" y2="6" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="18" x2="20" y2="18" />
                            </>
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 w-full h-screen bg-white text-lg flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                        {link.name}
                    </a>
                ))}

                {/* Dropdown in Mobile */}
                <div className="relative w-52">
                    <button
                        type="button"
                        onClick={() => setCategoryOpen(!isCategoryOpen)}
                        className="w-full text-left px-4 py-2 border rounded bg-white text-gray-800 border-gray-300 shadow-sm hover:bg-gray-50 flex items-center justify-between"
                    >

                        Curriculum
                        <span>

                            <svg
                                className={`w-4 h-4 transform transition-transform duration-300 ${isCategoryOpen ? "rotate-180" : "rotate-0"
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </span>
                    </button>

                    {isCategoryOpen && (
                        <ul className="absolute w-full bg-white border border-gray-300 rounded shadow-md mt-1 py-2">
                            {category.map((item) => (
                                <li
                                    key={item.name}
                                    className="px-4 py-2 hover:bg-indigo-500 hover:text-white cursor-pointer"
                                    onClick={() => handleSelect(item)}
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
