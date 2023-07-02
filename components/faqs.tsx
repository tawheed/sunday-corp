"use client";

import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function Faqs() {
  const faq = [
    {
      question:
        "What is the difference between a founder and a high performance founder?",
      answer: "Sure thing",
    },
  ];

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
      url: "https://www.youtube.com/watch?v=CaH1UHGB_yA",
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
    }
  ];

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-hkgrotesk mb-4">
              What is Unstoppable?
            </h2>
            <p className="text-xl text-slate-500">
              Every Founder needs a strategy for their personal life and their business. When you're with us, yours will be unstoppable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-16">
            {videos.map((video) => (
              <div className="flex justify-center">
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

          {/* Columns */}
          <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">
                  What is the difference between the Free and Paid versions?
                </h4>
                <p className="text-slate-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua,
                  ut enim ad minim veniam.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">
                  Do you have student or non-profit discounts?
                </h4>
                <p className="text-slate-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua,
                  ut enim ad minim veniam.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">
                  How is the price determined?
                </h4>
                <p className="text-slate-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua,
                  ut enim ad minim veniam.
                </p>
              </div>
            </div>
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">
                  Do I need coding knowledge to use this product?
                </h4>
                <p className="text-slate-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua,
                  ut enim ad minim veniam.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">
                  Is there a way to become an Affiliate reseller?
                </h4>
                <p className="text-slate-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua,
                  ut enim ad minim veniam.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">
                  What forms of payment do you accept?
                </h4>
                <p className="text-slate-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua,
                  ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
