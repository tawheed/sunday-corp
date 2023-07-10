"use client";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/public/images/sunday-app-screenshot-v2.png";
import { useState } from "react";
import VideoModal from "./videomodal";
import Lottie from "lottie-react";
import animationData from "@/public/images/98813-play.json";

export default function Hero() {
  let [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">
          {/* Hero content */}
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="h1 font-hkgrotesk mb-6" data-aos="fade-up">
              Become a High Performance Founder
            </h1>
            <p
              className="text-xl text-slate-500 mb-10"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Plan Your Week, Execute Ruthlessly, and Unleash Your Full
              Potential
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <Link
                  className="btn text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group"
                  href="/signup"
                >
                  Start Free Trial{" "}
                  <span className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </Link>
              </div>
              <div>
                <Link
                  className="btn text-white bg-gray-500 hover:bg-gray-600 w-full shadow-sm group"
                  onClick={() => {
                    setShowVideoModal(true);
                  }}
                  href={"#"}
                >
                  Watch Demo Video{" "}
                  <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </Link>
                <VideoModal
                  open={showVideoModal}
                  url="https://tkkader.wistia.com/medias/r1f3dwsm3g"
                  onHandleClose={() => {
                    setShowVideoModal(false);
                  }}
                ></VideoModal>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="pt-16 md:pt-20"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="relative group cursor-pointer">
              <Image
                className="mx-auto cursor-pointer"
                src={HeroImage}
                width={920}
                height={518}
                alt="Hero"
                priority
                onClick={() => {
                  setShowVideoModal(true);
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <Lottie
                  animationData={animationData}
                  className="flex justify-center items-center"
                  loop={true}
                  onClick={() => {
                    setShowVideoModal(true);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
