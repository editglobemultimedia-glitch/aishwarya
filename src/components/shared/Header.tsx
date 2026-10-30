import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { navItems } from '../../data/navigation'

function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const location = useLocation()

  // Close mobile menu when the route changes
  useEffect(() => {
    onClose()
  }, [location.pathname])

  // Prevent background scrolling while the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose()
      }

      window.addEventListener('keydown', handleKeyDown)

      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in panel */}
      <div className="fixed right-0 top-0 bottom-0 h-full w-full max-w-xs bg-cream-50 shadow-2xl flex flex-col z-10 animate-fadeInUp">
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-5 bg-cream-50">
          <Link
            to="/"
            onClick={onClose}
            className="flex items-center gap-3 min-w-0"
          >
            <img
              src="/images/asf-logo.png"
              alt="ASF Logo"
              className="h-14 w-auto object-contain"
            />
            <span className="font-serif text-navy font-semibold text-sm sm:text-base leading-tight">
              Aishwarya Sarvahith Foundation
            </span>
          </Link>

          <button
            onClick={onClose}
            className="p-2 text-gray-600 hover:text-maroon rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-maroon/20"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className="flex-1 overflow-y-auto px-5 py-4"
          aria-label="Mobile navigation"
        >
          <div className="space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === '/'}
                onClick={onClose}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-md text-sm font-sans transition-colors ${
                    isActive
                      ? 'bg-maroon/10 text-maroon font-semibold border-l-4 border-maroon'
                      : 'text-gray-800 hover:text-maroon hover:bg-cream-100 font-medium'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Contact Links */}
          <div className="pt-5 text-xs text-gray-600 space-y-3">
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                onClick={onClose}
                className="hover:text-maroon transition-colors"
              >
                Contact
              </Link>
              <span className="text-gold-antique/40">•</span>
              <Link
                to="/media/newsletter"
                onClick={onClose}
                className="hover:text-maroon transition-colors"
              >
                Newsletter
              </Link>
            </div>
          </div>
        </nav>

        {/* Bottom Support Button */}
        <div className="p-5 bg-cream-50">
          <Link
            to="/support-us"
            onClick={onClose}
            className="w-full group inline-flex items-center justify-between bg-maroon hover:bg-maroon-dark text-white rounded-full pl-5 pr-2 py-2.5 text-sm font-sans font-medium shadow-sm transition-all duration-200"
          >
            <span>Support Us</span>
            <span className="w-7 h-7 rounded-full bg-white text-maroon flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
              <ArrowRight size={14} className="stroke-[2.5]" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15)

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-cream-50 shadow-md' : 'bg-cream-50'
        }`}
      >
        <div className="max-w-[1540px] mx-auto px-4 sm:px-8 lg:px-10">
          {/* Main Header Layout — compact height; same design and content */}
          <div className="grid grid-cols-1 md:grid-cols-[100px_minmax(0,1fr)] md:grid-rows-[auto_auto]">
            {/* LEFT SIDE: Oval Logo */}
            <div className="md:row-span-2 flex items-center justify-center py-1 md:py-2">
              <Link
                to="/"
                aria-label="Aishwarya Sarvahith Foundation home"
                className="flex items-center justify-center w-[64px] h-[76px] md:w-[76px] md:h-[88px] rounded-[50%] border-2 border-[#E5D0A6] bg-white/30 overflow-hidden"
              >
                <img
                  src="/images/asf-logo.png"
                  alt="Aishwarya Sarvahith Foundation Logo"
                  className="w-[56px] h-[68px] md:w-[70px] md:h-[82px] object-contain"
                />
              </Link>
            </div>

            {/* RIGHT TOP: Foundation Name and Support Button */}
            <div className="flex items-center justify-between gap-4 md:pt-2 md:pl-5">
              <Link
                to="/"
                aria-label="Aishwarya Sarvahith Foundation home"
                className="flex flex-col min-w-0 py-1"
              >
                <span className="font-['Cormorant_Garamond',serif] text-navy text-base sm:text-lg lg:text-xl font-medium leading-tight tracking-wide">
                  Aishwarya
                </span>
                <span className="font-['Cormorant_Garamond',serif] text-[#702F3B] text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-wide drop-shadow-sm">
                  Sarvahith Foundation
                </span>
              </Link>

              {/* Support Us */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <Link
                  to="/support-us"
                  className="group inline-flex items-center gap-2 bg-maroon hover:bg-maroon-dark text-white rounded-full pl-4 sm:pl-5 pr-1.5 sm:pr-2 py-1 sm:py-1.5 text-xs sm:text-sm font-medium shadow-sm transition-all duration-200"
                >
                  <span>Support Us</span>
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-maroon">
                    <ArrowRight size={14} />
                  </span>
                </Link>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileOpen(true)}
                  className="md:hidden p-2 text-gray-700 hover:text-maroon rounded-lg"
                  aria-label="Open navigation menu"
                  aria-expanded={mobileOpen}
                >
                  <Menu size={24} />
                </button>
              </div>
            </div>

            {/* BOTTOM RIGHT: Navigation Links */}
            <nav
              className="hidden md:flex items-center justify-between gap-x-3 lg:gap-x-5 gap-y-1 flex-wrap py-1 md:pl-4"
              aria-label="Primary navigation"
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === '/'}
                  className={({ isActive }) =>
                    `relative py-1 text-sm lg:text-base font-sans font-medium whitespace-nowrap transition-colors duration-200 ${
                      isActive
                        ? 'text-maroon font-semibold'
                        : 'text-gray-700 hover:text-maroon'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  )
}
