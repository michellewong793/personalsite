import Layout from '../components/Layout';
import Styles from '../components/Theme';
import Spacer from '../components/Spacer';
import Link from 'next/link';


export default function Index() {
    return (
        <div>
            <Layout />
            <div style={Styles.content}>
                <h1 style={Styles.header}>Hi, I'm Michelle Marsha Wong.</h1>
                <h2 style={Styles.body}>i code.</h2>
                <p style={Styles.body}>i work at <a href="https://minaprotocol.com" style={Styles.link} > Mina Protocol, </a> and i helped built the site itself.  </p>
                <p style={Styles.body}>check out my <a href="https://github.com/michellewong793" style={Styles.link} >Github</a>, if you're curious.</p>
                <Spacer height={2} />

                <h2 style={Styles.body}>i am an <a href="https://instagram.com/brain_to_ink" style={Styles.link}> artist. </a>
                </h2>

                <a href="/mentor" style={Styles.link}> "Mentor" - a submission made for Be Still Media </a>
                <Spacer height={2} />

                <h2 style={Styles.body}>i am a writer and poet. </h2>

                <Spacer height={0.2} />

                <p style={Styles.body}>The Sophian: <a style={Styles.link} href="https://thesophian.com/2018-10-25-poc-athlete-movement-demands-diversity-and-inclusion-in-athletics/" >POC ATHLETE MOVEMENT DEMANDS DIVERSITY AND INCLUSION IN ATHLETICS</a> </p>
                <p style={Styles.body}>The Sophian: <a style={Styles.link} href="https://thesophian.com/2019-2-7-eradicating-smith-culture-i-smile-at-smith-students-i-dont-know-and-i-like-it/">FINDING JOY IN THE EVERYDAY - ERADICATING SMITH CULTURE</a> </p>
                <p style={Styles.body}>The Sophian Editorial Cartoon: <a style={Styles.link} href="https://thesophian.com/2018-11-15-is-this-healing/">WHAT WORLD ARE YOU IN, SMITH? </a> </p>

                <Spacer height={2} />
                <img src="/firstGen.png" style={Styles.firstGenPromoCard}></img>
            </div>
        </div >
    );
}
