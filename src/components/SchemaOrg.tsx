import type { Locale } from "@/app/[lang]/dictionaries";

export function SchemaOrg({ lang }: { lang: Locale }) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Hogarvex",
    description:
      "Servicio profesional de fontanería, electricidad y reparaciones en Barcelona y Maresme.",
    url: `https://hogarvex.es/${lang}`,
    telephone: "+34633450417",
    email: "hogarvex@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Lola Anglada 15",
      addressLocality: "Tiana",
      addressRegion: "Barcelona",
      postalCode: "08391",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.4822,
      longitude: 2.2672,
    },
    areaServed: [
      { "@type": "City", name: "Barcelona" },
      { "@type": "AdministrativeArea", name: "Maresme" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    image: "https://hogarvex.es/images/logo.png",
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
    },
  };

  const services = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Home Repair and Maintenance",
    provider: {
      "@type": "LocalBusiness",
      name: "Hogarvex",
    },
    areaServed: [
      { "@type": "City", name: "Barcelona" },
      { "@type": "AdministrativeArea", name: "Maresme" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fontanería / Plumbing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Electricidad / Electrical",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Reparaciones / Repairs",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(services) }}
      />
    </>
  );
}
