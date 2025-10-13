import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

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
    { name: "3-6 Years Projects", path: "/curriculum#three-years" },
    { name: "6-9 Years Projects", path: "/curriculum#six-years" },
    { name: "9-12 Years Projects", path: "/curriculum#nine-years" },
  ];

  const dropdownRef = useRef(null);

  const handleSelect = (item) => {
    setCategoryOpen(false);
    setIsMenuOpen(false); // علشان يقفل المينيو في الموبايل
    navigate(item.path);
  };

  // إغلاق القائمة لو ضغطت برّه
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setCategoryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
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
      className={`fixed top-0 left-0 bg-white text-gray-700 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-[9999] ${
        isScrolled
          ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
          : "py-4 md:py-6"
      }`}
    >
      {/* Logo */}
      <a
        href="/"
      
      >
      <img src={assets.logo} className="w-40 h-10" alt="" />
      </a>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            className={`group flex flex-col gap-0.5 ${
              isScrolled ? "text-gray-700" : "text-black"
            }`}
          >
            {link.name}
            <div
              className={ 'bg-[#CB6CE6] h-0.5 w-0 group-hover:w-full transition-all duration-300'}
            />
          </a>
        ))}

        {/* Dropdown Curriculum */}
     <div className="relative group inline-block">
      {/* الزر */}
      <button
        type="button"
        className="flex items-center gap-1 px-4 py-2 rounded text-gray-700 group-hover:text-[#CB6CE6]"
      >
        Curriculum
        <svg
          className="w-4 h-4 transform transition-transform duration-300 group-hover:rotate-180"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
        

      {/* القائمة */}
      <ul className="absolute  top-5 hidden group-hover:block w-52 bg-white border border-gray-300 rounded shadow-md mt-2 py-2 z-10 transition-all duration-300 ease-out">
        {category.map((item) => (
          <li
            key={item.name}
            className="px-4 py-2 hover:bg-[#CB6CE6] hover:text-white cursor-pointer transition-colors duration-200"
          >
            <a href={item.path}>

            {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
      </div>
<a href="/contact-us" className="  hidden md:block bg-[#CB6CE6] text-white font-bold px-6 py-2 rounded-lg">   Contact Us </a>
      {/* Mobile Menu Button */}
<div className="md:hidden z-[10000]">
  <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
    <svg
      className={`h-6 w-6 ${
        isScrolled ? "text-gray-700" : "text-black"
      }`}
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
        className={`fixed  top-0 left-0 w-full min-h-screen  bg-white text-lg flex flex-col md:hidden items-center justify-start gap-3  text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-700 t"
          >
            {link.name}
          </a>
        ))}

        {/* Dropdown in Mobile */}
      <div className="relative group inline-block">
      {/* الزر */}
      <button
        type="button"
        className="flex items-center gap-1 px-4 py-2 rounded text-gray-700 group-hover:text-[#CB6CE6]"
      >
        Curriculum
        <svg
          className="w-4 h-4 transform transition-transform duration-300 group-hover:rotate-180"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
        

      {/* القائمة */}
      <ul className="absolute  hidden group-hover:block w-52 bg-white border border-gray-300 rounded shadow-md mt-2 py-2 z-10 transition-all duration-300 ease-out">
        {category.map((item) => (
          <li
            key={item.name}
            className="px-4 py-2 hover:bg-[#CB6CE6] hover:text-white cursor-pointer transition-colors duration-200"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
    <a href="/contact-us">Contact-us</a>
      </div>
    </nav>
  );
};

export default Navbar;
