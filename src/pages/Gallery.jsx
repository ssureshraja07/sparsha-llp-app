import Reveal from "../components/Reveal";
import { gallery } from "../data";

export default function Gallery() {
  return (
    <>
      <section className="bg-skybrand-50">
        <div className="container-shell py-20">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-skybrand-600">Gallery</span>
            <h1 className="mt-3 text-5xl font-black tracking-tight text-slate-950 sm:text-6xl">Work, movement and milestones.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">A visual section for the company’s fleet, cargo movements, facilities, projects and achievements.</p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell columns-1 gap-6 md:columns-2">
          {gallery.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 80}>
              <figure className="group mb-6 break-inside-avoid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <figcaption className="flex items-center justify-between gap-4 p-5">
                  <div>
                    <h2 className="font-bold text-slate-900">{item.title}</h2>
                    <p className="mt-1 text-sm text-slate-500">{item.category}</p>
                  </div>
                  <span className="rounded-full bg-skybrand-50 px-3 py-1 text-xs font-bold text-skybrand-700">Sparsha</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="container-shell">
          <Reveal>
            <div className="rounded-3xl border border-skybrand-100 bg-skybrand-50 p-8 text-center">
              <h2 className="text-2xl font-black text-slate-900">Your achievements belong here.</h2>
              <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-500">Replace the sample gallery images with Sparsha Logistics’ actual fleet photos, project milestones, certificates, client events and completed work.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}