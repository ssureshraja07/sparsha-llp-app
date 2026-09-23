import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Globe2, PackageCheck, ShieldCheck, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import ServiceCard from "../components/ServiceCard";
import { heroSlides, services } from "../data";

export default function Home() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setActive((current) => (current + 1) % heroSlides.length);
  const prev = () => setActive((current) => (current - 1 + heroSlides.length) % heroSlides.length);

  return (
    <>
      <section className="relative h-[calc(100vh-5rem)] min-h-[600px] max-h-[820px] overflow-hidden bg-slate-950">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === active ? "opacity-100" : "pointer-events-none opacity-0"}`}
          >
            <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/35 to-slate-950/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
          </div>
        ))}

        <div className="container-shell relative flex h-full items-center">
          <div className="max-w-4xl pb-8 text-white sm:pb-0">
            <Reveal key={active}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-skybrand-100 backdrop-blur-md">
                Sparsha Logistics LLC
              </span>
              <h1 className="mt-6 text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-8xl">
                {heroSlides[active].title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
                {heroSlides[active].subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-skybrand-500 px-6 py-3.5 font-bold text-white hover:bg-skybrand-600">
                  Explore Services <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur-md hover:bg-white/20">
                  Contact Us
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-3">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.title}
              onClick={() => setActive(index)}
              aria-label={`Show slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${index === active ? "w-10 bg-white" : "w-2.5 bg-white/45 hover:bg-white/75"}`}
            />
          ))}
        </div>

        <div className="absolute bottom-6 right-6 hidden gap-2 sm:flex">
          <button onClick={prev} aria-label="Previous slide" className="rounded-full border border-white/30 bg-black/20 p-3 text-white backdrop-blur-md hover:bg-white/15">
            <ArrowLeft size={19} />
          </button>
          <button onClick={next} aria-label="Next slide" className="rounded-full border border-white/30 bg-black/20 p-3 text-white backdrop-blur-md hover:bg-white/15">
            <ArrowRight size={19} />
          </button>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-8">
        <div className="container-shell text-center">
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
            <span className="text-skybrand-500">Sparsha</span>{" "}
            <span className="text-[#c99a32]">Logistics LLC</span>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Integrated logistics and shipping solutions for businesses that keep moving.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-skybrand-600">What we do</span>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Logistics solutions, built around your cargo.</h2>
              <p className="mt-5 text-slate-500">From road transport to freight forwarding and warehousing, choose the service that fits your movement.</p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, i) => (
              <Reveal key={service.id} delay={i * 70}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 text-center">
              <Link to="/services" className="inline-flex items-center gap-2 font-bold text-skybrand-600 hover:text-skybrand-700">
                View all services <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-skybrand-50">
        <div className="container-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <Reveal direction="left">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-skybrand-600">Why Sparsha</span>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">A dependable partner for every movement.</h2>
              <p className="mt-5 leading-8 text-slate-600">Our approach is simple: understand the requirement, plan the movement, communicate clearly and coordinate every important handover.</p>
              <Link to="/about" className="mt-7 inline-flex items-center gap-2 font-bold text-skybrand-600">Know more about us <ArrowRight size={18} /></Link>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [ShieldCheck, "Reliable coordination", "Clear planning and responsible handling throughout the journey."],
              [Globe2, "Connected movement", "Road, freight, storage and distribution support in one place."],
              [PackageCheck, "Cargo focused", "Solutions shaped around the type, volume and timing of your shipment."],
              [CheckCircle2, "Transparent service", "Straightforward communication from pickup to final delivery."]
            ].map(([Icon, title, text], i) => (
              <Reveal key={title} direction={i % 2 ? "right" : "left"} delay={i * 80}>
                <div className="rounded-3xl border border-skybrand-100 bg-white p-7 shadow-sm">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-skybrand-100 text-skybrand-600"><Icon size={23} /></div>
                  <h3 className="font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-12 text-white sm:px-12">
              <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-skybrand-500/25 blur-3xl" />
              <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-skybrand-300">Need a logistics partner?</p>
                  <h2 className="mt-2 max-w-2xl text-3xl font-black sm:text-4xl">Tell us what you need to move. We’ll help plan the journey.</h2>
                </div>
                <Link to="/contact" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-slate-950 hover:bg-skybrand-50">
                  Contact Us <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}