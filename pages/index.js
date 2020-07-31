import Layout from '../components/Layout';
import Styles from '../components/Theme';
import Spacer from '../components/Spacer';

export default function Index() {
    return (
        <div>
            <Layout />
            <div style={Styles.content}>
                <h1 style={Styles.header}>Hi, I'm Michelle.</h1>
                <p style={Styles.body}>i am a frontend developer. this is my website built with React and Next.js. welcome!  </p>
            </div>

        </div>
    );
}
