export default function Portfolio() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-20 py-24">
          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* LEFT */}
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400 text-cyan-300 text-sm mb-6">
                Senior .NET Core API Developer
              </div>

              <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
                Akash <span className="text-cyan-400">Rasal</span>
              </h1>

              <h2 className="mt-5 text-2xl text-slate-300 font-semibold">
                Lead Senior Software Engineer
              </h2>

              <p className="mt-8 text-slate-400 text-lg leading-relaxed">
                Passionate and results-driven Software Engineer with 8+ years of experience in designing enterprise-grade applications, scalable RESTful APIs, microservices, and cloud-ready solutions using .NET Core technologies.
              </p>

              <div className="flex flex-wrap gap-5 mt-10">
                <a
                  href="mailto:akashtrasal@gmail.com"
                  className="bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-2xl font-bold shadow-2xl"
                >
                  Hire Me
                </a>

                <a
                  href="https://www.linkedin.com/in/akash-rasal-56254477/"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-cyan-400 hover:bg-cyan-400 hover:text-black transition px-8 py-4 rounded-2xl font-bold"
                >
                  LinkedIn
                </a>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-5 mt-14">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center">
                  <h3 className="text-4xl font-bold text-cyan-400">8+</h3>
                  <p className="text-slate-400 mt-2">Years Experience</p>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center">
                  <h3 className="text-4xl font-bold text-cyan-400">25+</h3>
                  <p className="text-slate-400 mt-2">Projects Delivered</p>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center">
                  <h3 className="text-4xl font-bold text-cyan-400">10+</h3>
                  <p className="text-slate-400 mt-2">Technologies</p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-10 shadow-2xl backdrop-blur-lg">
              <h3 className="text-3xl font-bold mb-8 text-cyan-400">
                Professional Details
              </h3>

              <div className="space-y-6">

                <div>
                  <p className="text-slate-400">Email</p>
                  <h4 className="text-xl font-semibold">
                    akashtrasal@gmail.com
                  </h4>
                </div>

                <div>
                  <p className="text-slate-400">Phone</p>
                  <h4 className="text-xl font-semibold">
                    +91 9730470073
                  </h4>
                </div>

                <div>
                  <p className="text-slate-400">Location</p>
                  <h4 className="text-xl font-semibold">
                    Pune, Maharashtra, India
                  </h4>
                </div>

                <div>
                  <p className="text-slate-400">Specialization</p>
                  <h4 className="text-xl font-semibold">
                    .NET Core | REST API | Microservices
                  </h4>
                </div>

                <div>
                  <p className="text-slate-400">Current Company</p>
                  <h4 className="text-xl font-semibold">
                    NCSI Technologies Pvt Ltd
                  </h4>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


<section className="bg-slate-900/40 py-24">
  <div className="max-w-7xl mx-auto px-6 md:px-20">

    <h2 className="text-5xl font-bold text-center mb-6">
      AI & Modern Technology Expertise
    </h2>

    <p className="text-center text-slate-400 text-lg max-w-4xl mx-auto leading-relaxed mb-16">
      Experienced in building intelligent enterprise applications using Artificial Intelligence integrations,
      cloud-ready architectures, automation workflows, scalable APIs, and modern frontend technologies.
    </p>

    <div className="grid md:grid-cols-4 gap-6">

      {[
        "Artificial Intelligence",
        "Machine Learning Integration",
        "OpenAI API",
        "ChatGPT Integration",
        "AI Automation",
        "Prompt Engineering",
        "REST API Architecture",
        "Microservices",
        "JWT Authentication",
        "Cloud Deployment",
        "Azure DevOps",
        "GitHub Actions",
        "Angular 15",
        "React JS",
        "Node JS",
        "SQL Server 2022"
      ].map((tech, index) => (

        <div
          key={index}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 transition duration-300 text-center"
        >
          <h3 className="text-lg font-bold text-cyan-400">
            {tech}
          </h3>
        </div>

      ))}

    </div>
  </div>
</section>

<section className="max-w-7xl mx-auto px-6 md:px-20 py-24">

  <h2 className="text-5xl font-bold text-center mb-16">
    Professional Achievements
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    {[
      {
        title: "Enterprise ERP Solutions",
        desc: "Successfully developed and deployed large-scale university ERP systems serving thousands of students and administrators."
      },
      {
        title: "Secure API Development",
        desc: "Designed highly secure RESTful APIs with JWT authentication, RBAC, OAuth2, and enterprise-level authorization strategies."
      },
      {
        title: "AI-Powered Platforms",
        desc: "Worked on AI-enabled dashboards, automation workflows, analytics systems, and modern intelligent application integrations."
      },
      {
        title: "Cloud & DevOps",
        desc: "Implemented CI/CD pipelines, automated deployments, IIS hosting, Azure DevOps workflows, and production release management."
      },
      {
        title: "Performance Optimization",
        desc: "Optimized application performance using asynchronous programming, caching strategies, SQL query tuning, and scalable architectures."
      },
      {
        title: "Technical Leadership",
        desc: "Led development teams, conducted architecture reviews, mentored developers, and contributed to enterprise technical decisions."
      }
    ].map((item, index) => (

      <div
        key={index}
        className="bg-slate-900 border border-slate-800 rounded-3xl p-10 hover:border-cyan-400 transition duration-300"
      >
        <h3 className="text-2xl font-bold text-cyan-400 mb-6">
          {item.title}
        </h3>

        <p className="text-slate-400 text-lg leading-relaxed">
          {item.desc}
        </p>

      </div>

    ))}

  </div>

</section>

<section className="bg-slate-900/40 py-24">

  <div className="max-w-7xl mx-auto px-6 md:px-20">

    <h2 className="text-5xl font-bold text-center mb-16">
      Certifications & Learning
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      {[
        ".NET 7 Web Application with Web API & Entity Framework",
        "Complete ASP.NET MVC 5 Development",
        "Full Stack Web Development with C# & SQL Server",
        "Modern JavaScript & React JS Development",
        "Node JS Backend Development",
        "RESTful API Design & Microservices",
        "AI & Automation Integration",
        "Cloud Deployment & DevOps Fundamentals"
      ].map((cert, index) => (

        <div
          key={index}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 transition duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="text-3xl">
              ✅
            </div>

            <h3 className="text-xl font-semibold text-slate-200">
              {cert}
            </h3>
          </div>

        </div>

      ))}

    </div>
  </div>
</section>

      <section className="max-w-7xl mx-auto px-6 md:px-20 py-24">

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-[40px] p-14 text-center">

            <h2 className="text-5xl font-bold mb-8">
              Let's Build Something Amazing
            </h2>

            <p className="text-slate-300 text-xl leading-relaxed max-w-4xl mx-auto">
              I am passionate about creating scalable enterprise applications, AI-powered solutions,
              modern APIs, and cloud-ready architectures that solve real-world business challenges.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-12">

              <a
                href="mailto:akashtrasal@gmail.com"
                className="bg-cyan-500 hover:bg-cyan-600 transition px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl"
              >
                Contact Me
              </a>

              <a
                href="https://www.linkedin.com/in/akash-rasal-56254477/"
                target="_blank"
                rel="noreferrer"
                className="border border-cyan-400 hover:bg-cyan-400 hover:text-black transition px-10 py-5 rounded-2xl font-bold text-lg"
              >
                Connect on LinkedIn
              </a>

            </div>

          </div>

      </section>

      {/* ABOUT */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-5xl font-bold mb-8">
              About Me
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed">
              I specialize in designing and building secure, scalable, and high-performance enterprise applications using ASP.NET Core, MVC, SQL Server, and Angular technologies.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed mt-6">
              I have extensive experience working on university ERP systems, enterprise APIs, cloud integrations, authentication systems, payment gateway integrations, and CI/CD deployment pipelines.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed mt-6">
              My expertise includes RESTful API architecture, JWT authentication, Entity Framework Core, microservices, Swagger documentation, performance optimization, and scalable backend development.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">

            {[
              "ASP.NET Core",
              "REST API",
              "Angular",
              "SQL Server",
              "Microservices",
              "Azure DevOps",
              "Entity Framework",
              "Swagger"
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-cyan-400 transition"
              >
                <h3 className="text-xl font-bold text-cyan-400">
                  {skill}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-slate-900/40 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-20">

          <h2 className="text-5xl font-bold text-center mb-16">
            Professional Experience
          </h2>

          <div className="space-y-10">

            {[
              {
                company: "NCSI Technologies Pvt Ltd",
                role: "Lead Senior Software Engineer",
                duration: "2025 - Present",
                desc: "Leading enterprise API architecture, microservices implementation, CI/CD pipelines, and secure authentication systems."
              },
              {
                company: "Neosoft Technologies Pvt Ltd",
                role: "Senior Software Engineer",
                duration: "2023 - 2025",
                desc: "Designed scalable REST APIs, implemented secure integrations, and developed enterprise backend systems."
              },
              {
                company: "Master Soft ERP Solutions",
                role: "Software Developer",
                duration: "2016 - 2023",
                desc: "Developed university ERP systems, online admission portals, payment gateway integrations, and centralized campus solutions."
              }
            ].map((item, index) => (

              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-10 hover:border-cyan-400 transition"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">

                  <div>
                    <h3 className="text-3xl font-bold text-cyan-400">
                      {item.company}
                    </h3>

                    <p className="text-xl mt-3 font-semibold">
                      {item.role}
                    </p>
                  </div>

                  <div className="mt-4 md:mt-0 text-slate-400 text-lg">
                    {item.duration}
                  </div>

                </div>

                <p className="text-slate-400 text-lg mt-6 leading-relaxed">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 py-24">

        <h2 className="text-5xl font-bold text-center mb-16">
          Services & Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "API Development",
              desc: "Building secure, scalable, and enterprise-grade RESTful APIs using ASP.NET Core."
            },
            {
              title: "Enterprise Applications",
              desc: "Developing enterprise ERP systems, portals, and business management applications."
            },
            {
              title: "Cloud & Deployment",
              desc: "CI/CD implementation, IIS deployment, Azure DevOps, and cloud-ready solutions."
            }
          ].map((service, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-10 hover:border-cyan-400 transition"
            >
              <h3 className="text-3xl font-bold text-cyan-400 mb-6">
                {service.title}
              </h3>

              <p className="text-slate-400 text-lg leading-relaxed">
                {service.desc}
              </p>

            </div>

          ))}

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-12 text-center">

        <h3 className="text-3xl font-bold">
          Akash <span className="text-cyan-400">Rasal</span>
        </h3>

        <p className="text-slate-400 mt-4 text-lg">
          Lead Senior Software Engineer | .NET Core API Expert
        </p>

        <div className="flex justify-center gap-8 mt-6 text-slate-300 flex-wrap">
          <span>📧 akashtrasal@gmail.com</span>
          <span>📞 +91 9730470073</span>
          <span>📍 Pune, India</span>
        </div>

        <p className="text-slate-500 mt-10">
          © 2026 Akash Rasal. All rights reserved.
        </p>

      </footer>

    </div>
  );
}