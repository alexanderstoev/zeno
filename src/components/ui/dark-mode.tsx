"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export const DarkMode = () => {
  const { setTheme } = useTheme();
  return (
    <div>
      <Button variant="ghost" onClick={() => setTheme("dark")}>
        Dark
      </Button>
      <Button variant="ghost" onClick={() => setTheme("light")}>
        Light
      </Button>
    </div>
  );
};
