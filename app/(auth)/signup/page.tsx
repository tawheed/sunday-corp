export const metadata = {
  title:
    "Start Free Trial | Unstoppable Sunday - Plan Your Week & Ruthlessly Execute Through the Week",
  description:
    "Unstoppable Sunday helps you Pause and Reflect on the last 7 days and plan your next 7 days so you can operate at high performance and build the business of your dreams.",
};

import Tracking from "@/components/tracking";

export default function SignUp() {
  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <Tracking event="View Signup Page"></Tracking>
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="lg:flex lg:space-x-20">
          {/* Left side */}
          <div className="grow lg:mt-2 mb-12 lg:mb-0 flex flex-col items-center lg:items-start">
            {/* Headline */}
            <h1 className="h2 font-hkgrotesk mb-2 text-center lg:text-left">
              Plan Your Week
            </h1>
            <h2 className="h4 font-hkgrotesk mb-8 text-center lg:text-left">
              & Ruthlessly Execute Through the Week
            </h2>
            <p className="mb-8 text-sm">$29/month · No Credit Card Required to Trial</p>
            {/* List */}
            <ul className="inline-flex flex-col text-lg text-slate-500 space-y-3">
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Weekly Unstoppable Sunday Planning</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Daily Ruthless Execution w/Pomodoro Timer</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Pause, Reflect and Iterate Every Month</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>... so that you can accomplish some of your wildest goals</span>
              </li>
            </ul>
          </div>
          {/* Right side */}
          <div className="relative w-full max-w-md mx-auto">
            {/* Bg gradient */}
            <div
              className="absolute inset-0 opacity-40 bg-gradient-to-t from-transparent to-slate-800 -z-10"
              aria-hidden="true"
            />
            <div className="p-6 md:p-8">
              <div className="font-hkgrotesk text-xl font-bold mb-6">
                Start FREE Trial
              </div>
              {/* Form */}
              <form
                action="https://app.unstoppablesunday.com/users/unstoppable"
                method="post"
              >
                <div className="space-y-4">
                  <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <div className="sm:w-1/2">
                      <label
                        className="block text-sm text-slate-400 font-medium mb-1"
                        htmlFor="first_name"
                      >
                        First Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="first_name"
                        name="user[first_name]"
                        className="form-input text-sm py-2 w-full"
                        type="text"
                        required
                      />
                    </div>
                    <div className="sm:w-1/2">
                      <label
                        className="block text-sm text-slate-400 font-medium mb-1"
                        htmlFor="surname"
                      >
                        Last Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="last_name"
                        name="user[last_name]"
                        className="form-input text-sm py-2 w-full"
                        type="text"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-sm text-slate-400 font-medium mb-1"
                      htmlFor="email"
                    >
                      Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="user[email]"
                      className="form-input text-sm py-2 w-full"
                      type="email"
                      required
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm text-slate-400 font-medium mb-1"
                      htmlFor="password"
                    >
                      Password <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="password"
                      name="user[password]"
                      className="form-input text-sm py-2 w-full"
                      type="password"
                      required
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm text-slate-400 font-medium mb-1"
                      htmlFor="password_confirmation"
                    >
                      Confirm Password <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="password_confirmation"
                      name="user[password_confirmation]"
                      className="form-input text-sm py-2 w-full"
                      type="password"
                      required
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <button className="btn-sm text-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group mb-4">
                    Let's DO This{" "}
                    <span className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </button>
                  <p className="text-center">
                    <small className="text-slate-400">
                      By signing up, you agree to our{" "}
                      <a
                        className="text-sky-500 hover:text-sky-600"
                        href="https://tkkader.com/terms"
                        target="_blank"
                      >
                        Terms of Service
                      </a>
                      <br />
                      and{" "}
                      <a
                        className="text-sky-500 hover:text-sky-600"
                        href="https://tkkader.com/privacy"
                        target="_blank"
                      >
                        Privacy Policy
                      </a>
                      .
                    </small>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
