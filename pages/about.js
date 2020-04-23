import Styles from '../components/Theme';
import Layout from '../components/Layout';

export default function Index() {
    return (
        <div>
            <Layout />
            <div style={Styles.content}>
                <h1 style={Styles.header}>About Me</h1>
                <p style={Styles.body}>
                    Here are some random, maybe useful, facts about me:
                        <ol>
                        <li> I went to Smith College and studied Computer Science there. I mostly went to play volleyball, look at art, make lifelong friends, enjoy three meals a day, and ponder life and interests by Paradise Pond.</li>
                        <li> I used to write for The Lowell, The Sophian, and now I write for myself. </li>
                        <li> I work at a cryptocurrency startup called O(1) Labs, where we are building Coda Protocol. I write mostly HTML and CSS in the form of Reason, a syntax based on OCaml that compiles to JavaScript. I know, cool right? Feel free to ask me about it! </li>
                    </ol>
                </p>
            </div>

        </div>
    );
}
