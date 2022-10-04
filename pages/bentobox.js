import Styles from "../components/Theme";
import Layout from "../components/Layout";


export default function Index() {
  return (
    <div>
      <Layout />
      <div style={Styles.content}>
        <h1 style={Styles.header}>Bento Wallet</h1>
        Bento Box, or the Bento Wallet, is a project aimed to solve the problem of managing finances with new roommates in a new city.


      </div>
    </div>
  );
}
