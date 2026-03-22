import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl max-auto px-4">
          <h2 className=" text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                    hover:shadow-[0_2px-8px_rgba(59,130,2246,0.2)] transition"
            >
              <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
              <p className="text-gray-400 mb-4  ">
                A scalable cloud solution for modern businesses and real-time
                monitoring and automate scaling.
              </p>
              <div>
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px-8px_rgba(59,130,2246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ➡
                </a>
              </div>
            </div>

            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                    hover:shadow-[0_2px-8px_rgba(59,130,2246,0.2)] transition"
            >
              <h3 className="text-xl font-bold mb-2">Database</h3>
              <p className="text-gray-400 mb-4  ">
                database management system designed for high performance and
                scalability,
              </p>
              <div>
                {["PostgreSQL", "MongoDB", "Redis", "Firebase"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px-8px_rgba(59,130,2246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ➡
                </a>
              </div>
            </div>

            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                    hover:shadow-[0_2px-8px_rgba(59,130,2246,0.2)] transition"
            >
              <h3 className="text-xl font-bold mb-2">E-Commerce Web App</h3>
              <p className="text-gray-400 mb-4  ">
                Fullstack e-commerce web application with user authentication,
                product management, and secure payment processing.
              </p>
              <div>
                {["Next.js", "React", "TypeScript", "Docker"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px-8px_rgba(59,130,2246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ➡
                </a>
              </div>
            </div>

            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                    hover:shadow-[0_2px-8px_rgba(59,130,2246,0.2)] transition"
            >
              <h3 className="text-xl font-bold mb-2">Design Web App</h3>
              <p className="text-gray-400 mb-4  ">
                Design web application for creating and sharing design projects,
                with real-time collaboration and version control.
              </p>
              <div>
                {[
                  "Figma",
                  "Adobe XD",
                  "Sketch",
                  "Photoshop",
                  "Illustrator",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px-8px_rgba(59,130,2246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ➡
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
