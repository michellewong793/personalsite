import Link from "next/link";
import Image from "next/image";
import projects from "../../data/projects";

const page = {
  minHeight: "100vh",
  maxWidth: 680,
  margin: "0 auto",
  padding: "5rem 1.5rem 4rem",
  boxSizing: "border-box",
};

const backLink = {
  fontSize: 13,
  textDecoration: "none",
  color: "black",
  opacity: 0.5,
  display: "inline-block",
  marginBottom: "3rem",
};

const tag = {
  display: "inline-block",
  fontSize: 11,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  opacity: 0.45,
  marginBottom: "0.5rem",
};

const meta = {
  display: "flex",
  gap: "2rem",
  margin: "1.5rem 0 2.5rem",
  fontSize: 13,
  opacity: 0.55,
};

const divider = {
  border: "none",
  borderTop: "1px solid #eee",
  margin: "2.5rem 0",
};

const listItem = {
  marginBottom: "0.75rem",
  lineHeight: 1.65,
  fontSize: 14,
};

const liveBtn = {
  display: "inline-block",
  marginTop: "2rem",
  padding: "0.65rem 1.3rem",
  background: "black",
  color: "white",
  textDecoration: "none",
  fontSize: 13,
  letterSpacing: "0.03em",
};

export default function ProjectPage({ project }) {
  if (!project) return null;

  return (
    <div style={page}>
      <Link href="/" style={backLink}>
        ← back
      </Link>

      <span style={tag}>{project.role} · {project.year}</span>
      <h1 style={{ margin: "0.25rem 0 0", fontSize: "2rem", fontWeight: 700 }}>
        {project.name}
      </h1>

      <div style={meta}>
        <span>{project.tech}</span>
      </div>

      {project.image && (
        <div style={{ margin: "0 0 2rem", borderRadius: 4, overflow: "hidden", border: "1px solid #eee" }}>
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            style={{ width: "100%", display: "block" }}
          />
        </div>
      )}

      <p style={{ fontSize: 15, lineHeight: 1.7, margin: 0 }}>
        {project.description}
      </p>

      <hr style={divider} />

      <h2 style={{ fontSize: "1rem", fontWeight: 700, margin: "0 0 1rem" }}>
        What I worked on
      </h2>
      <ul style={{ paddingLeft: "1.25rem", margin: 0 }}>
        {project.contributions.map((c, i) => (
          <li key={i} style={listItem}>
            {c}
          </li>
        ))}
      </ul>

      <hr style={divider} />

      <h2 style={{ fontSize: "1rem", fontWeight: 700, margin: "0 0 0.75rem" }}>
        Outcome
      </h2>
      <p style={{ fontSize: 14, lineHeight: 1.7, margin: 0 }}>
        {project.outcome}
      </p>

      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        style={liveBtn}
      >
        Visit live site ↗
      </a>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const project = projects.find((p) => p.slug === params.slug) || null;
  return { props: { project } };
}

export async function getStaticPaths() {
  return {
    paths: projects.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}
