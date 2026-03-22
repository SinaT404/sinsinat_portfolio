import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  // Skills data (can be expanded or fetched from an API in the future)
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind",
    "Figma",
  ];

  const backendSkills = [
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Python",
    "Django",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl max-auto px-4">
          <h2 className=" text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-4  ">
              I focus on understanding user needs and turning ideas into simple,
              effective designs. My goal is to build interfaces that are both
              visually appealing and easy to use.
            </p>
          </div>

          {/* Skill Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Front-end</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px-8px_rgba(59,130,2246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Back-end</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px-8px_rgba(59,130,2246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏤 Education </h3>
              <ul className="list-disc lsit-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.S in Computer Science</strong> - RUPP University
                  (2018-2022)
                </li>
                <li>
                  <strong>Graphic Design</strong> - MasterIT Intitude
                  (2022-2023)
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    UI/UX Designer at XYZ Company (2022-Present)
                  </h4>
                  <p>
                    Responsible for designing user interfaces and experiences
                    for web and mobile applications.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Intern at RUPP Startup (2021-2022)
                  </h4>
                  <p>
                    Assisted in building front-end components for web
                    applications and integrated them with back-end services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
