import Reveal from "../components/Reveal";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

export default function Services() {
  return (
    <>
      <section className="bg-skybrand-50">
        <div className="container-shell py-20">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-skybrand-600">Our Services</span>
            <h1 className="mt-3 max-w-3xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl">End-to-end logistics for every stage of movement.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Explore our service portfolio and open any service to view its dedicated details.</p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 70}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}