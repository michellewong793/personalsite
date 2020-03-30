import Link from 'next/link';
import styles from './Theme';

const PostLink = props => (
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a style={styles.link}>{props.title}</a>
        </Link>
    </li>
);

export default PostLink;
