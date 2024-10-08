"use client";

import React from "react";
import dynamic from "next/dynamic";
import bookCover from "@/public/images/book-cover.png";
import Image from "next/image";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function Manifesto() {
  const videos = [
    {
      title: "11 Habits Of High Performance & Successful CEOs",
      description:
        "In this video, I share the 11 habits that I've seen successful CEOs use and that I've used myself to build successful companies. These habits are the foundation of high performance and will help you build a successful company.",
      url: "https://www.youtube.com/watch?v=LFaFvIaIaBs",
    },
    {
      title: "How to Get More Done as a Founder/CEO",
      description:
        "How do you actually get more done as a Startup CEO? In this episode, we dig into the 3 principles that I follow to get more done, stay sane, and avoid burnout so that I can build successful companies and be an effective startup leader.",
      url: "https://www.youtube.com/watch?v=kX8uNDkNA9A",
    },
    {
      title: "6 Skills for Successful Startup Founders:",
      description:
        "I asked myself, 'Who would I have to become to accomplish my goals?' I came up with a list of 6 key skills, which I've honed over time to unlock my full potential as a startup founder and accomplish some of my most outrageous goals.",
      url: "https://www.youtube.com/watch?v=CaH1UHGB_yA",
    },
    {
      title: "SaaS Founder Routines That Boost Productivity",
      description:
        "There's this one secret weapon in startups that none of us talk about enough and that's the idea of stamina. There are those that learn to master it and they can go the distance and there are those that don't.",
      url: "https://www.youtube.com/watch?v=l1V4qGm9G9U",
    },
    {
      title: "How I Use the Holiday Period to Plan My Life",
      description:
        "In this episode, I share how I use the holiday period to plan my life and my business. The holidays tend to be a tough time for Founders but it doesn't have to be when you have the right framework to follow.",
      url: "https://www.youtube.com/watch?v=mhcA9AaMaVY",
    },
    {
      title: "How to Scale Your Startup with an Unstoppable GTM Strategy",
      description:
        "I believe that you should have an Unstoppable strategy both for your personal life and for your business. In this episode, I share the 6 key steps I've consistently followed to build an unstoppable GTM Strategy.",
      url: "https://www.youtube.com/watch?v=39Qkonv_JRs",
    },
  ];

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-hkgrotesk mb-4">
              Based on Battle-Hardened Unstoppable Principles
            </h2>
            <p className="text-xl text-slate-300">
              Everyone needs a strategy for their personal life and their
              business. When you're with us, yours will be unstoppable.
            </p>
          </div>

          <div className="mx-auto mb-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-4 mx-16">
              <div className="w-full rounded-lg shadow-xl overflow-hidden scale-75 -rotate-12">
                <Image className="w-full h-full" src={bookCover} alt="" />
              </div>
            </div>
            <div>
              <div className="text-base leading-7 text-white lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-yellow-400">
                  The Unstoppable Movement
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  On a mission to help you become unstoppable and accomplish your wildest goals.
                </h1>
                <div className="max-w-xl">
                  <p className="mt-6">
                    It’s Sunday afternoon. You’re rounding out your weekend with
                    friends and family and life is feeling great. As the hours
                    pass through the afternoon and you start to see Monday
                    approaching, you get that pit in your stomach. Call it the
                    Sunday Scaries, the Sunday Jitters, the Sunday Angst or the
                    Sunday existential “What am I even doing with my life?!” —
                    We’ve all been there.
                  </p>
                  <p className="mt-8">
                    TK lived his life trying to escape the Sunday jitters,
                    dreading Mondays, and holding his breath through the week
                    just counting down to weekends for all too long until he
                    said enough is enough. He learned (almost too late) in his
                    life that taking a proactive approach to his days led to a
                    calmer him. A less frantic him.{" "}
                  </p>
                </div>
              </div>
              <div className="mt-10 flex">
                <a
                  href="https://book.tkkader.com"
                  target="_blank"
                  className="text-base font-semibold leading-7 text-yellow-400 hover:underline"
                >
                  Read the book <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-16 hidden">
            {videos.map((video, index) => (
              <div className="flex justify-center" key={`video-${index}`}>
                <div className="rounded-lg shadow-lg bg-slate-800">
                  <div className="w-full rounded-t-lg h-[200px] bg-slate-800 pt-2">
                    <ReactPlayer url={video.url} width="100%" height="100%" />
                  </div>
                  <div className="p-6">
                    <h5 className="font-hkgrotesk font-bold text-white text-lg font-bold mb-2">
                      {video.title}
                    </h5>
                    <p className="text-slate-500 text-base font-medium mb-4 leading-6">
                      {video.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
