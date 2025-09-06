"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { cn } from "@/src/lib/utils";

type Rule = {
  id: string | number;
  content: React.ReactNode; // allows plain text or JSX (bold, red text etc.)
};

type FormatItem = {
  label: string;
  value: string | React.ReactNode;
};

interface RulesComponentProps {
  showRules: boolean;
  rules: Rule[];
  formatItems: FormatItem[];
  theme?: "dashboard" | "contest";
}

export function RulesComponent({ showRules, rules, formatItems, theme }: RulesComponentProps) {
  return (
    <div className="mx-auto w-full">
      {showRules && (
        <div className="animate-in fade-in-0 slide-in-from-top-4 duration-500">
          <div className="grid gap-4 md:grid-cols-2">
            {/* Rules Section */}
            <Card
              className={`border bg-transparent p-0 ${theme === "contest" ? "border-[#595756] text-[#FFFAFA]" : ""}`}
            >
              <CardContent className="p-4">
                <h2 className="mb-4 text-xl font-bold">Rules</h2>
                <div className="space-y-1">
                  {rules.map((rule, idx) => (
                    <div key={rule.id}>
                      <div className="flex gap-3">
                        <span
                          className={`${theme === "contest" ? "text-[#FFFAFA]" : "text-primary"} font-bold`}
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <div className="text-sm leading-relaxed">{rule.content}</div>
                      </div>
                      {idx !== rules.length - 1 && (
                        <hr className={`m-0 ${theme === "contest" ? "border-[#0B0000]" : ""}`} />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Format Section */}
            <Card
              className={`border bg-transparent ${theme === "contest" ? "border-[#595756] text-[#FFFAFA]" : ""}`}
            >
              <CardContent className="p-6">
                <h2 className="mb-4 text-xl font-bold">Format</h2>
                <div className="space-y-3">
                  {formatItems.map((item, idx) => (
                    <div
                      key={idx}
                      className={cn(
                        "flex items-center justify-between py-2",
                        idx !== formatItems.length - 1 && [
                          "border-border/50 border-b",
                          theme === "contest" && "border-[#0B0000]",
                        ]
                      )}
                    >
                      <span className="text-sm font-medium">{item.label}</span>
                      <span className="text-right text-sm font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
