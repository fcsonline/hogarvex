import type { Dictionary } from "@/app/[lang]/dictionaries";

const projectImages = [
  "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
  "/images/proyecto-electricidad.webp",
  "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&q=80",
  "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80",
];

export function Projects({ dict }: { dict: Dictionary }) {
  const projects = [
    { ...dict.projects.project1, image: projectImages[0] },
    { ...dict.projects.project2, image: projectImages[1] },
    { ...dict.projects.project3, image: projectImages[2] },
    { ...dict.projects.project4, image: projectImages[3] },
  ];

  return (
    <section id="proyectos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {dict.projects.title}
          </h2>
          <p className="text-lg text-gray-600">
            {dict.projects.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl aspect-[4/3]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url('${project.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold text-sm">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-xs mt-1">
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
