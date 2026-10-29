import { useState } from "react"
import { Link } from "react-router-dom"
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2 } from "lucide-react"
import PageHero from "../components/PageHero"

const contactInfo = {
  name: "CureIncision",
  tagline: "Surgery Pathway",
  phone: "+1 (800) 555-0199",
  email: "care@cureincision.health",
  address: "128 Wellness Avenue, Suite 400, San Francisco, CA 94107",
  hours: "Mon–Fri 8:00 AM – 8:00 PM · Sat–Sun 9:00 AM – 5:00 PM · Emergency 24/7",
}

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
}

function ContactCard({ icon: Icon, title, value, delay = 0 }) {
  return (
    <div
      className="flex gap-4 rounded-[1.35rem] border border-slate-100 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ci-blue text-white shadow-sm">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <div>
        <p className="font-display text-sm font-extrabold text-slate-900 dark:text-white">
          {title}
        </p>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          {value}
        </p>
      </div>
    </div>
  )
}

function BottomCtaBanner({
  title = "Prefer to book directly?",
  description = "Skip the inbox — schedule a visit online in a few clicks.",
  primaryLabel = "Book Appointment",
  primaryTo = "/appointment",
  secondaryLabel = "Meet Doctors",
  secondaryTo = "/doctors",
}) {
  return (
    <section className="relative overflow-hidden py-12 lg:py-16">
      <div className="absolute inset-0 bg-ci-blue" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(18,231,79,0.35),_transparent_50%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div data-aos="fade-right" className="max-w-xl">
          <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="mt-2 text-sm text-white/80 sm:text-base lg:text-lg">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5" data-aos="fade-left">
          <Link
            to={primaryTo}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 font-display text-sm font-extrabold text-brand-700 shadow-md transition hover:-translate-y-0.5 hover:bg-accent-50 hover:shadow-lg"
          >
            {primaryLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to={secondaryTo}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 bg-transparent px-5 py-2.5 font-display text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Contact() {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const nextErrors = {}

    if (!formData.name.trim()) {
      nextErrors.name = "Name is required"
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Enter a valid email"
    }

    if (!formData.subject.trim()) {
      nextErrors.subject = "Subject is required"
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      nextErrors.message = "Please share a message (at least 10 characters)"
    }

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    setLoading(true)
    setSuccess(false)

    // Simulate API submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setLoading(false)
    setSuccess(true)
    setFormData(initialForm)
  }

  const inputClass = (hasError) =>
    `w-full rounded-2xl border bg-white px-4 py-3.5 text-sm outline-none transition focus:ring-2 dark:bg-slate-950 text-slate-900 dark:text-white ${
      hasError
        ? "border-rose-400 focus:ring-rose-200 dark:focus:ring-rose-900/40"
        : "border-slate-200 focus:border-brand-400 focus:ring-brand-200 dark:border-slate-700 dark:focus:border-brand-500 dark:focus:ring-brand-900/30"
    }`

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We're here when you need us"
        description="Reach our care team for appointments, referrals, partnerships, or general inquiries."
        breadcrumbs={[{ label: "Contact" }]}
        image="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="bg-white py-12 dark:bg-ink lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
          {/* Left Column: Contact info & Google Maps placeholder */}
          <div data-aos="fade-right" data-aos-duration="900">
            <div className="space-y-4">
              <ContactCard
                icon={MapPin}
                title="Hospital Address"
                value={contactInfo.address}
                delay={0}
              />
              <ContactCard
                icon={Phone}
                title="Phone Number"
                value={contactInfo.phone}
                delay={80}
              />
              <ContactCard
                icon={Mail}
                title="Email Address"
                value={contactInfo.email}
                delay={160}
              />
              <ContactCard
                icon={Clock}
                title="Working Hours"
                value={contactInfo.hours}
                delay={240}
              />

              {/* Google Maps placeholder card */}
              <div
                className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-brand-100 to-accent-100 dark:border-slate-700 dark:from-slate-800 dark:to-slate-900"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div
                  className="flex aspect-[16/10] items-center justify-center p-6 text-center"
                  role="img"
                  aria-label="Google Maps placeholder"
                >
                  <div>
                    <MapPin className="mx-auto mb-3 h-10 w-10 text-brand-700 dark:text-brand-400" />
                    <p className="font-display text-lg font-extrabold text-slate-800 dark:text-white">
                      Google Maps Placeholder
                    </p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                      Interactive map embed can be connected here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div data-aos="fade-left" data-aos-delay="120" data-aos-duration="900">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-[1.75rem] border border-slate-100 bg-mist p-6 shadow-lg shadow-brand-700/5 sm:p-8 dark:border-slate-800 dark:bg-slate-900"
            >
              <h2 className="mb-2 font-display text-2xl font-extrabold text-slate-900 dark:text-white">
                Send us a message
              </h2>
              <p className="mb-6 text-sm text-slate-600 dark:text-slate-400">
                We typically respond within one business day.
              </p>

              {success && (
                <div
                  className="mb-6 flex items-center gap-3 rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-emerald-800 text-sm font-medium dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-300"
                  data-aos="fade-up"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <span>Message sent! We will get back to you soon.</span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-sm font-semibold text-slate-800 dark:text-slate-200"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    value={formData.name}
                    onChange={handleChange("name")}
                    className={inputClass(errors.name)}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-sm font-semibold text-slate-800 dark:text-slate-200"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange("email")}
                    className={inputClass(errors.email)}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-1.5 block text-sm font-semibold text-slate-800 dark:text-slate-200"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    value={formData.subject}
                    onChange={handleChange("subject")}
                    className={inputClass(errors.subject)}
                    placeholder="How can we help?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-rose-500">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 block text-sm font-semibold text-slate-800 dark:text-slate-200"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange("message")}
                    className={inputClass(errors.message)}
                    placeholder="Write your message..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-500">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ci-blue px-6 py-3 font-display text-sm font-extrabold tracking-wide text-white shadow-sm shadow-brand-700/15 transition-all duration-300 hover:brightness-105 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
                >
                  {loading && (
                    <span
                      className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                      aria-hidden="true"
                    />
                  )}
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <BottomCtaBanner />
    </>
  )
}
