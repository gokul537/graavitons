"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import About from "@/assets/home/about.webp"
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:About,
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:About,
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:About,
    },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:About,
    },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:About,
    },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:About,
    },
];

export function AnimatedTooltipPreview() {
  return (
    (<div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>)
  );
}
