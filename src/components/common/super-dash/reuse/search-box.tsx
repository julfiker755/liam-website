"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useDebounce } from "use-debounce";

interface SearchBoxProps {
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  time?: number;
}

export default function SearchBox({
  onChange,
  placeholder = "Search hare",
  className,
  time = 1000,
}: SearchBoxProps) {
  const [value, setValue] = useState("");
  const [debounced] = useDebounce(value, time);

  useEffect(() => onChange(debounced), [debounced, onChange]);

  return (
    <div
      className={cn(
        "flex w-11/12 items-center lg:max-w-md rounded-lg bg-gray-50",
        className
      )}
    >
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="h-11 border-none bg-transparent px-4 text-base shadow-none focus-visible:ring-0 placeholder:text-gray-500"
      />
      <Button
        size="icon"
        className="h-11 w-11 rounded-none rounded-r-lg bg-[#00A3FF] hover:bg-[#0092E6]"
      >
        <Search className="h-5 w-5 text-white" />
      </Button>
    </div>
  );
}
