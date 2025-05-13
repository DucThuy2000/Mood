"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface MoodTabsProps {
  defaultTab?: string;
  tabs: {
    id: string;
    label: string;
    icon?: string;
    content: React.ReactNode;
  }[];
  className?: string;
}

export const MoodTabs = ({ defaultTab, tabs, className }: MoodTabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0].id);

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className={cn("w-full max-w-8xl mx-auto", className)}
    >
      <div className="flex justify-center mb-8">
        <TabsList className="grid grid-cols-2 w-full max-w-md">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {/* Tab content with animations */}
      <AnimatePresence mode="wait">
        {tabs.map((tab) => (
          <TabsContent
            key={tab.id}
            value={tab.id}
            className="outline-none"
            asChild
          >
            {activeTab === tab.id && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {tab.content}
              </motion.div>
            )}
          </TabsContent>
        ))}
      </AnimatePresence>
    </Tabs>
  );
};
