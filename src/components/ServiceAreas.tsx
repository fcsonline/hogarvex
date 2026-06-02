import type { Dictionary } from "@/app/[lang]/dictionaries";
import { SERVICE_AREAS } from "@/lib/serviceAreas";

export function ServiceAreas({ dict }: { dict: Dictionary }) {
  return (
    <section id="zonas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {dict.serviceAreas.title}
          </h2>
          <p className="text-lg text-gray-600">{dict.serviceAreas.subtitle}</p>
        </div>

        <ul className="flex flex-wrap justify-center gap-3">
          {SERVICE_AREAS.map((city) => (
            <li
              key={city}
              className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
            >
              <svg
                className="w-4 h-4 text-gold shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {city}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
