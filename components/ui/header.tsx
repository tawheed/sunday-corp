import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/sunday-logo-no-border.png'

export default function Header({ nav = true }: {
  nav?: boolean
}) {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 sm:mt-0">
        <div className="flex flex-col md:flex-row items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4 leading-8 font-bold">
            {/* Logo */}
            <Link className="block" href="/" aria-label="Unstoppable Sunday">
              <Image src={Logo} alt="Unstoppable Sunday" className='h-8 w-8 float-left mr-3 p-[0.5] bg-[#FFE800] rounded-sm'/> Unstoppable Sunday
            </Link>
          </div>
          {/* Desktop navigation */}
          {nav &&
            <nav className="flex grow hidden sm:block">
              {/* Desktop sign in links */}
              <ul className="flex grow justify-end flex-wrap items-center">
                <li>
                  <Link className="font-medium text-slate-500 hover:text-slate-300 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" href="https://app.unstoppablesunday.com" target="_blank">Sign in</Link>
                </li>
                <li className="ml-3">
                  <Link className="btn-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group" href="/signup">
                    Start 14-Day Free Trial <span className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </Link>
                </li>
              </ul>
            </nav>
          }
        </div>
      </div>
    </header>
  )
}
