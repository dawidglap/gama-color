"use client";
import React from "react";
import { LayoutGrid } from "./ui/layout-grid";
import Work1 from "../../public/images/work8.webp";
import Work2 from "../../public/images/work2.webp";
import Work3 from "../../public/images/work3.webp";
import Work4 from "../../public/images/work4.webp";
import Work5 from "../../public/images/work5.webp";
import Work6 from "../../public/images/work6.webp";
import Work7 from "../../public/images/work7.webp";
import Work8 from "../../public/images/work1.webp";
import Work9 from "../../public/images/work9.webp";
import Work10 from "../../public/images/work10.webp";
import Work11 from "../../public/images/work11.webp";
import Work12 from "../../public/images/work12.webp";

export function LayoutGridDemo() {
  return (
    <div className="min-h-screen py-20 w-full" id="realizacje">
      <LayoutGrid cards={cards} />
    </div>
  );
}

// Empty skeleton (no text, no title)
const EmptySkeleton = () => <div />;

const cards = [
  { id: 1, content: <EmptySkeleton />, className: "md:col-span-2", thumbnail: Work1 },
  { id: 2, content: <EmptySkeleton />, className: "md:col-span-1", thumbnail: Work2 },
  { id: 3, content: <EmptySkeleton />, className: "md:col-span-1", thumbnail: Work3 },
  { id: 4, content: <EmptySkeleton />, className: "md:col-span-2", thumbnail: Work4 },
  { id: 5, content: <EmptySkeleton />, className: "md:col-span-1", thumbnail: Work5 },
  { id: 6, content: <EmptySkeleton />, className: "md:col-span-1", thumbnail: Work6 },
  { id: 7, content: <EmptySkeleton />, className: "md:col-span-1", thumbnail: Work7 },
  { id: 8, content: <EmptySkeleton />, className: "md:col-span-2", thumbnail: Work8 },
  { id: 9, content: <EmptySkeleton />, className: "md:col-span-1", thumbnail: Work9 },
  { id: 10, content: <EmptySkeleton />, className: "md:col-span-1", thumbnail: Work10 },
  { id: 11, content: <EmptySkeleton />, className: "md:col-span-2", thumbnail: Work11 },
  { id: 12, content: <EmptySkeleton />, className: "md:col-span-3", thumbnail: Work12 },
];

