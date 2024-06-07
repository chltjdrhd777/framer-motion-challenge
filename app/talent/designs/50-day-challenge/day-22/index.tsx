"use client";

import React from "react";

import IphoneSimulator from "@/components/iphone-simulator";
import Header from "./header";
import EachValue from "./each-value";

export interface valuesTypes {
  id: number;
  videoUrl: string;
  title: string;
  description: string;
}

const initialValues: valuesTypes[] = [
  {
    id: 1,
    videoUrl:
      "https://ldxedhzbfnmrovkzozxc.supabase.co/storage/v1/object/public/goals/ios-app-store.mp4",
    title: "iOS App Store",
    description: "Building the demo of iOS App Store was fun.",
  },
];

export default function Day22() {
  return (
    <div className="flex h-dvh w-full items-center justify-center bg-[#E1E1E1] text-black">
      <IphoneSimulator mixBlend={false} mainClassName="overflow-visible">
        <div className="absolute inset-0 -z-10 bg-[#E1E1E1]"></div>
        <div className="text-black">
          <Header />

          <ul className="px-4">
            {initialValues.map((value) => (
              <EachValue key={value.id} value={value} />
            ))}
          </ul>
        </div>
      </IphoneSimulator>
    </div>
  );
}
