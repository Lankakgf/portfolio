import "./App.css";
import me from "./assets/me.jpg";

const NAME = "Devendra Kumar";
const EMAIL = "dim77075@gmail.com";
const LINKS = {
  github: "https://github.com/Lankakgf",
  linkedin: "https://www.linkedin.com/in/devendra-kumar-105961427",
  instagram: "https://instagram.com/",
};

const icon = (name, type = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${type}.svg`;

const techs = [
  { name: "Python", img: icon("python") },
  { name: "Django", img: icon("django", "plain") },
  { name: "React", img: icon("react") },
  { name: "HTML5", img: icon("html5") },
  { name: "CSS3", img: icon("css3") },
  { name: "JavaScript", img: icon("javascript") },
  { name: "Bootstrap", img: icon("bootstrap") },
  { name: "SQLite", img: icon("sqlite") },
  { name: "PostgreSQL", img: icon("postgresql") },
  { name: "Git", img: icon("git") },
  { name: "GitHub", img: icon("github") },
  { name: "VS Code", img: icon("vscode") },
];

const skills = [
  { title: "Django Full Stack", emoji: "🚀", text: "Models, views, templates, auth, REST APIs, admin, deployment", color: "c1" },
  { title: "DSA", emoji: "🧠", text: "Arrays, strings, linked list, stack, queue, trees, graphs, recursion, sorting, searching, DP", color: "c2" },
  { title: "Frontend", emoji: "🎨", text: "React, HTML5, CSS3, JavaScript, responsive design", color: "c3" },
  { title: "Core CS", emoji: "💻", text: "OOP, DBMS, Operating Systems, Computer Networks, SQL", color: "c4" },
];

const coreCS = ["OOP", "DBMS", "Operating System", "Computer Networks", "SQL", "Data Structures", "Algorithms", "System Design Basics"];

const education = [
  { degree: "MCA", place: "Pondicherry", status: "Pursuing", emoji: "🎓", color: "c4" },
  { degree: "BCA", place: "Completed", status: "Graduated", emoji: "📜", color: "c3" },
];

const projects = [
  {
    title: "Recipe Management System",
    emoji: "🍲",
    color: "c5",
    live: "https://recipehub-s1y9.onrender.com/",
    desc: "A full stack web app to add, edit, search and organize recipes with categories, ingredients and images.",
    features: ["User signup / login", "CRUD recipes", "Search & category filter", "Image upload", "Admin panel"],
    stack: ["Python", "Django", "HTML", "CSS", "JavaScript", "Bootstrap", "SQLite"],
  },
  {
    title: "LoveSphere: Social Dating Platform",
    emoji: "💖",
    color: "c6",
    live: "https://dating-app-4ifn.onrender.com/",
    desc: "A full stack social dating web app where people create profiles, discover others with swipe cards, match, chat and join live video rooms.",
    features: ["Swipe-based discovery & matching", "Real-time chat with matches", "Private, group & public live rooms", "Social feed", "Custom user model & authentication"],
    stack: ["Python", "Django", "HTML", "CSS", "JavaScript", "WebSockets", "PostgreSQL"],
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="blob b1" />
      <div className="blob b2" />
      <div className="blob b3" />

      <nav className="nav">
        <span className="logo">&lt;{NAME.split(" ")[0]}/&gt;</span>
        <div className="navlinks">
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#tech">Tech</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero">
        <img className="avatar" src={me} alt={NAME} />
        <p className="hi">👋 Hello, I'm</p>
        <h1 className="gradtext">{NAME}</h1>
        <h2>Django Full Stack Developer</h2>
        <p className="sub">
          BCA graduate and MCA student at Pondicherry. I build full stack web apps with Django, React and clean UI,
          and I practice DSA and core CS every day.
        </p>
        <div className="btns">
          <a className="btn primary" href="#projects">View Projects</a>
          <a className="btn ghost" href={`mailto:${EMAIL}`}>Hire Me</a>
        </div>
      </header>

      <section id="education" className="section">
        <h2 className="title">🎓 Education</h2>
        <div className="grid two">
          {education.map((e) => (
            <div key={e.degree} className={`card skill ${e.color}`}>
              <div className="emoji">{e.emoji}</div>
              <h3>{e.degree}</h3>
              <p>{e.place} • {e.status}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <h2 className="title">✨ Skills</h2>
        <div className="grid">
          {skills.map((s) => (
            <div key={s.title} className={`card skill ${s.color}`}>
              <div className="emoji">{s.emoji}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
        <h3 className="subtitle">Core CS Subjects</h3>
        <div className="chips">
          {coreCS.map((c) => (
            <span key={c} className="chip">{c}</span>
          ))}
        </div>
      </section>

      <section id="tech" className="section">
        <h2 className="title">🛠️ Technologies I Use</h2>
        <div className="techgrid">
          {techs.map((t) => (
            <div key={t.name} className="tech">
              <img src={t.img} alt={t.name} />
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <h2 className="title">📁 Projects</h2>
        <div className="grid two">
          {projects.map((p) => (
            <div key={p.title} className={`card project ${p.color}`}>
              <div className="emoji big">{p.emoji}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <ul>
                {p.features.map((f) => (
                  <li key={f}>✅ {f}</li>
                ))}
              </ul>
              <div className="chips small">
                {p.stack.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
              <div style={{ marginTop: 22 }}>
                <a className="btn gh" href={p.live} target="_blank" rel="noreferrer">
                  🔗 Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="sub" style={{ marginTop: 24, fontSize: ".85rem" }}>
          Note: live demos are hosted on Render, so the first load can take up to a minute to wake up.
        </p>
      </section>

      <section id="contact" className="section contact">
        <h2 className="title">📬 Let's Connect</h2>
        <p className="sub">{EMAIL}</p>
        <div className="btns">
          <a className="btn gh" href={LINKS.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn li" href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn ig" href={LINKS.instagram} target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </section>

      <footer className="footer">Made with ❤️ using React • © {new Date().getFullYear()} {NAME}</footer>
    </div>
  );
}