import Header from '../components/Header';

const body = {
    fontFamily: 'Spartan',
    fontSize: '14px',
}

const header = {
    fontFamily: 'Spartan',
}

const content = {
    marginTop: 100,
    paddingLeft: 50,
    paddingRight: 50,
}

export default function Index() {
    return (
        <div>
            <Header />
            <div style={content}>
                <h1 style={header}>Hi, I'm Michelle.</h1>
                <p style={body}>i am a frontend developer. i am also a writer, painter, and drawer. this is my first website playing with Next.js. welcome!  </p>
            </div>

        </div>
    );
}
