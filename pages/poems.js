import Styles from '../components/Theme';
import Layout from '../components/Layout';

export default function Index() {
    return (
        <div>
            <Layout />
            <div style={Styles.content}>
                <h1 style={Styles.header}>Poems</h1>
                <h2> Cinders </h2>
               <img src="/static/poems/cinders.png"/>
            </div>

        </div>
    );
}
