"use client";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/public/images/sunday-app-screenshot-v2.png";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Lottie from "lottie-react";
import animationData from "@/public/images/98813-play.json";
import { Mixpanel } from "./common/mixpanel";
import { UserCircleIcon, PencilIcon, CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/20/solid";
export default function Hero() {
  let [showDemoVideo, setShowDemoVideo] = useState(false);
  const url = "https://tkkader.wistia.com/medias/r1f3dwsm3g";

  useEffect(() => {
    if (showDemoVideo) {
      Mixpanel.track("Watch Demo Video");
    }
  }, [showDemoVideo]);

  const features = [
    {
      name: "Pause & Reflect",
      description:
        "Pause and Reflect on your prior week, express gratitude, and celebrate your wins. This helps you build momentum and confidence to tackle the week ahead.",
      href: "#",
      icon: HandRaisedIcon,
    },
    {
      name: "Set Your Priorities",
      description:
        "Set your top 3 non-negotiable priorities for the week. This helps you focus on what matters most and ensures you're not just busy, but productive.",
      href: "#",
      icon: PencilIcon,
    },
    {
      name: "Future Pace Your Week",
      description:
        "Look at your calendar for the upcoming week to ensure your time commitments match your priorities. This helps you own your time and stay focused.",
      href: "#",
      icon: CalendarDaysIcon,
    },
  ];

  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">
          {/* Hero content */}
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="h1 font-hkgrotesk mb-2">
              Build an Upstoppable Plan for Your Week
            </h1>
            <h2 className="h3 font-hkgrotesk mb-6 hidden">
              For Unstoppable Founders
            </h2>
            <p className="mt-4 text-xl text-gray-600 font-bold mb-12 max-w-2xl m-auto">
              Unstoppable helps you reflect on your past week, express
              gratitude, and go into every week with an unstoppable plan so you
              can accomplish your wildest goals with certainty.
            </p>
            {/* Hero image */}
            <div>
              <div className="relative group cursor-pointer">
                {!showDemoVideo ? (
                  <>
                    <Image
                      className="mx-auto cursor-pointer"
                      src={HeroImage}
                      width={920}
                      height={518}
                      alt="Hero"
                      priority
                      onClick={(event) => {
                        setShowDemoVideo(true);
                        event.preventDefault();
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <Lottie
                        animationData={animationData}
                        className="flex justify-center items-center"
                        loop={true}
                        onClick={() => {
                          setShowDemoVideo(true);
                        }}
                      />
                    </div>
                  </>
                ) : (
                  <div className="overflow-hidden bg-gray-800 rounded-lg shadow-md mt-6 mb-12">
                    <div className="player-wrapper rounded-md">
                      <ReactPlayer
                        url={url}
                        className="react-player"
                        width="100%"
                        height="100%"
                        playing={true}
                        controls={true}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Transformation */}
            <div
              className="mx-auto mt-6 mb-20 max-w-2xl lg:max-w-none text-left"
              id="product"
            >
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-lg font-bold leading-7 text-white">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <feature.icon
                          aria-hidden="true"
                          className="h-6 w-6 text-white"
                        />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-white">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="w-[600px] max-x-md mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="w-full">
                <Link
                  className="btn text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group flex flex-col items-center justify-center"
                  href="https://app.unstoppablesunday.com/users/sign_up"
                >
                  <span className="font-bold text-2xl">
                    Help Me Plan My Week{" "}
                    <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </span>

                  <span className="text-sm">
                    30-Day Free Trial, then Just $29/month
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
