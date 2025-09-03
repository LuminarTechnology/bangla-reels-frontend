"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";

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
}

export function RulesComponent({ 
  showRules,
  rules, 
  formatItems 
}: RulesComponentProps) {

  return (
    <div className="mx-auto w-full max-w-4xl">
      {showRules && (
        <div className="animate-in fade-in-0 slide-in-from-top-4 duration-500">
          <div className="grid gap-4 md:grid-cols-2">
            {/* Rules Section */}
            <Card className="border-2 p-0">
              <CardContent className="p-4">
                <h2 className="mb-4 text-xl font-bold">Rules</h2>
                <div className="space-y-1">
                  {rules.map((rule, idx) => (
                    <div key={rule.id}>
                      <div className="flex gap-3">
                        <span className="text-primary font-bold">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <div className="text-sm leading-relaxed">{rule.content}</div>
                      </div>
                      {idx !== rules.length - 1 && <hr className="m-0" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Format Section */}
            <Card className="border-2">
              <CardContent className="p-6">
                <h2 className="mb-4 text-xl font-bold">Format</h2>
                <div className="space-y-3">
                  {formatItems.map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between py-2 ${
                        idx !== formatItems.length - 1 ? "border-b border-border/50" : ""
                      }`}
                    >
                      <span className="text-sm font-medium">{item.label}</span>
                      <span className="text-sm font-semibold text-right">{item.value}</span>
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
