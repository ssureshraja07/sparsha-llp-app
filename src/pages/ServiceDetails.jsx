import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Phone } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Reveal from "../components/Reveal";
import { services } from "../data";

export default function ServiceDetails() {
  const { serviceId } = useParams();
  const service = services.find((item) => item.id === serviceId);

  if (!service) {
    return (
      <section className="section-pad">
        <div className="container-shell text-center">
          <h1 className="text-4xl font-black">Service not found</h1>
          <Link to="/services" className="mt-5 inline-flex font-bold text-skybrand-600">Back to Services</Link>
        </div>
      </section>
    );
  }

  const currentIndex = services.findIndex((item) => item.id === service.id);
  const related = [
    services[(currentIndex + 1) % services.length],
    services[(currentIndex + 2) % services.length],
    services[(currentIndex + 3) % services.length]
  ];

  return (
    <>
      <section className="relative h-[320px] overflow-hidden bg-slate-950">
        <img src={service.image} alt={service.title} className="absolute inset-0 h-60 w-60 object-cover" />
        <div className="absolute inset-0 bg-skybrand-800/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/45 to-skybrand-700/20" />
        <div className="container-shell relative flex h-full flex-col justify-center text-white">
          <Reveal>
            <h1 className="text-4xl font-black sm:text-5xl">{service.title}</h1>
            <div className="mt-4 flex items-center gap-3 text-sm font-semibold text-white/85">
              <Link to="/" className="hover:text-white">Home</Link>
              <ChevronRight size={16} />
              <Link to="/services" className="hover:text-white">Services</Link>
              <ChevronRight size={16} />
              <span>{service.title}</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-skybrand-600">Sparsha Logistics LLP</span>
            <h2 className="mt-3 max-w-5xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
              {service.detailHeading}
            </h2>
            <p className="mt-7 max-w-5xl text-base leading-8 text-slate-600 sm:text-lg">
              {service.detailText}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
            <Reveal direction="left">
              <div>
                <h3 className="text-3xl font-black tracking-tight text-slate-950">How our {service.title.toLowerCase()} service works</h3>
                <p className="mt-5 leading-8 text-slate-600">
                  We begin by understanding the shipment requirement, origin, destination, cargo characteristics and expected timeline. From there, our team coordinates the practical movement plan and keeps the important handovers connected.
                </p>
                <p className="mt-4 leading-8 text-slate-600">
                  The objective is straightforward: reduce unnecessary complexity for the customer while keeping the logistics journey organized. Our team can coordinate the movement stages, documentation requirements and delivery communication relevant to the service.
                </p>
                <div className="mt-7 grid gap-3">
                  {service.points.map((point) => (
                    <div key={point} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-skybrand-500" size={20} />
                      <span className="font-semibold text-slate-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={100}>
              <img src={service.image} alt={`${service.title} logistics`} className="h-[440px] w-full rounded-[2rem] object-cover shadow-soft" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="container-shell">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-skybrand-600">Why Sparsha</span>
            <h2 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Practical support for every important stage of the movement.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {service.whyPoints.map((point, index) => (
              <Reveal key={point} delay={index * 70}>
                <div className="flex h-full gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-skybrand-100 font-black text-skybrand-700">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{point}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Coordinated around your shipment requirement, timing and destination so the next step is easier to manage.
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <Reveal>
            <div className="rounded-[2rem] bg-slate-950 px-7 py-10 text-white sm:px-12">
              <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-skybrand-300">Have a shipment requirement?</p>
                  <h2 className="mt-2 text-3xl font-black sm:text-4xl">Let’s discuss your {service.title.toLowerCase()} requirement.</h2>
                  <p className="mt-3 max-w-2xl leading-7 text-slate-400">Call or WhatsApp our team and share your origin, destination, cargo type and timeline.</p>
                </div>
                <Link to="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-slate-950 hover:bg-skybrand-50">
                  Contact Us <Phone size={17} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-shell">
          <Reveal>
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-skybrand-600">Explore More</span>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">Related Services</h2>
              </div>
              <Link to="/services" className="inline-flex items-center gap-2 font-bold text-skybrand-600">All Services <ArrowRight size={17} /></Link>
            </div>
          </Reveal>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {related.map((item, index) => (
              <Reveal key={item.id} delay={index * 70}>
                <Link to={`/services/${item.id}`} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white">
                  <img src={item.image} alt={item.title} className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="p-5">
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{item.short}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}