import { useState, useEffect } from "react"
import { NavLink, Link, useLocation } from "react-router-dom"
import { Menu, X, Sun, Moon } from "lucide-react"

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Doctors", to: "/doctors" },
  { label: "Appointment", to: "/appointment" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
]

function useTheme() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false
    return (
      localStorage.getItem("vitalcare-theme") === "dark" ||
      document.documentElement.classList.contains("dark")
    )
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add("dark")
      localStorage.setItem("vitalcare-theme", "dark")
    } else {
      root.classList.remove("dark")
      localStorage.setItem("vitalcare-theme", "light")
    }
  }, [dark])

  return [dark, setDark]
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useTheme()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close mobile drawer on route change
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const isTransparent = location.pathname === "/" && !scrolled && !open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "border-b border-brand-100/80 bg-white/90 shadow-sm shadow-brand-700/5 backdrop-blur-xl dark:border-slate-800 dark:bg-ink/90"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        {/* Logo */}
        <Link
          to="/"
          className="group flex min-w-0 items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <img
            src="/logo.png"
            alt="CureIncision logo"
            className="h-9 w-9 shrink-0 object-contain transition duration-300 group-hover:scale-105 sm:h-11 sm:w-11"
          />
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-base font-extrabold tracking-tight text-gradient sm:text-lg lg:text-xl">
              CureIncision
            </span>
            <span className="hidden text-[10px] font-bold uppercase tracking-[0.18em] text-brand-green-dark sm:block dark:text-brand-green">
              SURGERY PATHWAY
            </span>
          </span>
        </Link>

        {/* Center navigation links */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `rounded-full px-3.5 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "bg-brand-blue-light text-brand-blue-dark dark:bg-slate-800 dark:text-brand-teal"
                      : "text-slate-600 hover:bg-brand-blue-light/60 hover:text-brand-blue-dark dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-accent-400"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right action items */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Dark mode button */}
          <button
            type="button"
            onClick={() => setDark(!dark)}
            className="rounded-full p-2 text-slate-600 transition hover:bg-brand-blue-light/70 dark:text-slate-300 dark:hover:bg-slate-800"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          {/* Book Appointment CTA button */}
          <span className="hidden sm:flex">
            <Link
              to="/appointment"
              className="inline-flex items-center justify-center rounded-full bg-[#1766c0] px-5 py-2 text-sm font-extrabold tracking-wide text-white shadow-sm shadow-brand-blue/20 transition-all duration-300 hover:bg-[#0f4c92] hover:shadow-md hover:brightness-105 active:scale-95"
            >
              Book Appointment
            </Link>
          </span>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="rounded-full p-2 text-slate-700 lg:hidden dark:text-slate-200"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {open && (
        <div
          id="mobile-menu"
          className="overflow-hidden border-t border-line/80 bg-white/95 backdrop-blur-2xl lg:hidden dark:border-slate-800 dark:bg-[#0f2a43]/98 animate-fade-in"
        >
          <ul className="space-y-1 px-4 py-4">
            {navLinks.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-2xl px-4 py-3 text-base font-semibold ${
                      isActive
                        ? "bg-brand-blue-light text-brand-blue-dark dark:bg-slate-800 dark:text-brand-teal"
                        : "text-slate-700 hover:bg-brand-blue-light/60 dark:text-slate-200 dark:hover:bg-slate-800"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/appointment"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center rounded-full bg-[#1766c0] px-6 py-3 font-display text-base font-extrabold text-white shadow-md shadow-brand-blue/20 transition-all hover:bg-[#0f4c92]"
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
