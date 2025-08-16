import React from "react";
import ContainerWrapper from "./ContainerWrapper";
import { Facebook, Instagram, Linkedin, QrCode, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer-gradient-background text-white mt-auto">
      <ContainerWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-20">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms-service"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Feedback
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Media & Public Relations
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Community</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="sr-only">X (Twitter)</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Download Section */}
          <div className="flex items-start">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold">Download</h3>
              <QrCode className="w-20 h-20 text-gray-200" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-900 py-10 text-center">
          <p className="text-gray-300 md:text-lg lg:text-xl">
            Copyright © 2025 Crazy Maple Studio Inc. All rights reserved.
          </p>
        </div>
      </ContainerWrapper>
    </footer>
  );
};

export default Footer;
