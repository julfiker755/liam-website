"use client";
import SearchBox from "@/components/common/super-dash/reuse/search-box";
import { Button, ButtonGroup } from "@/components/ui";
import { useState } from "react";

const processItem = [
  { label: "New", color: "bg-[#01AEF0]" },
  { label: "Pending", color: "bg-[#8A38F5]" },
  { label: "Completed", color: "bg-[#2D9D1E]" },
];

export default function Bookings() {
  const [activeButton, setActiveButton] = useState<string>("New");
  return (
    <div className="container">
      <div className="flex items-center justify-between mt-6">
        <SearchBox
          className="rounded-md"
          onChange={(v) => console.log(v)}
          leftBtn={true}
          rightBtn={false}
        />
        <ButtonGroup>
          {processItem.map((btn) => (
            <Button
              key={btn.label}
              className={`h-10 bg-transparent border text-black ${activeButton === btn.label ? `${btn.color} text-white hover:text-white` : ""}`}
              onClick={() => setActiveButton(btn.label)}
            >
              {btn.label}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    </div>
  );
}
