"use client";

import { useState } from "react";
import Image from "next/image";
import Illustration from "@/public/images/features-illustration-02.svg";
import DailyFeaturesImage from "@/public/images/unstoppable-daily.png";
import MonthlyFeaturesImage from "@/public/images/unstoppable-monthly.png";
import WeeklyFeaturesImage from "@/public/images/unstoppable-weekly.png";

import {
  TrophyIcon,
  PencilIcon,
  HandRaisedIcon,
} from "@heroicons/react/20/solid";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";

export default function FeaturesBento() {
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
      <div className="bg-gray-900 py-24 sm:py-32">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-6 md:pb-6">
          <h2 className="h2 font-hkgrotesk mb-4">
            Everything You Need to Build Your Unstoppable Plan and Execute on
            It.
          </h2>
        </div>
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
            <div className="flex p-px lg:col-span-4">
              <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
                <Image
                  alt="Product screenshot"
                  src={DailyFeaturesImage}
                  className="h-80 object-cover object-left bg-black"
                />
                <div className="p-10">
                  <h3 className="text-sm/4 font-semibold text-gray-400">
                    Daily Execution
                  </h3>
                  <p className="mt-2 text-lg/7 font-bold tracking-tight text-white">
                    Pomodoro Timer & Alpha Waves
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                    Once you've created your plan, you can execute on it with
                    focus and intention. Unstoppable Sunday helps you chunk down
                    your prioties for each day and execute on it with focus.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex p-px lg:col-span-2">
              <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-tr-[2rem]">
                <Image
                  alt="Product screenshot"
                  src={WeeklyFeaturesImage}
                  className="h-80 object-cover object-right bg-black"
                />
                <div className="p-10">
                  <h3 className="text-sm/4 font-semibold text-gray-400">
                    Journaling & Guided Video
                  </h3>
                  <p className="mt-2 text-lg/7 font-bold tracking-tight text-white">
                    You'll Be Fully Supported
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                    Unstoppable Sunday provides you with guided videos to help
                    you learn how to plan your week and journal your progress.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex p-px lg:col-span-2">
              <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-bl-[2rem]">
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/component-images/bento-02-security.png"
                  className="h-80 object-cover object-center"
                />
                <div className="p-10">
                  <h3 className="text-sm/4 font-semibold text-gray-400">
                    Regular Reminders
                  </h3>
                  <p className="mt-2 text-lg/7 font-bold tracking-tight text-white">
                    Never Forget Your Goals
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                    You'll receive a reminder every Sunday to plan your week
                    along with a reminder of your goals every Wednesday so you
                    stay on track.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex p-px lg:col-span-4">
              <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
                <Image
                  alt="Product screenshot"
                  src={MonthlyFeaturesImage}
                  className="h-80 object-cover object-left bg-black"
                />
                <div className="p-10">
                  <h3 className="text-sm/4 font-semibold text-gray-400">
                    Monthly Reflections
                  </h3>
                  <p className="mt-2 text-lg/7 font-bold tracking-tight text-white">
                    Course Correct Every Month
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                    Every month, you'll be able to reflect on your progress and
                    plan for the next month with our 15-minute Monthly Planning
                    practice. This ensures that you are able to zoom out, see
                    the bigger picture, and accomplish your larger goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
