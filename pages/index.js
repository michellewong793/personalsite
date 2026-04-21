import Link from "next/link";
import projects from "../data/projects";

const scrollContainer = {
  height: "100vh",
  overflowY: "scroll",
  scrollSnapType: "y mandatory",
};

const section = {
  height: "100vh",
  scrollSnapAlign: "start",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
  boxSizing: "border-box",
};

const btnPrimary = {
  padding: "0.6rem 1.2rem",
  background: "#b7e366",
  color: "white",
  textDecoration: "none",
  fontSize: 13,
  letterSpacing: "0.03em",
};

const btnSecondary = {
  padding: "0.6rem 1.2rem",
  border: "1px solid black",
  color: "black",
  textDecoration: "none",
  fontSize: 13,
  letterSpacing: "0.03em",
};

const linkStyle = {
  fontSize: 13,
  textDecoration: "none",
  color: "black",
  opacity: 0.6,
};

export default function Index() {
  return (
    <div style={scrollContainer}>
      {/* Hero */}
      <section style={section}>
        <h1 style={{ margin: 0, fontSize: "2rem", fontWeight: 700 }}>
          hi! I'm Miche. I like building beautiful things.
        </h1>
        <p
          style={{
            marginTop: "1rem",
            maxWidth: 440,
            textAlign: "center",
            lineHeight: 1.6,
            fontSize: 14,
          }}
        >
          I've been an engineer at various startups. Here's some live codebases I've contributed to in the past. 
        </p>
        <a
          href="https://github.com/michellewong793"
          style={{ ...linkStyle, marginTop: "0.75rem" }}
        >
          github: michellewong793
        </a>
        <p
          style={{
            marginTop: "3rem",
            fontSize: 11,
            opacity: 0.35,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          scroll to see projects ↓
        </p>
      </section>

      {/* Project sections */}
      {projects.map((p, i) => (
        <section
          key={p.slug}
          style={{
            ...section,
            background: i % 2 === 0 ? "#f9f9f9" : "#fff",
          }}
        >
          <p
            style={{
              fontSize: 11,
              opacity: 0.35,
              letterSpacing: "0.1em",
              margin: "0 0 0.75rem",
              textTransform: "uppercase",
            }}
          >
            {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </p>
          <h2 style={{ margin: "0 0 0.4rem", fontSize: "1.5rem", fontWeight: 700 }}>
            {p.name}
          </h2>
          <p style={{ fontSize: 12, opacity: 0.5, margin: "0 0 1rem" }}>
            {p.tech}
          </p>
          <p
            style={{
              maxWidth: 440,
              textAlign: "center",
              fontSize: 14,
              lineHeight: 1.6,
              margin: "0 0 1.75rem",
            }}
          >
            {p.tagline}
          </p>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <Link href={`/projects/${p.slug}`} style={btnPrimary}>
              View project →
            </Link>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              style={btnSecondary}
            >
              Live site ↗
            </a>
          </div>
        </section>
      ))}

      {/* Footer section */}
      <section style={{ ...section, height: "auto", paddingBottom: "3rem" }}>
        <p style={{ fontSize: 13, opacity: 0.5 }}>
          <a href="https://linkedin.com/in/michellewong793" style={linkStyle}>
            LinkedIn
          </a>
          {" · "}
        </p>
      </section>
    </div>
  );
}
