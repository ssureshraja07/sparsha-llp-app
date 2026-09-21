import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Reveal from "../components/Reveal";

export default function Contact() {
  const contacts = [
    {
      Icon: Phone,
      title: "Call Us",
      text: "+91 90000 00000",
      href: "tel:+919000000000",
      action: "Call now"
    },
    {
      Icon: MessageCircle,
      title: "WhatsApp Us",
      text: "Chat with our logistics team",
      href: "https://wa.me/919000000000",
      action: "Open WhatsApp"
    },
    {
      Icon: Mail,
      title: "Mail Us",
      text: "info@sparshlogistics.com",
      href: "mailto:info@sparshlogistics.com",
      action: "Send email"
    },
    {
      Icon: MapPin,
      title: "Locate Us",
      text: "Tamil Nadu, India",
      href: "#map",
      action: "View location"
    }
  ];

  return (
    <>
      <section className="bg-skybrand-50">
        <div className="container-shell py-20">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-skybrand-600">Contact Us</span>
            <h1 className="mt-3 max-w-3xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl">Let’s move your next shipment forward.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Call, WhatsApp or email us. Our team is ready to discuss your logistics and shipping requirement.</p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-skybrand-600">Get in touch</span>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Choose the easiest way to reach us.</h2>
              <p className="mt-5 leading-7 text-slate-500">For a quick response, use WhatsApp or call our team. For detailed requirements and documents, email works well too.</p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contacts.map(({ Icon, title, text, href, action }, index) => (
              <Reveal key={title} delay={index * 80}>
                <a href={href} className="group block h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-skybrand-200 hover:shadow-soft">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-skybrand-50 text-skybrand-600 transition group-hover:bg-skybrand-500 group-hover:text-white">
                    <Icon size={25} />
                  </div>
                  <h3 className="mt-6 text-xl font-black text-slate-900">{title}</h3>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">{text}</p>
                  <span className="mt-5 inline-block text-sm font-bold text-skybrand-600">{action} →</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="map" className="pb-20">
        <div className="container-shell">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100">
              <div className="flex min-h-80 items-center justify-center bg-[radial-gradient(circle_at_30%_30%,rgba(20,155,208,.2),transparent_35%),linear-gradient(135deg,#f8fafc,#e2e8f0)] p-10 text-center">
                <div>
                  <MapPin className="mx-auto text-skybrand-500" size={40} />
                  <h2 className="mt-4 text-2xl font-black text-slate-900">Sparsha Logistics LLP</h2>
                  <p className="mt-2 max-w-lg text-slate-500">Tamil Nadu, India. Replace this area with the company’s exact office address or Google Maps embed when the location is finalized.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}