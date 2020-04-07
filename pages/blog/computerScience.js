
import Layout from '../../components/Layout';
import Styles from '../../components/Theme';

const Page = () => {

    return (
        <>
            <Layout />
            <div style={Styles.content}>
                <h1 style={Styles.header}>Computer Science was my major, now I work at crypto startup</h1>
                <p style={Styles.body}>things are not as they seem</p>
            </div>
        </>
    );
};

export default Page;
