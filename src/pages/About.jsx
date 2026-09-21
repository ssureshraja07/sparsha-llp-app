import { ArrowRight, Eye, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const aboutImage = "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1500&q=85";

export default function About() {
  return (
    <>
      <section className="bg-skybrand-50">
        <div className="container-shell py-20">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-skybrand-600">About Us</span>
            <h1 className="mt-3 max-w-4xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl">One motive: make logistics simpler, clearer and more dependable.</h1>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal direction="left">
            <img src={aboutImage} alt="Logistics cargo operation" className="h-[520px] w-full rounded-[2rem] object-cover shadow-soft" />
          </Reveal>
          <Reveal direction="right">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-skybrand-600">Our Company</span>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">Sparsha Logistics LLP</h2>
              <p className="mt-6 leading-8 text-slate-600">
                Sparsha Logistics LLP is envisioned as an integrated logistics and shipping partner supporting businesses with transportation, freight movement, warehousing, distribution and related logistics services.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                Our motive is to bring different parts of the logistics journey together through responsible coordination, timely communication and solutions that fit the customer’s cargo.
              </p>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 font-bold text-skybrand-600">Work with us <ArrowRight size={18} /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="container-shell">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-skybrand-600">Our Direction</span>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">Purpose that guides every shipment.</h2>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              [Target, "Our Motive", "Support all kinds of logistics and shipping requirements through coordinated, practical and customer-focused services."],
              [Eye, "Our Vision", "Build a dependable logistics network known for service clarity, operational discipline and long-term relationships."],
              [Users, "Our Values", "Responsibility, transparency, respect, timely communication and a commitment to doing the basics exceptionally well."]
            ].map(([Icon, title, text], i) => (
              <Reveal key={title} delay={i * 90}>
                <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-skybrand-100 text-skybrand-600"><Icon size={25} /></div>
                  <h3 className="mt-6 text-xl font-black text-slate-900">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-500">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}