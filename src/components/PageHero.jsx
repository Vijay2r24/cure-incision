import { Link } from "react-router-dom"

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs = [],
  image,
}) {
  return (
    <section className="noise-overlay relative overflow-hidden gradient-mesh pb-12 pt-24 sm:pb-16 sm:pt-28 lg:pb-20 lg:pt-32">
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute -right-16 top-20 h-64 w-64 rounded-full bg-brand-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-accent-400/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {breadcrumbs.length > 0 && (
          <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-sm" aria-label="Breadcrumb">
            <Link to="/" className="font-semibold text-slate-500 transition hover:text-brand-700">
              Home
            </Link>
            {breadcrumbs.map((crumb) => (
              <span key={crumb.label} className="flex items-center gap-1.5">
                <span className="text-slate-300">/</span>
                {crumb.to ? (
                  <Link to={crumb.to} className="font-semibold text-slate-500 hover:text-brand-700">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-brand-700 dark:text-accent-400">
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className={`grid items-center gap-8 lg:gap-10 ${image ? "lg:grid-cols-2" : ""}`}>
          <div data-aos="fade-up">
            {eyebrow && (
              <span className="mb-3 inline-flex items-center gap-2 font-display text-xs font-extrabold uppercase tracking-[0.22em] text-accent-700 dark:text-accent-400">
                <span className="h-1.5 w-1.5 rounded-full bg-ci-green" aria-hidden="true" />
                {eyebrow}
              </span>
            )}
            <h1 className="max-w-3xl text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.1] dark:text-white">
              {title}
            </h1>
            {description && (
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:mt-4 sm:text-lg dark:text-slate-300">
                {description}
              </p>
            )}
          </div>

          {image && (
            <div className="relative" data-aos="zoom-in" data-aos-delay="120">
              <div className="absolute -inset-3 rounded-[2rem] bg-ci-gradient opacity-30 blur-xl" />
              <img
                src={image}
                alt=""
                className="relative aspect-[16/10] w-full rounded-[1.75rem] object-cover shadow-2xl shadow-brand-700/15"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
