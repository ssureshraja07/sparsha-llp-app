import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import logo from "../assets/sparsha-logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-5 flex items-center gap-3"><span className="text-2xl font-black text-skybrand-400">Sparsha</span><img src={logo} alt="Sparsha Logistics LLP" className="logo-clean h-14 w-36 rounded-lg bg-white/95 px-2 object-contain" /></div>
          <p className="max-w-xs text-sm leading-7 text-slate-400">
            Reliable logistics and shipping solutions built around timely delivery, clear communication and dependable service.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-white">Quick Links</h3>
          <div className="grid gap-3 text-sm">
            <Link className="hover:text-skybrand-300" to="/">Home</Link>
            <Link className="hover:text-skybrand-300" to="/services">Services</Link>
            <Link className="hover:text-skybrand-300" to="/gallery">Gallery</Link>
            <Link className="hover:text-skybrand-300" to="/about">About Us</Link>
            <Link className="hover:text-skybrand-300" to="/contact">Contact Us</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-white">Contact</h3>
          <div className="grid gap-4 text-sm">
            <a href="tel:+919000000000" className="flex gap-3 hover:text-skybrand-300"><Phone size={18} /> +91 90000 00000</a>
            <a href="https://wa.me/919000000000" className="flex gap-3 hover:text-skybrand-300"><MessageCircle size={18} /> WhatsApp Us</a>
            <a href="mailto:info@sparshlogistics.com" className="flex gap-3 hover:text-skybrand-300"><Mail size={18} /> info@sparshlogistics.com</a>
            <span className="flex gap-3"><MapPin size={18} /> Tamil Nadu, India</span>
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-white">Follow Us</h3>
          <p className="mb-5 text-sm leading-6 text-slate-400">Stay connected for company updates, milestones and logistics insights.</p>
          <div className="flex gap-3">
            <a href="#" aria-label="LinkedIn" className="rounded-full border border-slate-700 p-3 hover:border-skybrand-400 hover:text-skybrand-300"><Linkedin size={18} /></a>
            <a href="#" aria-label="Instagram" className="rounded-full border border-slate-700 p-3 hover:border-skybrand-400 hover:text-skybrand-300"><Instagram size={18} /></a>
            <a href="#" aria-label="Facebook" className="rounded-full border border-slate-700 p-3 hover:border-skybrand-400 hover:text-skybrand-300"><Facebook size={18} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-2 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Sparsha Logistics LLP. All rights reserved.</span>
          <span>Built for dependable movement.</span>
        </div>
      </div>
    </footer>
  );
}