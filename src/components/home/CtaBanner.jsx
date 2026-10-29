import { Link } from "react-router-dom"
import {
  CalendarCheck,
  PhoneCall,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Stethoscope,
  MessageCircle,
} from "lucide-react"

export default function CtaBanner({
  badge = "24/7 Surgery & Care Pathway",
  title = "Ready to take charge of",
  titleHighlight = "your health?",
  description = "Book a surgical consult, schedule priority diagnostics, or speak 1-on-1 with a dedicated care manager. Fast, transparent, and always patient-first.",
  primaryLabel = "Book an Appointment",
  primaryTo = "/appointment",
  secondaryLabel = "Call 1800-123-4567",
  secondaryHref = "tel:18001234567",
}) {
  return (
    <section className="container-page mt-20 mb-12" data-aos="fade-up" data-aos-duration="800">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/25 bg-gradient-to-br from-[#061254] via-[#0d21ca] to-[#0d93ca] p-8 sm:p-12 lg:p-16 text-white shadow-[0_30px_90px_rgba(13,33,202,0.32)]">
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#12e74f]/25 blur-[100px]" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-[#0fb6a8]/25 blur-[100px]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(18,231,79,0.22),_transparent_60%)]" />

        {/* Subtle grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <div className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#34d373] backdrop-blur-md mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34d373] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#34d373]" />
              </span>
              <Sparkles className="h-3.5 w-3.5 text-[#34d373]" />
              {badge}
            </div>

            {/* Title */}
            <h2 className="font-display text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl lg:leading-[1.12]">
              {title}{" "}
              <span className="bg-gradient-to-r from-[#34d373] via-teal-200 to-white bg-clip-text text-transparent">
                {titleHighlight}
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg max-w-xl">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                to={primaryTo}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-7 py-3.5 font-display text-sm font-black text-[#0d21ca] shadow-xl shadow-black/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#ecfdf3] hover:shadow-2xl active:scale-95"
              >
                <CalendarCheck className="h-4 w-4 text-[#0d21ca]" />
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href={secondaryHref}
                className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-white/60 bg-white/10 px-6 py-3.5 font-display text-sm font-extrabold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:border-white active:scale-95"
              >
                <PhoneCall className="h-4 w-4 text-[#34d373]" />
                {secondaryLabel}
              </a>
            </div>

            {/* Micro trust indicators */}
            <div className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-semibold text-white/80">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#34d373]" />
                1,500+ Verified Surgeons
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#34d373]" />
                Same-Week Admissions
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#34d373]" />
                Cashless Insurance Support
              </span>
            </div>
          </div>

          {/* Right Column: Floating Care Coordination Glass Card */}
          <div className="lg:col-span-5" data-aos="zoom-in" data-aos-delay="150">
            <div className="relative rounded-[2rem] border border-white/25 bg-white/12 p-6 sm:p-7 shadow-2xl backdrop-blur-xl">
              {/* Header inside card */}
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20 text-white shadow-inner">
                    <Stethoscope className="h-5 w-5 text-[#34d373]" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-extrabold text-white">
                      Surgery Pathway Desk
                    </h3>
                    <p className="text-xs text-white/70">Personal Clinical Navigator</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#12e74f]/20 px-3 py-1 text-[11px] font-bold text-[#34d373] border border-[#12e74f]/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#34d373] animate-pulse" />
                  Live 24/7
                </span>
              </div>

              {/* 3 Pathway Perks */}
              <div className="mt-5 space-y-3.5">
                <div className="flex items-start gap-3 rounded-2xl bg-white/10 p-3.5 transition-colors duration-200 hover:bg-white/15">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#34d373]/20 text-[#34d373]">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Free Second Opinion</p>
                    <p className="text-[11px] text-white/75 mt-0.5">
                      Expert case review with senior specialists before surgery.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-white/10 p-3.5 transition-colors duration-200 hover:bg-white/15">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-cyan-400/20 text-cyan-300">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Zero-Wait Admissions</p>
                    <p className="text-[11px] text-white/75 mt-0.5">
                      Pre-approved insurance paperwork & dedicated room booking.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-white/10 p-3.5 transition-colors duration-200 hover:bg-white/15">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-amber-400/20 text-amber-300">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Post-Op Recovery Follow-ups</p>
                    <p className="text-[11px] text-white/75 mt-0.5">
                      Home visits, medication schedules, and digital vitals tracking.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer Callout */}
              <div className="mt-5 rounded-2xl bg-black/20 px-4 py-3 text-center border border-white/10">
                <p className="text-xs font-medium text-white/90">
                  Prefer chatting on WhatsApp?{" "}
                  <a
                    href="https://wa.me/911800123456"
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-[#34d373] hover:underline inline-flex items-center gap-1"
                  >
                    Start chat <ArrowRight className="h-3 w-3" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
