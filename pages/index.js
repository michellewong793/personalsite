import Layout from "../components/Layout";
import Styles from "../components/Theme";
import Spacer from "../components/Spacer";

export default function Index() {
  return (
    <div>
      <Layout />
      <div style={Styles.content}>
        <h1> Miche Wong</h1>
          <p> frontend engineer with 3+ years of experience building highly perfomant web apps
          </p>
          <a href="https://github.com/michellewong793" style={Styles.link}>
             github: michellewong793
          </a>
          <br/>
          <h2> Projects
          </h2>
          <p><a href="https://www.Minaprotocol.com">minaprotocol.com</a> web: react, reasonml frontend</p>
          <p><a href="https://www.Minaprotocol.com">celo.org</a> website: react, typescript frontend</p>
          <p><a href="https://www.Minaprotocol.com">valoraapp.com</a> blog: contentful backend, react frontend</p>


      </div>
    </div>
  );
}
