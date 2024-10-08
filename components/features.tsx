"use client";

import Image from "next/image";
import Illustration from "@/public/images/features-illustration.svg";

import {
  ArrowPathIcon,
  BeakerIcon,
  BellAlertIcon,
  CalendarIcon,
  ChartBarIcon,
  ListBulletIcon,
  VideoCameraIcon,
  BookOpenIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";

export default function Features() {
  const features = [
    {
      icon: <CalendarIcon className="w-[32px] h-[32px] "></CalendarIcon>,
      title: "Weekly Planning",
      description:
        "You'll start with the 15-minute Sunday planning session guided by video to create your unstoppable plan for the week.",
      link: null,
    },
    {
      icon: <ListBulletIcon className="w-[32px] h-[32px] "></ListBulletIcon>,
      title: "Daily Execution",
      description:
        "You'll then be able to execute on your plan daily with the power of a Pomodoro timer and Alpha Waves playing in the background.",
      link: null,
    },
    {
      icon: <ArrowPathIcon className="w-[32px] h-[32px] "></ArrowPathIcon>,
      title: "Monthly Reflection",
      description:
        "Every month, you'll be able to reflect on your progress and plan for the next month with our 15-minute Monthly Planning practice.",
      link: null,
    },
    {
      icon: <VideoCameraIcon className="w-[32px] h-[32px] "></VideoCameraIcon>,
      title: "Guided Video",
      description:
        "Every Journaling practice is guided by a video instructor to help you pause, reflect, and build your Unstoppable plan through simple prompts.",
      link: null,
    },
    {
      icon: <ChartBarIcon className="w-[32px] h-[32px] "></ChartBarIcon>,
      title: "Notes",
      description:
        "All your notes from your planning sessions are saved in one place for easy access across your Daily, Weekly and Monthly sessions.",
      link: null,
    },
    {
      icon: <BellAlertIcon className="w-[32px] h-[32px] "></BellAlertIcon>,
      title: "Reminders",
      description:
        "You'll receive a reminder every Sunday to plan for the week and every Wednesday to check in on your weekly goals so you never miss a beat.",
      link: null,
    },

    // {
    //   icon: <BeakerIcon className="w-[32px] h-[32px] "></BeakerIcon>,
    //   title: "Beast Mode Challenges",
    //   description:
    //     "You'll receive the training to do the Beast Mode Challenges to push yourself to the next level and build the business of your dreams.",
    //   link: null,
    // },

    // {
    //   icon: <BookOpenIcon className="w-[32px] h-[32px] "></BookOpenIcon>,
    //   title: "Life Planning",
    //   description:
    //     "You'll also receive step-by-step training on how to plan your life so you can build the life of your dreams and achieve some of your most ambitious goals.",
    //   link: null,
    // },

    // {
    //   icon: <BoltIcon className="w-[32px] h-[32px] "></BoltIcon>,
    //   title: "Community",
    //   description:
    //     "You'll also get access to our private community of Unstoppable OS users to share your wins, get feedback, and stay accountable.",
    //   link: null,
    // },
  ];

  return (
    <section className="relative">
      {/* Bg illustration */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none -mt-20 -z-10"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none"
          width="1440"
          height="440"
          alt="Illustration"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-hkgrotesk mb-4">
              Purpose Built Guided Journaling Tools
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-slate-300 font-bold">
               To Help You Accomplish Some of Your Wildest Goals
              </p>
            </div>{" "}
            <div className="mt-10 flex items-center justify-center">
              <a
                href="https://app.unstoppablesunday.com/users/sign_up"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Help Me Plan My Week &rarr;
              </a>
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
              {features.map((feature, index) => (
                <div
                  className="swiper-slide h-auto flex flex-col bg-slate-800 p-6 rounded"
                  key={`feature-${index}`}
                >
                  {feature.icon && (
                    <div className="w-[56px] h-[56px] rounded-full bg-indigo-500 mb-3 flex items-center justify-center">
                      {feature.icon}
                    </div>
                  )}

                  <div className="grow">
                    <div className="font-hkgrotesk font-bold text-xl">
                      {feature.title}
                    </div>
                    <div className="text-slate-500 mb-3">
                      {feature.description}
                    </div>
                  </div>
                  {feature.link && (
                    <div className="text-right">
                      <a
                        className="font-medium text-indigo-500 inline-flex items-center transition duration-150 ease-in-out group"
                        href={feature.link}
                      >
                        Learn More{" "}
                        <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                          -&gt;
                        </span>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
