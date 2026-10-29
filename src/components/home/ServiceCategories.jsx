import { Link } from "react-router-dom"
import { HeartPulse, FlaskConical, Stethoscope, Scan, Home, Building2 } from "lucide-react"

const services = [
  {
    icon: HeartPulse,
    label: "Health Packages",
    to: "/packages",
    tint: "bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 group-hover:bg-[#0d21ca] group-hover:text-white",
    shadow: "group-hover:shadow-blue-600/25",
  },
  {
    icon: FlaskConical,
    label: "Lab Tests",
    to: "/tests",
    tint: "bg-teal-50 text-teal-600 dark:bg-teal-950/60 dark:text-teal-400 group-hover:bg-teal-600 group-hover:text-white",
    shadow: "group-hover:shadow-teal-600/25",
  },
  {
    icon: Stethoscope,
    label: "Consult Doctors",
    to: "/doctors",
    tint: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 group-hover:bg-[#009e4b] group-hover:text-white",
    shadow: "group-hover:shadow-emerald-600/25",
  },
  {
    icon: Scan,
    label: "Radiology",
    to: "/radiology",
    tint: "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white",
    shadow: "group-hover:shadow-indigo-600/25",
  },
  {
    icon: Home,
    label: "Home Collection",
    to: "/tests",
    tint: "bg-cyan-50 text-cyan-600 dark:bg-cyan-950/60 dark:text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white",
    shadow: "group-hover:shadow-cyan-600/25",
  },
  {
    icon: Building2,
    label: "Hospitals",
    to: "/hospitals",
    tint: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 group-hover:bg-emerald-600 group-hover:text-white",
    shadow: "group-hover:shadow-emerald-600/25",
  },
]

export default function ServiceCategories() {
  return (
    <section className="container-page relative z-20 -mt-10 sm:-mt-12 mb-8" data-aos="fade-up" data-aos-duration="700">
      <div className="rounded-[2.25rem] border border-slate-100/90 bg-white/95 p-3 sm:p-5 shadow-[0_20px_50px_rgba(15,76,146,0.12)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/95">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6 lg:gap-4">
          {services.map(({ icon: Icon, label, to, tint, shadow }, idx) => (
            <Link
              key={label}
              to={to}
              data-aos="fade-up"
              data-aos-delay={idx * 60}
              data-aos-duration="600"
              className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1.5 hover:bg-slate-50/80 dark:hover:bg-slate-800/60"
            >
              {/* Icon Container */}
              <span
                className={`flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 shadow-sm group-hover:shadow-lg ${tint} ${shadow}`}
              >
                <Icon className="h-6 w-6 sm:h-7 sm:w-7 transition-transform duration-300 group-hover:scale-110" />
              </span>

              {/* Title */}
              <span className="font-display text-sm sm:text-base font-extrabold text-slate-800 transition-colors duration-200 group-hover:text-[#0d21ca] dark:text-slate-100">
                {label}
              </span>

              {/* Subtle accent hover indicator line */}
              <span className="absolute bottom-1.5 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#0d21ca] transition-all duration-300 group-hover:w-8" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
