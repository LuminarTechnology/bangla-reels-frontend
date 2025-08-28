"use client";

import { Globe } from "lucide-react";
import { Button } from "../../ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../../ui/hover-card";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "@/src/hooks/useLocale";

const LanguagePopup = ({ currentLang }: { currentLang: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { changeLocale } = useLocale();

  const languages = [
    { id: 1, name: "English", code: "en" },
    { id: 2, name: "Español", code: "es" },
    { id: 3, name: "Latin", code: "la" },
    { id: 4, name: "বাংলা (Bengali)", code: "bn" },
  ];

  const handleLanguageChange = (code: string) => {
    // replace the current lang in the path with the selected lang
    const segments = pathname.split("/").filter(Boolean); // ["en", "dashboard", ...]
    if (segments.length > 0 && languages.some((l) => l.code === segments[0])) {
      segments[0] = code; // replace existing lang
    } else {
      segments.unshift(code); // no lang in path yet
    }
    const newPath = "/" + segments.join("/");
    router.push(newPath);
    changeLocale(code);
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
        className="relative w-70 rounded-2xl border-none bg-[#16151A] p-0 shadow-xl before:absolute before:-top-2 before:left-1/2 before:h-0 before:w-0 before:-translate-x-1/2 before:border-r-8 before:border-b-8 before:border-l-8 before:border-r-transparent before:border-b-[#16151A] before:border-l-transparent before:content-['']"
        align="center"
        sideOffset={8}
      >
        <div className="py-2">
          {languages.map((language) => (
            <button
              key={language.id}
              onClick={() => handleLanguageChange(language.code)}
              className="w-full px-4 py-3 text-left text-sm text-white transition-colors hover:bg-gray-800"
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
