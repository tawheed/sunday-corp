"use client";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/public/images/sunday-app-screenshot-v2.png";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Lottie from "lottie-react";
import animationData from "@/public/images/98813-play.json";
import { Mixpanel } from "./common/mixpanel";

export default function Hero() {
  let [showDemoVideo, setShowDemoVideo] = useState(false);
  const url = "https://tkkader.wistia.com/medias/r1f3dwsm3g";

  useEffect(() => {
    if (showDemoVideo) {
      Mixpanel.track("Watch Demo Video");
    }
  } , [showDemoVideo]);

  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">
          {/* Hero content */}
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="h1 font-hkgrotesk mb-2">
              Daily, Weekly & Monthly Guided Journaling
            </h1>
            <h2 className="h3 font-hkgrotesk mb-6">For Unstoppable Founders</h2>
            <p className="text-xl text-gray-500 font-bold mb-12 max-w-2xl m-auto">
              Sunday is a guided journaling application for Unstoppable Founders
              and Entrepreneurs. It helps you reflect on your past week, express
              gratitude for your wins, set goals for the upcoming week, and
              execute every day with focus and certainty.
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

            <div
              className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <div>
                <Link
                  className="btn text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group"
                  href="https://app.unstoppablesunday.com/users/sign_up"
                >
                  Start 30-Day Free Trial{" "}
                  <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
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
