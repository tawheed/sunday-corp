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

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-hkgrotesk mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-500">
              Everyone needs a strategy for their personal life and their
              business. When you're with us, yours will be unstoppable.
            </p>
          </div>

          {/* Columns */}
          <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">
                  Why is the Unstoppable Sunday method so effective?
                </h4>
                <p className="text-slate-500">
                  The Unstoppable Sunday application helps you through asking
                  and answering the right questions to help you plan your week.
                  It's a simple process that helps you practice gratitude,
                  celebrate your wins, and then plan your week.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">
                  Is the Unstoppable Sunday method only for Founders?
                </h4>
                <p className="text-slate-500">
                  While the Unstoppable Sunday method was designed with Founders
                  in mind, it's a great tool for anyone who wants to be more
                  productive and accomplish their goals.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">
                  How long does Unstoppable Sunday take?
                </h4>
                <p className="text-slate-500">
                  In just 15-minutes, the Unstoppable Sunday application will
                  guide you in creating a plan for your week and go into Monday
                  with a clear intention and a plan of attack.
                </p>
              </div>
            </div>
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">
                  How does Unstoppable help me execute on my goals?
                </h4>
                <p className="text-slate-500">
                  Every day you'll choose your top 3 priorities. The application
                  then leverages the power of Alpha Waves playing in the
                  background along with a Pomodoro timer to help you focus and
                  execute on your key tasks.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">
                  Will my data be secure?
                </h4>
                <p className="text-slate-500">
                  We take your privacy and security very seriously. We use
                  industry-standard security and encryption practices to store
                  your data and protect it from unauthorized access.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">
                  How do I get in touch with you?
                </h4>
                <p className="text-slate-500">
                  You can reach us at{" "}
                  <a
                    href="mailto:team@unstoppablesunday.com"
                    className="text-sky-500 hover:text-sky-600"
                    target="_blank"
                  >
                    team@unstoppablesunday.com
                  </a>{" "}
                  and we'd be happy to help you with any questions you have. You
                  can also check out our{" "}
                  <a
                    href="https://getunstoppable.com/youtube"
                    target="_blank"
                    className="text-sky-500 hover:text-sky-600"
                  >
                    Youtube
                  </a>{" "}
                  channel for more information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
