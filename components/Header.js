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
    </div>
);

export default Header;
