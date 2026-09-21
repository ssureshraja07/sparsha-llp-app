import { Link } from "react-router-dom";
import * as Icons from "lucide-react";

export default function ServiceCard({ service }) {
  const Icon = Icons[service.icon] || Icons.Truck;

  return (
    <Link
      to={`/services/${service.id}`}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-soft"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-skybrand-600 shadow-lg">
          <Icon size={21} />
        </div>
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between gap-4">
          <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
          <span className="text-skybrand-500 transition group-hover:translate-x-1">→</span>
        </div>
        <p className="text-sm leading-6 text-slate-500">{service.short}</p>
      </div>
    </Link>
  );
}