import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react"
import Typewriter from "../ui/Typewriter"

const bannerSlides = [
  {
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1600&q=85",
    alt: "Expert surgeon consulting with patient",
    title: "Trusted clinical excellence",
    subtitle: "Board-certified doctors · Same-week appointments · 24/7 emergency desk",
    tag: "Doctor Consultation",
  },
  {
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=85",
    alt: "Advanced surgical team in operating theatre",
    title: "Advanced surgery pathway",
    subtitle: "State-of-the-art modular OTs · Minimally invasive procedures · Dedicated surgical team",
    tag: "Surgery Pathway",
  },
  {
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1600&q=85",
    alt: "Reassuring doctor providing personalized care",
    title: "Patient-first personalized care",
    subtitle: "10,000+ successful surgeries · Free follow-up consults · Compassionate guidance",
    tag: "Patient Care",
  },
  {
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=85",
    alt: "Modern surgical and clinical infrastructure",
    title: "World-class hospital network",
    subtitle: "NABH & JCI accredited hospital partners across India · Transparent & cashless surgery",
    tag: "Hospital Network",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
    }, 5500)
    return () => clearInterval(timerRef.current)
  }, [])

  const nextSlide = () => {
    clearInterval(timerRef.current)
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
  }

  const prevSlide = () => {
    clearInterval(timerRef.current)
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length)
  }

  const goToSlide = (idx) => {
    clearInterval(timerRef.current)
    setCurrentSlide(idx)
  }

  return (
    <section className="noise-overlay relative overflow-hidden gradient-mesh pt-20 pb-14 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-24">
      {/* Soft animated ambient blobs covering all corners including top-left */}
      <div className="pointer-events-none absolute -left-20 -top-10 h-96 w-96 rounded-full bg-brand-blue/25 blur-3xl animate-drift" />
      <div className="pointer-events-none absolute left-8 top-4 h-80 w-80 rounded-full bg-brand-teal/20 blur-3xl animate-drift [animation-delay:-5s]" />
      <div className="pointer-events-none absolute -right-20 top-16 h-80 w-80 rounded-full bg-brand-blue/20 blur-3xl animate-drift [animation-delay:-2s]" />
      <div className="pointer-events-none absolute -left-20 bottom-8 h-72 w-72 rounded-full bg-brand-green/20 blur-3xl animate-drift [animation-delay:-8s]" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-40 w-40 -translate-x-1/2 rounded-full bg-brand-teal/15 blur-3xl [animation-delay:-10s]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        {/* Left Column: Heading, Typewriter, Description, CTAs */}
        <div className="relative z-10">
          {/* Eyebrow badge */}
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-white/80 px-3.5 py-1.5 shadow-sm backdrop-blur"
            data-aos="fade-down"
            data-aos-duration="700"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-teal" aria-hidden="true" />
            <span className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-brand-blue-dark">
              SURGERY PATHWAY
            </span>
          </div>

          {/* Typewriter Heading */}
          <h1
            className="min-h-[1.2em] text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-[4.1rem] xl:leading-[1.05]"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            <Typewriter
              as="span"
              phrases={[
                "Your Health, Our Priority",
                "Expert Care, Every Step",
                "Guided Care, Every Journey",
              ]}
              speed={65}
              deleteSpeed={35}
              pauseMs={2800}
              loop={true}
              className="inline"
              cursorClassName="bg-brand-blue"
            />
          </h1>

          {/* Subtitle */}
          <p
            className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            Precision care powered by compassion. CureIncision blends expert clinicians, advanced technology, and a seamless surgery pathway — so every patient feels guided, informed, and cared for.
          </p>

          {/* CTA Buttons */}
          <div
            className="mt-6 flex flex-wrap gap-3"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            <Link
              to="/appointment"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1766c0] px-6 py-3 font-display text-sm font-extrabold tracking-wide text-white shadow-sm shadow-[#1766c0]/20 transition-all duration-300 hover:bg-[#0f4c92] hover:shadow-md hover:brightness-105 active:scale-95"
            >
              Book an Appointment
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-blue/25 bg-white/90 px-6 py-3 font-display text-sm font-extrabold tracking-wide text-[#0f4c92] transition-all duration-300 hover:border-brand-teal hover:text-brand-blue-dark hover:bg-white active:scale-95"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Right Column: High-Impact Larger Sized Banner Image Carousel */}
        <div className="relative" data-aos="zoom-in" data-aos-delay="150" data-aos-duration="900">
          {/* Ambient Glow Aura */}
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#1766c0] via-[#0fb6a8] to-[#46b555] opacity-25 blur-3xl" />

          {/* Large Card Container with Increased Height & Dimensions */}
          <div className="group relative h-[440px] sm:h-[500px] lg:h-[560px] xl:h-[600px] w-full overflow-hidden rounded-[2.25rem] border-[6px] border-white/95 bg-white shadow-[0_30px_90px_rgba(15,76,146,0.22)]">
            {/* Sliding & Crossfading Best Banner Images */}
            {bannerSlides.map((slide, i) => (
              <div
                key={slide.image}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  i === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>
            ))}

            {/* Top-Right Floating Brand Logo Badge */}
            <div className="absolute right-3 top-3 z-20 rounded-2xl border border-white/90 bg-white/90 p-2.5 shadow-xl backdrop-blur-md transition-transform duration-300 hover:scale-105 sm:right-5 sm:top-5 sm:p-3">
              <img
                src="/logo.png"
                alt="CureIncision"
                className="h-10 w-10 object-contain sm:h-12 sm:w-12"
              />
            </div>

            {/* Top-Left Category Badge */}
            <div className="absolute left-4 top-4 z-20 hidden rounded-full border border-white/50 bg-white/85 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue-dark shadow-md backdrop-blur-md sm:inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-brand-teal" />
              {bannerSlides[currentSlide].tag}
            </div>

            {/* Left / Right Quick Slide Navigation Arrows */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-ink shadow-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-ink shadow-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white hover:scale-110 active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Bottom Frosted Glass Card with Slide Details & Interactive Indicators */}
            <div className="absolute bottom-4 left-4 right-4 z-20 rounded-2xl border border-white/90 bg-white/90 p-4 shadow-xl backdrop-blur-xl sm:bottom-5 sm:left-5 sm:right-5 sm:p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-display text-sm font-extrabold text-slate-900 sm:text-base">
                    {bannerSlides[currentSlide].title}
                  </p>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {bannerSlides[currentSlide].subtitle}
                  </p>
                </div>

                {/* Interactive Slide Dots */}
                <div className="flex items-center gap-1.5 pt-1 shrink-0">
                  {bannerSlides.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => goToSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentSlide
                          ? "w-6 bg-brand-blue"
                          : "w-2 bg-slate-300 hover:bg-brand-blue/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
