import Image from 'next/image'
import Link from 'next/link'
import Illustration from '@/public/images/cta-illustration.svg'

export default function Cta() {
  return (
    <section className="relative border-t border-slate-800">
      {/* Bg gradient: top */}
      <div
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-slate-800 to-transparent opacity-25 h-[25rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Illustration */}
      <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 -mt-8 pointer-events-none -z-10" aria-hidden="true">
        <Image src={Illustration} className="max-w-none" alt="Features 01 Illustration" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-2xl mx-auto text-center pb-8" data-aos="fade-up">
            <h2 className="h2 font-hkgrotesk mb-6">Become a High Performance Founder</h2>
            <p className="text-xl text-slate-500" data-aos="fade-up" data-aos-delay="100">
            Plan Your Week, Execute Ruthlessly, and Unleash Your Full Potential
            </p>
          </div>
          {/* Buttons */}
          <div className="text-center">
            <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div data-aos="fade-up" data-aos-delay="100">
                <Link className="btn text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group" href="/signup">
                  Start Free Trial{' '}
                  <span className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
