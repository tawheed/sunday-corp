import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/sunday-logo-no-border.png";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Blocks */}
        <div className="grid sm:grid-cols-12 lg:grid-cols-10 gap-8 py-8 md:py-12 border-t border-slate-800">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-2 lg:max-w-xs">
            <div className="mb-2">
              {/* Logo */}
              <Link className="block" href="/" aria-label="Unstoppable Sunday">
                <Image
                  src={Logo}
                  alt="Unstoppable Sunday"
                  className="h-8 w-8 float-left mr-3 p-[0.5] bg-[#FFE800] rounded-sm"
                />{" "}
                Unstoppable Sunday
              </Link>
            </div>
          </div>
          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-xs text-slate-200 font-semibold uppercase underline mb-3">
              Products
            </h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Cube Manage
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Cube Analyse
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Cube Launch
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Experimentation
                </a>
              </li>
            </ul>
          </div>
          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-xs text-slate-200 font-semibold uppercase underline mb-3">
              Resources
            </h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Cheat Sheet
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Channel Partners
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Affiliate Program
                </a>
              </li>
            </ul>
          </div>
          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-xs text-slate-200 font-semibold uppercase underline mb-3">
              Projects
            </h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Session Recording
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Feature Flags
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Heatmaps
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Correlation Analysis
                </a>
              </li>
            </ul>
          </div>
          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-xs text-slate-200 font-semibold uppercase underline mb-3">
              Company
            </h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                  href="#0"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Work With Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between pb-4 md:pb-8">
          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a
                className="flex justify-center items-center text-indigo-500 hover:text-slate-300 transition duration-150 ease-in-out"
                href="https://twitter.com/tawheed"
                aria-label="Twitter"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 fill-current"
                >
                  <path d="M23.94 4.68c-.88.39-1.81.65-2.78.77a4.9 4.9 0 0 0 2.15-2.7c-.95.56-2 .96-3.1 1.18a4.9 4.9 0 0 0-8.35 4.47A13.9 13.9 0 0 1 2.02 3.4a4.9 4.9 0 0 0 1.5 6.53A4.86 4.86 0 0 1 1.99 9v.06c0 2.17 1.55 3.98 3.6 4.4a4.9 4.9 0 0 1-2.2.08c.62 1.92 2.42 3.32 4.55 3.36A9.83 9.83 0 0 1 0 20.05a13.84 13.84 0 0 0 7.53 2.21c9 0 13.92-7.48 13.92-13.93 0-.21 0-.41-.01-.62.95-.69 1.79-1.56 2.45-2.55l-.03-.02z" />
                </svg>
              </a>
            </li>
            <li className="ml-2">
              <a
                className="flex justify-center items-center text-indigo-500 hover:text-slate-300 transition duration-150 ease-in-out"
                href="https://getunstoppable.com/youtube"
                target="_blank"
                aria-label="Youtube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 fill-current"
                >
                  <path d="M21.8,7.6c-0.2-0.7-0.7-1.3-1.4-1.5C18.7,4,12,4,12,4S5.3,4,3.6,6.1C2.9,6.3,2.4,6.9,2.2,7.6C2,8.7,2,12,2,12s0,3.3,0.4,4.4c0.2,0.7,0.7,1.3,1.4,1.5C5.3,20,12,20,12,20s6.7,0,8.4-1.1c0.7-0.2,1.2-0.8,1.4-1.5c0.4-1.1,0.4-4.4,0.4-4.4s0-3.3-0.4-4.4z M9,15.2V8.8l6.2,3.2L9,15.2z" />
                </svg>
              </a>
            </li>
            <li className="ml-2">
              <a
                className="flex justify-center items-center text-indigo-500 hover:text-slate-300 transition duration-150 ease-in-out"
                href="#0"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="w-8 h-8 fill-current"
                >
                  <path d="M20.7,3H3.3C2.6,3,2,3.6,2,4.3v15.3C2,20.4,2.6,21,3.3,21h17.3c0.7,0,1.3-0.6,1.3-1.3V4.3C22,3.6,21.4,3,20.7,3z M8.6,18.5H5.8V9.5h2.8V18.5z M7.2,8.2c-0.9,0-1.6-0.7-1.6-1.6c0-0.9,0.7-1.6,1.6-1.6c0.9,0,1.6,0.7,1.6,1.6C8.8,7.5,8.1,8.2,7.2,8.2z M18.7,18.5h-2.8v-4.4c0-1.1-0.4-1.9-1.4-1.9c-0.7,0-1.1,0.5-1.4,1.1c0,0.1,0,0.2,0,0.3v4.9h-2.8v-9h2.6v1.2c0.4-0.6,1-1.1,2.1-1.1c1.5,0,2.6,1.2,2.6,3.1V18.5z" />
                </svg>
              </a>
            </li>
          </ul>
          {/* Links */}
          <div className="text-sm text-slate-600">
            <a
              className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
              href="https://tkkader.com/terms"
            >
              Terms
            </a>{" "}
            ·{" "}
            <a
              className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
              href="https://tkkader.com/privacy"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
