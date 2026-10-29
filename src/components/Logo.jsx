import { Link } from "react-router-dom"

export default function Logo({ className = "", showTagline = true, onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className={`group flex min-w-0 items-center gap-2.5 ${className}`}
      aria-label="CureIncision - Surgery Pathway"
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
        {showTagline && (
          <span className="hidden text-[10px] font-bold uppercase tracking-[0.18em] text-brand-green-dark sm:block dark:text-brand-green">
            SURGERY PATHWAY
          </span>
        )}
      </span>
    </Link>
  )
}
