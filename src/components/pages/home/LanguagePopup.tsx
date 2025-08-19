import { Globe } from "lucide-react";
import { Button } from "../../ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../../ui/hover-card";
import Link from "next/link";

const LanguagePopup = () => {
  const languages = [
    { id: 1, name: "English", code: "en" },
    { id: 2, name: "Português", code: "pt" },
    { id: 3, name: "Español", code: "es" },
    { id: 4, name: "Deutsch", code: "de" },
    { id: 5, name: "Français", code: "fr" },
    { id: 6, name: "日本語 (Japanese)", code: "ja" },
    { id: 7, name: "한국어 (Korean)", code: "ko" },
    { id: 8, name: "ภาษาไทย (Thai)", code: "th" },
    { id: 9, name: "Русскⷣ (Russian)", code: "ru" },
    { id: 10, name: "Bahasa Indonesia", code: "id" },
    { id: 11, name: "繁體中文 (Traditional Chinese)", code: "zh-TW" },
    { id: 12, name: "العربية (Arabic)", code: "ar" },
  ];

  return (
    <HoverCard openDelay={100} closeDelay={300}>
      <HoverCardTrigger asChild>
        <Button
          variant="ghost"
          className="gap-1 text-white hover:bg-transparent hover:text-gray-100"
        >
          <Globe className="size-4" />
          English
        </Button>
      </HoverCardTrigger>
      <HoverCardContent
        className="relative w-70 rounded-2xl border-none bg-[#16151A] p-0 shadow-xl before:absolute before:-top-2 before:left-1/2 before:h-0 before:w-0 before:-translate-x-1/2 before:border-r-8 before:border-b-8 before:border-l-8 before:border-r-transparent before:border-b-[#16151A] before:border-l-transparent before:content-['']"
        align="center"
        sideOffset={8}
      >
        <div className="py-2">
          {languages.map((language) => (
            <Link
              key={language.id}
              href=""
              className="block px-4 py-3 text-sm text-white transition-colors hover:bg-gray-800"
            >
              {language.name}
            </Link>
          ))}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default LanguagePopup;
