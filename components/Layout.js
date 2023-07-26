import Link from "next/link";
import Spacer from "./Spacer";

const linkStyle = {
  marginRight: 15,
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
  color: "white",
};

const footer = {
  position: "fixed",
  padding: "1rem",
  left: 0,
  bottom: 0,
  width: "100%",
  height: "1rem",
  color: "white",
  display: "flex",
  justifyContent: "center",
};

const Header = () => (
  <div style={header}>
   
  
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
    
    <a style={linkStyle} href="https://linkedin.com/in/michellewong793">
      {" "}
      linkedin{" "}
    </a>
    <a
      style={linkStyle}
      href="    https://www.buymeacoffee.com/micheburrito
"
    >
      {" "}
      buy me a coffee{" "}
    </a>
  </div>
);

export default Layout;
