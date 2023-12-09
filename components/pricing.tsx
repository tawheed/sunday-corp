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
              Become Unstoppable One Sunday at a Time
            </h2>
            <p className="text-xl text-slate-500">
              Plan Your Week & Ruthlessly Execute Through the Week
            </p>
          </div>

          {/* Simple Pricing */}
          <div className="max-w-3xl mx-auto text-center bg-slate-800 bg-opacity-25 rounded-full p-12">
            <h2 className="h3 font-hkgrotesk mb-2">$10/month</h2>
            <p className="text-md text-slate-500 mb-6">
              Billed Monthly · 14-Day Free Trial · Cancel Anytime · No Credit Card Required to Trial
            </p>
            <div className="max-w-md mb-8 text-white text-left mx-auto">
              <div className="grid grid-cols-2 gap-x-4 leading-loose">
                <ul className="list-disc ml-4">
                  <li>Weekly Planning</li>
                  <li>Daily Execution Hitlist</li>
                  <li>Pomodoro Timer</li>
                  <li>Monthly Reflections</li>
                </ul>
                <ul className="list-disc ml-4">
                  <li>Unstoppable Journal</li>
                  <li>Guided Video</li>
                  <li>Alpha Waves</li>
                  <li>Weekly Reminders</li>
                </ul>
              </div>
            </div>{" "}
            <Link
              className="btn mt-2 text-white bg-indigo-500 hover:bg-indigo-600 shadow-sm group"
              href="https://app.unstoppablesunday.com/users/sign_up"
            >
              Start 14-Day Free Trial{" "}
              <span className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                -&gt;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
