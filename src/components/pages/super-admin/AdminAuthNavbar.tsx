"use client";
import React, { useState } from "react";
import { User, Menu, X } from "lucide-react";
import Link from "next/link";

const AdminAuthNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-950 text-white shadow-lg">
      <div className="mx-auto max-w-full px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-white">ReelShort</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Navigation items can be added here */}
            </div>
          </div>

          {/* Desktop Login */}
          <div className="">
            <div className="ml-4 flex items-center md:ml-6">
              <Link
                href={"/en/super-admin"}
                className="flex items-center space-x-2 rounded-md bg-gray-800 px-3 py-2 text-sm font-medium text-gray-300 transition-colors duration-200 hover:bg-gray-700 hover:text-white"
              >
                <User className="h-4 w-4" />
                <span>Login</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="space-y-1 bg-gray-800 px-2 pt-2 pb-3 sm:px-3">
          {/* Mobile navigation items can be added here */}

          {/* Mobile Login */}
          <Link
            href={"/en/super-admin/login"}
            className="block w-full items-center space-x-2 rounded-md px-3 py-2 text-left text-base font-medium text-gray-300 transition-colors duration-200 hover:bg-gray-700 hover:text-white"
          >
            <User className="h-4 w-4" />
            <span>Login</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AdminAuthNavbar;
