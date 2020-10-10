import Layout from '../components/Layout';
import Styles from '../components/Theme';
import Spacer from '../components/Spacer';

export default function Index() {
    return (
        <div>
            <Layout />
            <div style={Styles.content}>
                <h1 style={Styles.header}>Hi, I'm Michelle Marsha Wong.</h1>
                <h2 style={Styles.body}>i code.</h2>
                <p style={Styles.body}>i work at <a href="https://minaprotocol.com"> Mina Protocol, </a> and i helped built the site itself.  </p>
                <p style={Styles.body}>check out my <a href="https://github.com/michellewong793">Github</a>, if you're curious.</p>
                <Spacer height={2} />
        `      
                <h2 style={Styles.body}>i am an artist. i make   <a href="https://instagram.com/brain_to_ink"> paintings, drawings, poems. </a>
                </h2>
                
                <Spacer height={2} />

                <h2 style={Styles.body}>i write about asian american artists of today. if you're interested in being interviewed, please email me at michellewong793@gmail.com!  
                </h2>

                <Spacer height={2} />

                <h2 style={Styles.body}>i am a writer. </h2>

                <p style={Styles.body}>i wrote stories, took photos, edited layout, and drew editorial cartoons, for my college's paper,  <a href="https://thesophian.com/?s=michelle+wong">The Sophian. </a></p>
                <Spacer height={0.2} />

                <p style={Styles.body}>Featured Story 1: <a href="https://thesophian.com/2018-10-25-poc-athlete-movement-demands-diversity-and-inclusion-in-athletics/">POC ATHLETE MOVEMENT DEMANDS DIVERSITY AND INCLUSION IN ATHLETICS</a> </p>
                <p style={Styles.body}>Featured Story 2: <a href="https://thesophian.com/2019-2-7-eradicating-smith-culture-i-smile-at-smith-students-i-dont-know-and-i-like-it/">FINDING JOY IN THE EVERYDAY - ERADICATING SMITH CULTURE</a> </p>
                <p style={Styles.body}>Featured Cartoon: <a href="https://thesophian.com/2018-11-15-is-this-healing/">WHAT WORLD ARE YOU IN, SMITH? </a> </p>

                <Spacer height={2} />
                <p style={Styles.body}>i turned the paper into a magazine at my high school and oversaw photography, illustration, story writing, multi-department communications, website direction, and page design. <a href="https://web.archive.org/web/20150321143154/http://thelowell.org/"> </a></p>

                <p style={Styles.body}> you can see my work (magazine covers, and some newspapers before that too in 2015) for The Lowell here on <a href="https://issuu.com/thelowell">Issuu</a>. </p>
                <Spacer height={0.2} />

                <p style={Styles.body}>
                    <ol>
                        <li> <a href="https://issuu.com/thelowell/docs/october2014thelowellmagazine"> First one I ever made. </a> </li>
                        <li> <a href="https://issuu.com/thelowell/docs/october2014thelowellmagazine"> One of my favorites. </a> </li>

                    </ol>
                </p>



            </div>
        </div >
    );
}
