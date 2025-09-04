"use client";

import { Globe } from "lucide-react";
import { Button } from "../../ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../../ui/hover-card";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "@/src/app/LocaleProvider";

const LanguagePopup = ({ currentLang }: { currentLang: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { changeLang } = useLocale();

  const languages = [
    { id: 1, name: "English", code: "en" },
    { id: 2, name: "Español", code: "es" },
    { id: 3, name: "Latin", code: "la" },
    { id: 4, name: "বাংলা (Bengali)", code: "bn" },
  ];

  const handleLanguageChange = (code: string) => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0 && languages.some((l) => l.code === segments[0])) {
      segments[0] = code;
    } else {
      segments.unshift(code);
    }
    const newPath = "/" + segments.join("/");
    router.push(newPath);
    changeLang(code);
  };

  return (
    <HoverCard openDelay={100} closeDelay={300}>
      <HoverCardTrigger asChild>
        <Button
          variant="ghost"
          className="gap-1 text-white hover:bg-transparent hover:text-gray-100"
        >
          <Globe className="size-4" />
          {languages.find((l) => l.code === currentLang)?.name || "English"}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent
        className="relative overflow-hidden w-70 rounded-2xl border-none bg-[#0F0828] p-0 shadow-lg shadow-black before:absolute before:-top-2 before:left-1/2 before:h-0 before:w-0 before:-translate-x-1/2 before:border-r-8 before:border-b-8 before:border-l-8 before:border-r-transparent before:border-b-[#16151A] before:border-l-transparent before:content-['']"
        align="center"
        sideOffset={8}
      >
        <div>
          {languages.map((language) => (
            <button
              key={language.id}
              onClick={() => handleLanguageChange(language.code)}
              className="w-full cursor-pointer px-4 py-3 text-left text-sm text-white transition-colors hover:bg-[#080414]"
            >
              {language.name}
            </button>
          ))}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default LanguagePopup;
