"use client";

import { useState } from "react";
import Image from "next/image";
import Illustration from "@/public/images/features-illustration-02.svg";
import FeaturesImage from "@/public/images/unstoppable-daily.png";

import {
  PencilIcon,
  ClockIcon,
  SpeakerWaveIcon
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Top 3 Tasks for the Day.",
    description:
      "You'll start your day by identifying the three biggest tasks you want to accomplish for the day. This will help you focus on what's important.",
    icon: PencilIcon,
  },
  {
    name: "Pomodoro Timer.",
    description:
      "With the built-in Pomodoro timer, you'll be able to focus on your tasks for 25 minutes and then take a 5-minute break. Don't worry, the intervals are completely configurable to fit your style.",
    icon: ClockIcon,
  },
  {
    name: "Alpha Waves Playing.",
    description:
      "To help you focus and get into the zone, we'll play Alpha Waves in the background to help you concentrate.",
    icon: SpeakerWaveIcon,
  },
];

export default function Features03() {
  return (
    <section className="relative border-t border-slate-800">
      {/* Bg gradient: top */}
      <div
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-slate-800 to-transparent opacity-25 h-[25rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Illustration */}
      <div
        className="lg:block absolute top-0 left-1/2 -translate-x-1/2 mt-40 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none"
          width="1440"
          height="453"
          alt="Features 02 Illustration"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="my-24 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-400">
                Daily Execution
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Execute on Your Plan Daily
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                You'll be able to execute on your plan daily with the power
                of a Pomodoro timer and Alpha Waves playing in the background.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <Image
              alt="Product screenshot"
              src={FeaturesImage}
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl shadow-xl sm:w-[57rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
