import Link from "next/link";
import Image from "next/image";
import Illustration from "@/public/images/pricing-illustration.svg";

export default function Pricing() {
  return (
    <section className="relative">
      {/* Illustration */}
      <div
        className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 -mb-24 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none"
          alt="Pricing Illustration"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-10 pb-12 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-hkgrotesk mb-4">
              Start Your Free 30-Day Trial
            </h2>
            <p className="text-xl text-slate-500">
              Go into Every Week with Clarity and Confidence
            </p>
          </div>

          {/* Simple Pricing */}
          <div className="max-w-3xl mx-auto text-center bg-slate-800 bg-opacity-25 rounded-full p-12">
            <h2 className="h3 font-hkgrotesk mb-2">$29/month</h2>
            <p className="text-md text-slate-500 mb-6">
              Billed Monthly · Free 30-Day Trial · No Credit Card Required
            </p>
            <div className="max-w-md mb-8 text-white text-left mx-auto">
              <div className="grid grid-cols-2 gap-x-4 leading-loose ml-8">
                <ul className="list-disc ml-4">
                  <li>Weekly Planning</li>
                  <li>Daily Execution</li>
                  <li>Monthly Reflections</li>

                </ul>
                <ul className="list-disc ml-4">
                  <li>Guided Video</li>
                  <li>Pomodoro Timer</li>
                  <li>Weekly Reminders</li>

                </ul>
              </div>
            </div>{" "}

            <div className="w-full sm:w-[600px] max-x-md mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="w-full">
                <Link
                  className="btn text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group flex flex-col items-center justify-center"
                  href="https://flow.getunstoppable.com"
                >
                  <span className="font-bold text-2xl">
                    Help Me Plan My Week{" "}
                    <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </span>

                  <span className="text-sm">
                    7-Day Free Trial, No Credit Card Required, then Just $9/month
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
