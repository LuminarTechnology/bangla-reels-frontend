"use client";

import React from "react";
import ContainerWrapper from "./ContainerWrapper";
import { Facebook, Instagram, Linkedin, QrCode, Youtube } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="footer-gradient-background mt-auto text-white">
      <ContainerWrapper>
        <div className="grid grid-cols-1 gap-8 py-20 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold">{t("about")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms-service"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  {t("terms-service")}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  {t("contact-us")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold">{t("support")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 transition-colors hover:text-white">
                  {t("feedback")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 transition-colors hover:text-white">
                  {t("media-relation")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold">{t("community")}</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 transition-colors hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-300 transition-colors hover:text-white">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="sr-only">X (Twitter)</span>
              </Link>
              <Link href="#" className="text-gray-300 transition-colors hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 transition-colors hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 transition-colors hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Download Section */}
          <div className="flex items-start">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold"> {t("download")}</h3>
              <QrCode className="h-20 w-20 text-gray-200" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-900 py-10 text-center">
          <p className="text-gray-300">{t("copyright")}</p>
        </div>
      </ContainerWrapper>
    </footer>
  );
};

export default Footer;
