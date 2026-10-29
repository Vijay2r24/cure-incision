import { Link } from "react-router-dom"
import {
  PhoneCall,
  ArrowRight,
  Stethoscope,
  Activity,
  HeartPulse,
  Sparkles,
  CalendarCheck,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Award,
  Clock,
  Lock,
  Star,
  Quote,
} from "lucide-react"
import Hero from "../components/home/Hero"
import ServiceCategories from "../components/home/ServiceCategories"
import SectionHeading from "../components/ui/SectionHeading"
import Button from "../components/ui/Button"

const services = [
  {
    icon: Stethoscope,
    title: "General Consultation",
    desc: "Comprehensive check-ups and personalized treatment plans with experienced physicians.",
    to: "/services",
  },
  {
    icon: Activity,
    title: "Surgical Procedures",
    desc: "Advanced minimally invasive and specialized surgical care across top hospital pathways.",
    to: "/services",
  },
  {
    icon: HeartPulse,
    title: "Diagnostics & Imaging",
    desc: "Accurate laboratory testing, radiology, and rapid digital report delivery.",
    to: "/services",
  },
  {
    icon: Sparkles,
    title: "Rehabilitation & Care",
    desc: "Continuous post-operative recovery monitoring and dedicated care coordinators.",
    to: "/services",
  },
]

const steps = [
  {
    number: "1",
    icon: CalendarCheck,
    title: "Book & Consult",
    desc: "Choose a specialty online and meet an experienced clinician who listens first.",
  },
  {
    number: "2",
    icon: Stethoscope,
    title: "Diagnose & Plan",
    desc: "Clear clinical assessments and a transparent, personalized surgery pathway.",
  },
  {
    number: "3",
    icon: HeartPulse,
    title: "Treat & Recover",
    desc: "Guided procedures, comprehensive follow-ups, and support until you feel whole again.",
  },
]

const facilities = [
  {
    title: "Advanced operating suites",
    desc: "Modular OTs with laminar airflow and cutting-edge surgical robotics.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Precision diagnostics lab",
    desc: "NABL-accredited diagnostic infrastructure with robotic sample processing.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Comfort-first recovery rooms",
    desc: "Private healing suites with round-the-clock monitoring and nursing care.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80",
  },
]

const topDoctors = [
  {
    id: "dr-amelia-chen",
    name: "Dr. Amelia Chen",
    specialty: "Cardiology & Surgery",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "dr-marcus-reid",
    name: "Dr. Marcus Reid",
    specialty: "General Surgery",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "dr-sofia-patel",
    name: "Dr. Sofia Patel",
    specialty: "Orthopedic Surgery",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "dr-arjun-mehta",
    name: "Dr. Arjun Mehta",
    specialty: "Cardiothoracic Surgery",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1622253694238-3b22139576c6?auto=format&fit=crop&w=600&q=80",
  },
]

const whyUsPillars = [
  {
    icon: Award,
    title: "Experienced Surgeons",
    desc: "Board-certified doctors with decades of combined clinical expertise.",
  },
  {
    icon: Building2,
    title: "Modern OT Suites",
    desc: "State-of-the-art modular surgical facilities for maximum safety.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Pricing",
    desc: "Zero hidden fees with seamless cashless insurance assistance.",
  },
  {
    icon: Clock,
    title: "24/7 Care Support",
    desc: "Dedicated personal care coordinators from admission to discharge.",
  },
  {
    icon: Lock,
    title: "Secure Medical Records",
    desc: "100% encrypted, confidential digital health records and reports.",
  },
]

const testimonials = [
  {
    name: "Elena Vargas",
    role: "Laparoscopic Surgery Patient",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    review:
      "From my very first consultation to discharge, the CureIncision team made me feel informed and completely taken care of. Truly world-class surgery care.",
  },
  {
    name: "Noah Kim",
    role: "Orthopedic Patient",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    review:
      "The care coordinator handled everything — hospital admission, insurance clearance, and post-surgery physiotherapy. I could just focus on recovering.",
  },
  {
    name: "Priya Sharma",
    role: "General Surgery Patient",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    review:
      "Clean facilities, modern equipment, and a staff that genuinely listens. The doctors explained every step with empathy. Highly recommend CureIncision.",
  },
]

const articles = [
  {
    slug: "modern-surgery-preparation-guide",
    title: "Preparing for Minimally Invasive Surgery",
    category: "Surgery Pathway",
    date: "Mar 18, 2026",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    excerpt: "What to expect before, during, and after your procedure for a swift, comfortable recovery.",
  },
  {
    slug: "post-surgery-recovery-nutrition",
    title: "Nutrition & Healing: Foods that Accelerate Recovery",
    category: "Recovery & Care",
    date: "Mar 12, 2026",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
    excerpt: "Key micronutrients and dietary habits that support tissue repair and maintain vitality.",
  },
  {
    slug: "understanding-cashless-hospitalization",
    title: "How Cashless Surgery Pathways Work",
    category: "Patient Guide",
    date: "Feb 28, 2026",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
    excerpt: "Demystifying insurance pre-authorizations, network hospital coverage, and claims.",
  },
]

export default function Home() {
  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Quick Services Strip (Health Packages, Lab Tests, etc.) */}
      <ServiceCategories />

      {/* 3. Slim 24/7 Emergency Support Strip */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0f4c92] via-[#1766c0] to-[#0fb6a8] py-4 text-white shadow-sm">
        <div className="container-page flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3" data-aos="fade-right" data-aos-duration="700">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
              <PhoneCall className="h-5 w-5 text-white" />
            </span>
            <p className="font-display text-sm font-bold sm:text-base">
              24/7 Emergency Support — immediate assistance when every minute matters
            </p>
          </div>
          <a
            href="tel:18001234567"
            data-aos="fade-left"
            data-aos-duration="700"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-extrabold text-[#0f4c92] transition-transform duration-200 hover:scale-105 hover:bg-slate-50"
          >
            <PhoneCall className="h-4 w-4" />
            1800-123-4567
          </a>
        </div>
      </section>

      {/* 3. Care Pathways / Services */}
      <section className="container-page py-20 lg:py-24">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Our Services"
            title="Care pathways designed around you"
            description="Explore specialty surgical services delivered with clinical precision and empathy."
            data-aos="fade-up"
            data-aos-duration="700"
          />
          <div data-aos="fade-left" data-aos-duration="700">
            <Button to="/services" variant="secondary" size="sm" className="shrink-0 gap-1.5">
              View all services
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item, idx) => {
            const Icon = item.icon
            return (
              <Link
                key={item.title}
                to={item.to}
                data-aos="fade-up"
                data-aos-delay={idx * 80}
                data-aos-duration="700"
                className="group relative flex flex-col rounded-[1.75rem] border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/30 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1766c0] to-[#0fb6a8] text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-lg font-extrabold text-slate-900 group-hover:text-brand-blue transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-brand-blue">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* 4. How It Works (3 Clear Steps) */}
      <section className="bg-slate-50/70 py-20 lg:py-24 border-y border-slate-100">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="How it works"
            title="Your care journey in three clear steps"
            description="From initial consultation to complete recovery, every step is designed to feel simple and guided."
            data-aos="fade-up"
            data-aos-duration="700"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <div
                  key={step.number}
                  data-aos="fade-up"
                  data-aos-delay={idx * 120}
                  data-aos-duration="700"
                  className="relative flex flex-col rounded-[1.75rem] border border-white bg-white p-7 shadow-sm"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#1766c0] to-[#0fb6a8] font-display text-sm font-extrabold text-white">
                      {step.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue-dark">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-extrabold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. Editorial About CureIncision (Split Section) */}
      <section className="container-page py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Facility Image with Aura */}
          <div className="relative" data-aos="fade-right" data-aos-duration="800">
            <div className="absolute -inset-3 rounded-[2.25rem] bg-gradient-to-br from-[#1766c0] via-[#0fb6a8] to-[#46b555] opacity-25 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1100&q=80"
              alt="CureIncision medical facility"
              className="relative aspect-[5/4] w-full rounded-[2rem] border-[5px] border-white object-cover shadow-2xl"
            />
          </div>

          {/* Right Narrative Content */}
          <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="800">
            <SectionHeading
              align="left"
              eyebrow="About CureIncision"
              title="A modern surgery pathway with a human touch"
              description="CureIncision unites specialist surgeons, advanced hospital infrastructure, and personalized coordination so every patient feels supported from first consultation through post-op recovery."
            />

            <ul className="mt-8 space-y-3.5">
              {[
                "Board-certified multidisciplinary surgeons and specialists",
                "Transparent, all-inclusive pricing with insurance guidance",
                "Dedicated personal care coordinator assigned to your surgery",
                "Seamless post-operative follow-up and doorstep recovery support",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#2f8f3e]" />
                  <span className="text-sm font-medium leading-relaxed sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button to="/about" variant="primary" size="md" className="gap-2">
                Learn more about us
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Spaces & Facilities */}
      <section className="bg-slate-50/70 py-20 lg:py-24 border-y border-slate-100">
        <div className="container-page">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
            <SectionHeading
              align="left"
              eyebrow="Our facilities"
              title="Spaces built for precision and comfort"
              description="Modern clinical environments designed for surgical safety, sterile recovery, and calm patient care."
              data-aos="fade-up"
              data-aos-duration="700"
            />
            <div
              className="flex items-center gap-2.5 rounded-2xl border border-brand-blue/20 bg-white px-4 py-3 shadow-sm"
              data-aos="fade-left"
              data-aos-duration="700"
            >
              <Sparkles className="h-5 w-5 text-brand-teal" />
              <p className="text-xs font-semibold text-slate-700 sm:text-sm">
                Sterile Modular OTs · Advanced Diagnostics · Private Suites
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {facilities.map((facility, idx) => (
              <div
                key={facility.title}
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
                data-aos-duration="700"
                className="group overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-display text-lg font-extrabold text-white">{facility.title}</p>
                    <p className="mt-1 text-xs text-white/80 line-clamp-2">{facility.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Trusted Doctors Showcase */}
      <section className="container-page py-20 lg:py-24">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Our Doctors"
            title="Meet clinicians patients trust"
            description="Leading specialists and surgeons known for clinical excellence, empathy, and patient-first care."
            data-aos="fade-up"
            data-aos-duration="700"
          />
          <div data-aos="fade-left" data-aos-duration="700">
            <Button to="/doctors" variant="secondary" size="sm" className="shrink-0 gap-1.5">
              View all doctors
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {topDoctors.map((doc, idx) => (
            <Link
              key={doc.id}
              to="/doctors"
              data-aos="zoom-in"
              data-aos-delay={idx * 90}
              data-aos-duration="700"
              className="group block overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/30 hover:shadow-xl"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-xs font-extrabold text-amber-600 shadow-md backdrop-blur">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  {doc.rating.toFixed(1)}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-extrabold text-slate-900 group-hover:text-brand-blue transition-colors">
                  {doc.name}
                </h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-brand-blue">{doc.specialty}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 8. Interactive CTA & Stats Strip */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-brand-blue-light/30 py-16 lg:py-20 border-y border-slate-100">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div data-aos="fade-right" data-aos-duration="800">
            <span className="mb-3 inline-flex items-center gap-2 font-display text-xs font-extrabold uppercase tracking-widest text-[#2f8f3e]">
              <Sparkles className="h-4 w-4" />
              Book in minutes
            </span>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Ready for your next step in care?
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-600">
              Select your preferred specialty, schedule a doctor consultation, or discuss your surgery plan. Our
              coordinators ensure a smooth, worry-free pathway.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Button to="/appointment" variant="primary" size="md" className="gap-2">
                Book Appointment
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/contact" variant="secondary" size="md">
                Talk to care team
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4" data-aos="fade-left" data-aos-delay="120" data-aos-duration="800">
            {[
              { label: "Avg. Confirmation", value: "< 2 hrs" },
              { label: "Surgical Specialties", value: "8+" },
              { label: "Patient Rating", value: "4.9★" },
              { label: "Care Assistance", value: "24/7" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white bg-white/95 p-5 shadow-sm backdrop-blur"
              >
                <p className="font-display text-2xl font-black text-gradient sm:text-3xl">{stat.value}</p>
                <p className="mt-1.5 text-xs font-semibold text-slate-600 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Why Choose Us (5 Modern Pillars) */}
      <section className="container-page py-20 lg:py-24">
        <SectionHeading
          align="center"
          eyebrow="Why Choose Us"
          title="Care that feels modern, safe, and personal"
          description="Every detail of the CureIncision surgery pathway is designed around trust, clinical excellence, and patient comfort."
          data-aos="fade-up"
          data-aos-duration="700"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {whyUsPillars.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                data-aos="flip-up"
                data-aos-delay={idx * 90}
                data-aos-duration="700"
                className="flex flex-col items-center rounded-[1.75rem] border border-slate-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue-light text-brand-blue-dark">
                  <Icon className="h-6 w-6 text-brand-blue" />
                </div>
                <h3 className="font-display text-base font-extrabold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* 10. Patient Testimonials */}
      <section className="bg-slate-50/70 py-20 lg:py-24 border-y border-slate-100">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Testimonials"
            title="Stories from patients who trust CureIncision"
            description="Real experiences from patients who found clarity, comfort, and lasting health through our surgery pathway."
            data-aos="fade-up"
            data-aos-duration="700"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((item, idx) => (
              <div
                key={item.name}
                data-aos="fade-up"
                data-aos-delay={idx * 120}
                data-aos-duration="700"
                className="relative flex flex-col justify-between rounded-[2rem] border border-white bg-white p-7 shadow-sm"
              >
                <Quote className="absolute right-6 top-6 h-8 w-8 text-brand-blue-light" aria-hidden="true" />
                <div>
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600 italic">“{item.review}”</p>
                </div>

                <div className="mt-6 flex items-center gap-3.5 border-t border-slate-100 pt-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-11 w-11 rounded-full object-cover border-2 border-brand-teal-light"
                  />
                  <div>
                    <p className="font-display text-sm font-extrabold text-slate-900">{item.name}</p>
                    <p className="text-xs text-slate-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Health Insights (Blog) */}
      <section className="container-page py-20 lg:py-24">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Health tips"
            title="Fresh insights from our clinicians"
            description="Short, practical reads on surgical recovery, preventive care, and patient wellbeing."
            data-aos="fade-up"
            data-aos-duration="700"
          />
          <div data-aos="fade-left" data-aos-duration="700">
            <Button to="/blog" variant="secondary" size="sm" className="shrink-0 gap-1.5">
              View all articles
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((post, idx) => (
            <Link
              key={post.slug}
              to="/blog"
              data-aos="fade-up"
              data-aos-delay={idx * 80}
              data-aos-duration="700"
              className="group flex flex-col overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-brand-blue-dark shadow-sm">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <p className="text-xs font-semibold text-slate-400">{post.date}</p>
                  <h3 className="mt-2 font-display text-lg font-extrabold text-slate-900 group-hover:text-brand-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-2">{post.excerpt}</p>
                </div>
                <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-brand-blue">
                  Read article
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
