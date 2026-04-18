"use client";

import { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import {
  HomeIcon,
  InformationCircleIcon,
  BookOpenIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,UsersIcon,
  UserIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home", icon: <HomeIcon /> },
  { href: "/about", label: "About", icon: <InformationCircleIcon /> },
  { href: "/study", label: "Study", icon: <BookOpenIcon /> },
  { href: "/shop", label: "Shop", icon: <ShoppingBagIcon /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 h-[60px] bg-white shadow-sm">
      
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Newlogo.jpeg"
            alt="Balmae Logo"
            width={90}
            height={10}
            className="object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink {...link} />
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4 md:gap-8">

          {/* SEARCH */}
          <div className="flex items-center bg-white/60 h-8 md:h-9 px-2 md:px-3 rounded-xl shadow-sm w-28 md:w-44">
            
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 min-w-0 bg-transparent outline-none text-xs md:text-sm pl-1"
            />

            <MagnifyingGlassIcon className="flex-shrink-0 w-4 h-4 md:w-6 md:h-6 text-gray-500 ml-1 mr-1" />
          </div>

          {/* CART */}
          <div className="relative">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/60 shadow-sm cursor-pointer">
              <ShoppingCartIcon className="w-5 h-5" />
            </button>

            <span className="absolute -top-1 -right-1 w-4 h-4 text-[9px] bg-primary text-white rounded-full flex items-center justify-center font-bold">
              2
            </span>
          </div>

          {/* LOGIN (desktop only) */}
          <Link
            href="/login"
            className="hidden sm:flex w-20 h-8 items-center justify-center rounded-lg bg-primary text-white text-sm font-semibold shadow-md"
          >
            Login
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden px-6 py-3  bg-white shadow-sm">

          {/* NAV LINKS */}
          {navLinks.map((link) => (
            <div key={link.href}>
              <NavLink {...link} />
            </div>
          ))}

          {/* LOGIN (NavLink jaisa width) */}
          
          <Link
  href="/login"
  className="flex items-center gap-2 rounded-lg text-sm font-medium translate-x-2">

  <UserIcon className="w-5 h-5" />
  <span>Login</span>
</Link> 

        </div>
      )}
    </nav>
  );
}