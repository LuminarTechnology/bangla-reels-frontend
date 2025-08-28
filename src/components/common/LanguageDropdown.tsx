"use client";

import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useState } from "react";
import { DialogTitle } from "../ui/dialog";
import { useLocale } from "@/src/hooks/useLocale";

const LanguageDropdown = ({ currentLang }: { currentLang: string }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { changeLocale } = useLocale();

  const languages = [
    { id: 1, name: "English", code: "en" },
    { id: 2, name: "Español", code: "es" },
    { id: 3, name: "Latin", code: "la" },
    { id: 4, name: "বাংলা (Bengali)", code: "bn" },
  ];

  const handleLanguageChange = (code: string) => {
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length > 0 && languages.some((l) => l.code === segments[0])) {
      segments[0] = code; // replace current lang
    } else {
      segments.unshift(code); // add lang if missing
    }

    const newPath = "/" + segments.join("/");
    router.push(newPath);
    changeLocale(code);
  };

  return (
    <DropdownMenu open={isOpen} defaultOpen={false} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-white hover:bg-transparent hover:text-gray-100">
          <Globe className="h-4 w-4" />
          {languages.find((l) => l.code === currentLang)?.name || "English"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-black/20 backdrop-blur-lg">
        <DialogTitle></DialogTitle>
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.id}
            className="text-white hover:bg-transparent hover:text-gray-100"
            onClick={() => handleLanguageChange(language.code)}
          >
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageDropdown;
