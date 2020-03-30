
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Styles from '../components/Theme';

const Page = () => {
    const router = useRouter();

    return (
        <>
            <Layout />
            <div style={Styles.content}>
                <h1 style={Styles.header}>{router.query.title}</h1>
                <p style={Styles.body}>This is the blog post content.</p>
            </div>
        </>
    );
};

export default Page;
