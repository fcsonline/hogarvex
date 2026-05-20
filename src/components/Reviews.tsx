import type { Dictionary } from "@/app/[lang]/dictionaries";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-gold"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews({ dict }: { dict: Dictionary }) {
  const reviews = [
    dict.reviews.review1,
    dict.reviews.review2,
    dict.reviews.review3,
    dict.reviews.review4,
  ];

  return (
    <section id="resenas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {dict.reviews.title}
          </h2>
          <p className="text-lg text-gray-600">
            {dict.reviews.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100"
            >
              <Stars rating={review.rating} />
              <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="font-semibold text-sm text-gray-900">
                  {review.name}
                </p>
                <p className="text-xs text-gray-500">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
