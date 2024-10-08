"use client";
import Image from "next/image";
import Link from "next/link";
import Illustration from "@/public/images/cta-illustration.svg";
import VideoModal from "./videomodal";
import { useState } from "react";

export default function Cta() {
  let [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section className="relative border-t border-slate-800">
      {/* Bg gradient: top */}
      <div
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-slate-800 to-transparent opacity-25 h-[25rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Illustration */}
      <div
        className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 -mt-8 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none"
          alt="Features 01 Illustration"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div
            className="max-w-2xl mx-auto text-center pb-4"
            data-aos="fade-up"
          >
            <h1 className="h2 font-hkgrotesk mb-2" data-aos="fade-up">
              Build an Unstoppable Plan For Your Week
            </h1>
            <h2 className="h3 font-hkgrotesk mb-6 hidden" data-aos="fade-up">
              For Unstoppable Founders
            </h2>
            <p
              className="text-xl text-slate-300 mb-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Express Gratitude, Set Goals, and Execute Every Day with Focus.
            </p>
          </div>
          {/* Buttons */}
          <div className="text-center">
            <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div data-aos="fade-up" data-aos-delay="100">
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
        </div>
      </div>
    </section>
  );
}
