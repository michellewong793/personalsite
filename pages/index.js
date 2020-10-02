import Layout from '../components/Layout';
import Styles from '../components/Theme';
import Spacer from '../components/Spacer';

export default function Index() {
    return (
        <div>
            <Layout />
            <div style={Styles.content}>
                <h1 style={Styles.header}>Hi, I'm Michelle Marsha Wong.</h1>
                <h2 style={Styles.body}>i code, i make websites, i make art. </h2>
                <p style={Styles.body}>i work at <a href="https://minaprotocol.com"> Mina Protocol </a> and I helped built the site itself.  </p>
                <p style={Styles.body}>check out my Github here, if you're curious. <a href="https://github.com/michellewong793"> Mina Protocol </a> and my team builds the site itself.  </p>
                <p style={Styles.body}>i'm also an <a href="https://instagram.com/brain_to_ink"> artist </a> and a writer.  </p>
                <p style={Styles.body}>i wrote stories, took photos, edited layout, and drew editorial cartoons, for my college's paper,  <a href="https://thesophian.com/?s=michelle+wong"></a> The Sophian.</p>
                <p style={Styles.body}>i was also co-Editor-in-chief at my high school, The Lowell, in 2015. <a href="https://web.archive.org/web/20150318011911/http://thelowell.org/sections/news/">See the internet archive here for a glimpse into my world in 2015.</a></p>
            </div>

        </div>
    );
}
