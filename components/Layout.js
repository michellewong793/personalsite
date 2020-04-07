
import Link from 'next/link';

const linkStyle = {
    marginRight: 15,
    fontFamily: 'Spartan',
    textDecoration: 'none',
    color: 'black',
};

const header = {
    paddingTop: 20,
    paddingLeft: 30,
}
const Header = () => (
    <div style={header}>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
        <Link href="/blog">
            <a style={linkStyle}>Blog</a>
        </Link>
        <a style={linkStyle} href="/Resume_March2020.pdf">Resume</a>
    </div>
);

const Layout = () => {
    return <> <Header /></>
}

export default Layout;

