"use client";

import { useEffect } from "react";
import Image from "next/image";
import Illustration from "@/public/images/features-illustration.svg";

import { ArrowPathIcon, BeakerIcon, BellAlertIcon, CalendarIcon, ChartBarIcon, ListBulletIcon, VideoCameraIcon } from '@heroicons/react/24/solid'

import FeaturesIcon01 from "@/public/images/features-icon-01.svg";
import FeaturesIcon02 from "@/public/images/features-icon-02.svg";
import FeaturesIcon03 from "@/public/images/features-icon-03.svg";
import FeaturesIcon04 from "@/public/images/features-icon-04.svg";

// Import Swiper
import Swiper, { Autoplay, Navigation } from "swiper";
import "swiper/swiper.min.css";
Swiper.use([Autoplay, Navigation]);

export default function Features() {
  useEffect(() => {

    // const carousel = new Swiper(".carousel", {
    //   breakpoints: {
    //     320: {
    //       slidesPerView: 1,
    //     },
    //     640: {
    //       slidesPerView: 2,
    //     },
    //     1024: {
    //       slidesPerView: 3,
    //     },
    //   },
    //   grabCursor: true,
    //   loop: false,
    //   centeredSlides: false,
    //   initialSlide: 0,
    //   spaceBetween: 24,
    //   autoplay: {
    //     delay: 7000,
    //   },
    //   navigation: {
    //     nextEl: ".carousel-next",
    //     prevEl: ".carousel-prev",
    //   },
    // });

  }, []);

  const features = [
    {
      icon: <CalendarIcon className="w-[32px] h-[32px] "></CalendarIcon>,
      title: "Sunday Planning",
      description:
        "The 15-minute Sunday planning ritual that will set your week up for success.",
      link: null,
    },
    {
      icon: <ListBulletIcon className="w-[32px] h-[32px] "></ListBulletIcon>,
      title: "Daily Execution",
      description:
        "Your daily hit list with Alpha Waves and a Pomodoro Timer to execute on tasks.",
      link: null,
    },
    {
      icon: <ArrowPathIcon className="w-[32px] h-[32px] "></ArrowPathIcon>,
      title: "Monthly Reflection",
      description:
        "Express gratitude, reflect on your wins, and learn from your mistakes.",
      link: null,
    },
    {
      icon: <VideoCameraIcon className="w-[32px] h-[32px] "></VideoCameraIcon>,
      title: "Guided Video",
      description:
        "Guided video instructions help you get started with each ritual.",
      link: null,
    },
    {
      icon: <ChartBarIcon className="w-[32px] h-[32px] "></ChartBarIcon>,
      title: "Notes",
      description:
        "All your journaling from your rituals are saved in one place for easy access.",
      link: null,
    },
    {
      icon: <BellAlertIcon className="w-[32px] h-[32px] "></BellAlertIcon>,
      title: "Reminders",
      description:
        "Weekly reminders to help you stay on track with the ritual.",
      link: null,
    },
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
              Go Into Every Week With a Plan and Turn It Into Reality
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-slate-500">
                Pause, Reflect, and Execute with Certainty
              </p>
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
              {features.map((feature, index) => (
                <div className="swiper-slide h-auto flex flex-col bg-slate-800 p-6 rounded" key={`feature-${index}`}>
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
