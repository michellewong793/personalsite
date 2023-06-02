import Layout from "../components/Layout";
import Styles from "../components/Theme";
import Spacer from "../components/Spacer";

export default function Index() {
  return (
    <div>
      <Layout />
      <div style={Styles.content}>
        <h1 style={Styles.header}>here lies the corner of <a href="https://twitter.com/uwu_miche">@uwu_miche. </a> </h1>
        <p> i care deeply about the experience of women in software engineering. </p>
        <p> here are some things i'm proud of:</p>
        <p>teaching: i have taught friends how to code. i have mentored high school students whose languages are not English at hackathons. i write about my learnings on my <a href="https://micheburrito.medium.com">technical blog</a>. </p>
      <p> art: i am currently challenging myself to paint a painting everyday. i do pet portatis. email me if you would like one! </p>
      <p> community: i am working on an org called Queer Art Faire, which brings fun art events to young folks in San Francisco. always open to meeting more artists and local orgs who want to partner with us. </p>
      <p> other art: i do live typewriter poetry cards for people at parties, helping folks get their deepest words out to their loved ones.</p>
       <p> coding: i studied computer science at smith college, graduated in 2019. i since then have worked at three early-stage to Series B web3 startups, each with their individual projects ranging from complete websites, to integrations, to functional programming.</p>
        
        <p> companies that were blessed with miche wong <a href="https://minaprotocol.com">mina</a>,  
         <a href="https://celo.org">celo</a> and <a href="https://entropy.xyz">entropy</a>. </p>
         <p>when im not working on Queer Art Faire and building communities around art and coding, i love to sing, bowl (my highest is currently 157), watch theater, play ping pong, and paint. </p>
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
      <p>mentoring / collaboration inquiries: <a href="mailto:michellurito@gmail.com"> michellurito@gmail.com </a></p>
      
      
      </div>
    </div>
  );
}
