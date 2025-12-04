import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowUp } from "react-icons/fa";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/24mp2248-mca" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/lekshmi-r-rajan-30b197304/" },
  { name: "Email", url: "mailto:lekshmirajan2345@gmail.com" },
];

const projects = [
  {
    id: 1,
    title: "HealthPass: Digital Patient Pass",
    description: "Web app for managing digital health passes, secure data, and easy access to medical services. React frontend, Node.js backend, MongoDB.",
    github: "https://github.com/24mp2248-mca/HealthPass",
    demo: "#",
    tags: ["React", "Node.js", "MongoDB", "Healthcare"]
  },
  {
    id: 2,
    title: "Mathematical Modeling of Semigroups",
    description: "Research on semigroups in computational frameworks, automata theory, and database applications using abstract algebra.",
    github: "#",
    demo: "#",
    tags: ["Research", "Math", "CS", "Algebra"]
  }
];

export default function Portfolio() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-indigo-100 to-blue-100 text-slate-800 transition-all duration-500">

      {/* NAVBAR */}
      <header className="backdrop-blur-xl bg-white/40 border-b border-white/30 sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-md shadow-purple-300/40 animate-pulse">
              LR
            </div>
            <div>
              <h1 className="text-xl font-semibold">Lekshmi R. Rajan</h1>
              <p className="text-sm text-slate-500">MCA • Full-Stack Developer</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {["about", "projects", "skills", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="hover:text-purple-600 transition-all duration-300 font-medium"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>

          <a
            href="/resume.pdf"
            download
            className="px-4 py-2 rounded-xl bg-purple-600 text-white text-sm shadow hover:bg-purple-700 hidden md:block transition-all duration-300"
          >
            Download CV
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-20">

        {/* HERO */}
        <section data-aos="fade-up" className="mt-12 grid md:grid-cols-2 gap-10 items-center bg-white/40 backdrop-blur-xl p-10 rounded-3xl shadow-lg border border-white/30 hover:shadow-2xl transition-all duration-500">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-700 to-indigo-700 text-transparent bg-clip-text leading-snug animate-text">
              Hi, I'm Lekshmi — I create modern, interactive web experiences.
            </h2>
            <p className="text-slate-700 mt-4 text-lg">
              Full-stack developer passionate about UI/UX, performance, and AI-powered web solutions.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#projects" className="px-5 py-3 rounded-xl bg-purple-600 text-white shadow hover:scale-105 hover:bg-purple-700 transition-all duration-300">
                View Projects
              </a>
              <a href="#contact" className="px-5 py-3 rounded-xl border border-slate-300 hover:bg-white/60 transition-all duration-300">
                Contact Me
              </a>
            </div>
            <div className="flex gap-4 mt-6 text-sm">
              {socialLinks.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="hover:text-purple-600 hover:underline transition-all duration-300">
                  {s.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img 
              src="/me.jpg" 
              alt="Lekshmi Photo" 
              className="w-60 h-60 rounded-3xl object-cover shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </section>

        {/* WHY ME / STATS */}
        <section data-aos="fade-up" className="mt-16 p-8 bg-white/50 backdrop-blur-xl rounded-3xl border border-white/30 shadow-md text-center">
          <h3 className="text-3xl font-semibold mb-6">Why Me?</h3>
          <p className="text-slate-700 mb-6">Blending strong mathematical background with full-stack development skills. Committed to clean code, strong UX, and fast-loading apps.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              ["Projects", "2+"],
              ["Languages", "3"],
              
      
              ["Certifications", "5+"],

              

            ].map(([title, value]) => (
              <div key={title} className="bg-purple-50 rounded-xl p-4 shadow hover:shadow-md transition-all duration-300">
                <p className="text-2xl font-bold text-purple-700">{value}</p>
                <p className="text-sm text-purple-900 mt-1">{title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" data-aos="fade-up" className="mt-16 bg-white/50 backdrop-blur-lg p-8 rounded-3xl border border-white/30 shadow-sm hover:shadow-md transition-all duration-300">
          <h3 className="text-3xl font-semibold mb-4">About Me</h3>
          <p className="text-slate-700 leading-relaxed">
            High-achieving MCA student with strong analytical and problem-solving skills. Building technical expertise in web development and data analytics. Passionate about applying mathematical thinking to technology and learning continuously. I enjoy clean designs, strong UX, and AI-powered tools.
          </p>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              ["Experience", "Fresher"],
              ["Location", "Kerala, India"],
              ["Available for", "Freelance • Full-time • Collaborations"],
            ].map(([title, desc]) => (
              <div key={title} className="p-5 bg-white rounded-xl shadow hover:shadow-md transition-all duration-300 border border-gray-100">
                <h4 className="font-semibold text-lg">{title}</h4>
                <p className="mt-1 text-sm text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" data-aos="fade-up" className="mt-16">
          <h3 className="text-3xl font-semibold mb-4">Selected Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {projects.map((p) => (
              <div key={p.id} data-aos="zoom-in" className="bg-white rounded-2xl p-6 shadow hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1">
                <h4 className="font-semibold text-lg">{p.title}</h4>
                <p className="text-sm text-slate-600 mt-2">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-md">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3 mt-4">
                  <a href={p.github} className="text-xs px-3 py-2 border rounded-lg hover:bg-slate-50 transition-all duration-300" target="_blank">
                    Code
                  </a>
                  {p.demo !== "#" && <a href={p.demo} className="text-xs px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300" target="_blank">Live</a>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" data-aos="fade-up" className="mt-16 bg-white/50 backdrop-blur-xl p-8 rounded-3xl border border-white/30 shadow-sm hover:shadow-md transition-all duration-300">
          <h3 className="text-3xl font-semibold mb-4">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {['React', 'JavaScript', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'Python', 'Git'].map((s) => (
              <div key={s} className="bg-white rounded-xl p-4 text-sm text-slate-700 shadow hover:shadow-md transition-all duration-300">{s}</div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" data-aos="fade-up" className="mt-16 bg-white/60 backdrop-blur-xl p-8 rounded-3xl border border-white/30 shadow-sm hover:shadow-md transition-all duration-300">
          <h3 className="text-3xl font-semibold mb-6">Contact</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-slate-700 mb-4">Want to discuss a project or opportunity? Send a message!</p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li><strong>Email:</strong> lekshmirajan2345@gmail.com</li>
                <li><strong>Phone:</strong> +91 7736660261</li>
              </ul>
              <div className="mt-4 flex gap-3">
                {socialLinks.map((s) => (
                  <a key={s.name} href={s.url} className="text-sm px-3 py-2 border rounded-lg hover:bg-white/70 transition-all duration-300" target="_blank">{s.name}</a>
                ))}
              </div>
            </div>

            {/* Formspree Form */}
            <form action="https://formspree.io/f/yourFormID" method="POST" className="bg-white p-5 rounded-xl shadow">
              <div className="space-y-4">
                <div>
                  <label className="text-sm">Name</label>
                  <input name="name" required className="w-full mt-1 p-2 border rounded-lg" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm">Email</label>
                  <input name="email" type="email" required className="w-full mt-1 p-2 border rounded-lg" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="text-sm">Message</label>
                  <textarea name="message" rows={4} required className="w-full mt-1 p-2 border rounded-lg" placeholder="Tell me about your project..." />
                </div>
                <button className="w-full py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all duration-300">Send Message</button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-6 border-t bg-white/50 backdrop-blur-xl mt-12 shadow-inner">
        <div className="max-w-6xl mx-auto px-6 text-sm text-slate-600 flex justify-between">
          <p>© {new Date().getFullYear()} Lekshmi R. Rajan — Built with React & Tailwind</p>
          <p className="hidden sm:block">Made with ❤️ in India</p>
        </div>
      </footer>

      {/* BACK TO TOP BUTTON */}
      {showTop && (
        <button onClick={scrollToTop} className="fixed bottom-8 right-8 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300">
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}
