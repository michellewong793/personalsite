import Layout from "../components/Layout";
import Styles from "../components/Theme";
import Spacer from "../components/Spacer";

export default function Index() {
  return (
    <div>
      <Layout />
      <div style={Styles.content}>
        <h1 style={Styles.header}>here lies the internet corner of <a href="https://twitter.com/uwu_miche">@uwu_miche. </a> </h1>
        
        <p> i'm a dev, designer, and founder working on something new for community builders. </p>
        <p> my previous experiences include product and engineering in 3 early stage to Series B startups: <a href="https://minaprotocol.com">mina</a>,  
         <a href="https://celo.org">celo</a> and <a href="https://entropy.xyz">entropy</a>. </p>
         <p>when im not working on my company, i love to sing, bowl (my highest is currently 157), watch theater, play ping pong, and paint. </p>
         <Spacer height={2} />

         <h2>  for artists:</h2>
        <a href="https://queeraf.micheburrito.com" style={Styles.link}>
            {" "}
             i host and run queer art faire, an inclusive, pay-what-you-can popup series for 50+ artists and creators in the bay area
          </a>
          <Spacer height={1}/>
          <a href="https://instagram.com/brain_to_ink" style={Styles.link}>
            {" "}
             my art instagram, @brain_to_ink
          </a>
        <h2>for readers: </h2>
        <a href="https://micheburrito.medium.com" style={Styles.link}> my tech blog: building in zero Knowledge Apps, web3. </a>
        <Spacer height={2} />
        <h2>  for devs:</h2>
          <a href="https://github.com/michellewong793" style={Styles.link}>
             github
          </a>
   
        <Spacer height={2} />

       
      
         
  
        <Spacer height={2} />
      <p>inquiries: <a href="mailto:m@ourquest.xyz"> m@ourquest.xyz </a></p>
      
      
      </div>
    </div>
  );
}
