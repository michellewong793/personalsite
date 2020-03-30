import Layout from '../components/Layout';
import Styles from '../components/Theme';

export default function Index() {
    return (
        <div>
            <Layout />
            <div style={Styles.content}>
                <h1 style={Styles.header}>Hi, I'm Michelle.</h1>
                <p style={Styles.body}>i am a frontend developer. i am also a writer, painter, and drawer. this is my first website playing with Next.js. welcome!  </p>
            </div>

        </div>
    );
}
