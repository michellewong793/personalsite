import Styles from '../components/Theme';
import Layout from '../components/Layout';
import PostLink from '../components/PostLink';


export default function Index() {
    return (
        <div>
            <Layout />
            <div style={Styles.content}>
                <h3 style={Styles.header}>Blog Posts</h3>
                <ul>
                    <PostLink title="Why I loved Smith College" />
                    <PostLink title="How different is academic computer science from actually working in the field" />
                </ul>
            </div>
        </div>
    );
}
