import Link from "next/link";
import Spacer from "./Spacer";

const linkStyle = {
  marginRight: 15,
  fontFamily: "Spartan",
  textDecoration: "none",
  color: "black",
};

const header = {
  position: "fixed",
  padding: "1rem",
  top: 0,
  left: 0,
  width: "100%",
  height: "1rem",
  backgroundColor: "pink",
  color: "white",
};

const footer = {
  position: "fixed",
  padding: "1rem",
  left: 0,
  bottom: 0,
  width: "100%",
  height: "1rem",
  backgroundColor: "pink",
  color: "white",
  display: "flex",
  justifyContent: "center",
};

const Header = () => (
  <div style={header}>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <a style={linkStyle} href="/resume.pdf">
      Resume
    </a>
    <Link href="/poems">
      <a style={linkStyle}>Poetry</a>
    </Link>
    <Link href="/mentor">
      <a style={linkStyle}>Mentor</a>
    </Link>
  </div>
);

const Layout = () => {
  return (
    <>
      {" "}
      <Header /> <Footer />
    </>
  );
};

const Footer = () => (
  <div style={footer}>
    <a style={linkStyle} href="https://github.com/michellewong793">
      {" "}
      Github{" "}
    </a>
    <a style={linkStyle} href="https://linkedin.com/in/michellewong793">
      {" "}
      LinkedIn{" "}
    </a>
    <a
      style={linkStyle}
      href="    https://www.buymeacoffee.com/micheburrito
"
    >
      {" "}
      Buy me a coffee{" "}
    </a>
  </div>
);

export default Layout;
