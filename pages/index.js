import Layout from "../components/Layout";
import Styles from "../components/Theme";
import Spacer from "../components/Spacer";

export default function Index() {
  return (
    <div>
      <Layout />
      <div style={Styles.content}>
        <h1 style={Styles.header}>here lies the internet corner of <a href="https://twitter.com/uwu_miche">@uwu_miche. </a> </h1>
        
        <p> i'm a developer, designer, and founder working on something new in zk, privacy, and security. </p>
        <p> my speciality is building generational tools to empower the next generation of technologists, healthcare agents, and more. </p>
        <p> my previous experiences include product and engineering in 3 early stage to Series B startups: <a href="https://minaprotocol.com">mina</a>,  
         <a href="https://celo.org">celo</a> and <a href="https://entropy.xyz">entropy</a>. </p>

        <h2>for the lurkers: </h2>
        <a href="https://micheburrito.medium.com" style={Styles.link}> tech blog: building in zero Knowledge Apps, web3. </a>
        <Spacer height={2} />
        <h2>  for the coders:</h2>
          <a href="https://github.com/michellewong793" style={Styles.link}>
             github profile 
          </a>
   
        <Spacer height={2} />
        <h2>  for the art peeps:</h2>

          <a href="https://instagram.com/brain_to_ink" style={Styles.link}>
            {" "}
             art insta
          </a>
       
      
         
  
        <Spacer height={2} />
      <p>inquiries: <a href="mailto:m@ourquest.xyz"> m@ourquest.xyz </a></p>
      
      
      </div>
    </div>
  );
}
