"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import { cn } from "@/src/lib/utils";
import { Button } from "../../ui/button";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Link from "next/link";
import { useLocale } from "@/src/app/LocaleProvider";
import { TLang } from "@/src/types/globals";
import { useTranslations } from "next-intl";
import { banners } from "@/src/constants/homeData";
import { useAuth, useUser } from "@clerk/nextjs";
import moment from "moment";
import { signUpToBackend } from "@/src/services/auth/authService";

const Banner: React.FC = () => {
  const { lang } = useLocale() as { lang: TLang };
  const t = useTranslations("HomePage");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const mainSwiperRef = useRef<{ swiper: SwiperType } | null>(null);
  const { user } = useUser();
  const { getToken } = useAuth();

  useEffect(() => {
    if (!user) return;

    const createdAt = moment(user.createdAt);
    const now = moment();

    // Check if user created within last 1 minute
    const diffInMinutes = now.diff(createdAt, "minutes");

    const handleAfterSignUp = async () => {
      const token = await getToken({ template: "backend" });
      const payload = {
        email: user.emailAddresses[0].emailAddress!,
        name: user.firstName + (user.lastName || " ")!,
      };

      signUpToBackend(payload, token!);
    };

    if (diffInMinutes < 1) {
      handleAfterSignUp();
    }
  }, [user, getToken]);

  return (
    <div className="relative h-[350px] overflow-hidden bg-gray-900 sm:h-[420px] md:h-[500px] lg:h-[550px]">
      <Swiper
        ref={mainSwiperRef}
        modules={[Navigation, Autoplay, Thumbs]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        className="h-full w-full"
      >
        {banners.map((movie, index) => (
          <SwiperSlide key={movie.id}>
            {/* Background */}
            <Link href={`/${lang}/episode/john-wick-4`}>
              <div className="relative h-full w-full">
                <Image
                  src={movie.image}
                  alt={movie.title[lang]}
                  fill
                  priority={index === 0}
                  className="rounded-none object-cover lg:rounded-lg"
                />
                <div className="absolute inset-0 bg-black/30" />

                {/* Content */}
                <div className="relative z-10 flex h-full items-center px-4 sm:px-8 md:-bottom-10 md:px-12 lg:px-16">
                  <div className="animate-fadeIn max-w-xs sm:max-w-md md:max-w-lg">
                    <h1 className="mb-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
                      {movie.title[lang]}
                    </h1>
                    {movie.subtitle && (
                      <h2 className="mb-6 text-lg font-light text-white sm:mb-8 sm:text-xl md:text-2xl lg:text-3xl">
                        {movie.subtitle[lang]}
                      </h2>
                    )}

                    <div className="flex items-center space-x-3 sm:space-x-5">
                      <Button
                        size="circular"
                        variant="danger"
                        className="flex items-center space-x-3"
                      >
                        <Play size={18} className="transition-transform group-hover:scale-110" />
                      </Button>
                      <div className="text-2xl text-white">{t("bannerBtn")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation & Thumbnails */}
      <div className="absolute bottom-4 z-20 flex w-full items-center justify-center space-x-2 px-2 sm:bottom-10 sm:justify-end sm:space-x-3 sm:px-4 lg:right-0 lg:w-1/2">
        {/* Previous Button */}
        <Button
          variant="navigation"
          size="circular-sm"
          onClick={() => mainSwiperRef.current?.swiper?.slidePrev()}
          className="bg-[#ffffff6d] transition-colors hover:bg-white/70 hover:text-black"
        >
          <ChevronLeft size={18} />
        </Button>

        {/* Thumbnails Swiper */}
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Thumbs]}
          spaceBetween={8}
          slidesPerView="auto"
          freeMode={true}
          watchSlidesProgress={true}
          className="max-w-[500px] sm:max-w-[300px] md:max-w-[400px]"
        >
          {banners.map((movie, index) => (
            <SwiperSlide key={movie.id} className="!w-auto">
              <div
                className={cn(
                  "group relative flex-shrink-0 cursor-pointer rounded-lg transition-transform duration-300",
                  currentSlide === index
                    ? "border-primary-rose border-2"
                    : "hover:border-primary-rose-hover border-2 border-transparent"
                )}
                onClick={() => mainSwiperRef.current?.swiper?.slideTo(index)}
              >
                <div className="relative h-18 w-14 overflow-hidden rounded-lg sm:h-20 sm:w-16 md:h-28 md:w-20">
                  <Image
                    src={movie.image}
                    alt={movie.title[lang]}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="absolute right-0 bottom-1 left-0 px-1">
                  <p className="truncate text-center text-[10px] font-medium text-white sm:text-xs">
                    {movie.title[lang]}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Next Button */}
        <Button
          variant="navigation"
          size="circular-sm"
          onClick={() => mainSwiperRef.current?.swiper?.slideNext()}
          className="bg-[#ffffff6d] transition-colors hover:bg-white/70 hover:text-black"
        >
          <ChevronRight size={18} />
        </Button>
      </div>
    </div>
  );
};

export default Banner;
