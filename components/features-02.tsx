"use client";

import { useState } from "react";
import Image from "next/image";
import Illustration from "@/public/images/features-illustration-02.svg";
import FeaturesImage from "@/public/images/unstoppable-weekly.png";

import {
  TrophyIcon,
  PencilIcon,
  HandRaisedIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Pause & Reflect.",
    description:
      "We're so quick to jump ahead to obsession over our problems. We'll start with pausing and reflecting on the incredible week you just had.",
    icon: HandRaisedIcon,
  },
  {
    name: "Celebrate Your Wins.",
    description:
      "Big or Small. High Performers celebrate their wins. This is how you build momentum. We'll guide you through the process of celebrating your wins.",
    icon: TrophyIcon,
  },
  {
    name: "Top 3 Prioriites for the Week.",
    description:
      "We'll then guide you in setting your priorities and a clear intention for the week ahead.",
    icon: PencilIcon,
  },
];

export default function Features02() {
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
                Weekly Planning
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Go into Every Week with Certainty
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                You'll start with the 15-minute Sunday planning session guided
                by video to create your unstoppable plan for the week.
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
                  Help Me Plan My Week &rarr;
                </a>
              </div>
            </div>
          </div>
          <Image
            alt="Unstopable Weekly Practice"
            src={FeaturesImage}
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none sm:w-[57rem] md:-ml-4 lg:-ml-0 md:mt-12"
          />
        </div>
      </div>
    </section>
  );
}
