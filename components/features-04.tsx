"use client";

import { useState } from "react";
import Image from "next/image";
import Illustration from "@/public/images/features-illustration-02.svg";
import FeaturesImage from "@/public/images/unstoppable-monthly.png";

import {
  HandRaisedIcon,
  StopCircleIcon,
  SparklesIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Pause & Reflect.",
    description:
      "A lot can happen in a month. You likely had some wins and some setbacks. We'll guide you through reflecting on the month.",
    icon: HandRaisedIcon,
  },
  {
    name: "Identify What Held Your Back.",
    description:
      "There are hidden forces that hold us back. We'll help you identify what held you back so you can overcome it.",
    icon: StopCircleIcon,
  },
  {
    name: "Double Down on What Worked.",
    description:
      "We'll help you identify what worked well so you can double down on it and keep getting better at your execution every month.",
    icon: SparklesIcon,
  },
];

export default function Features04() {
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
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-400">
                Monthly Reflections
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Course Correct Every Month
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Every month, you'll be able to reflect on your progress and plan
                for the next month with our 15-minute Monthly Planning practice.
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
              <div className="mt-10 flex">
                <a
                  href="https://app.unstoppablesunday.com/users/sign_up"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Help Me Plan My Month &rarr;
                </a>
              </div>
            </div>
          </div>
          <Image
            alt="Product screenshot"
            src={FeaturesImage}
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none sm:w-[57rem] md:-ml-4 lg:-ml-0 md:mt-12"
          />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-25"
          />
        </div>
      </div>
    </section>
  );
}
