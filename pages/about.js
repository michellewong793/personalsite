import Header from '../components/Header';

const Styles = {
    body: {
        fontFamily: 'Spartan',
        fontSize: '14px',
    },

    header: {
        fontFamily: 'Spartan',
    },

    content: {
        marginTop: 100,
        paddingLeft: 50,
        paddingRight: 50,
    },
}


export default function Index() {
    return (
        <div>
            <Header />
            <div style={Styles.content}>
                <h1 style={Styles.header}>About Me</h1>
                <p style={Styles.body}>
                    Here are ten random facts about me:
                    <ol>
                        <li>
                            I really like hot cheetos and cream cheese.
                        </li>
                        <li>
                            I was born and raised in San Francisco PROPER. On San Bruno Ave. Or close to it. If you know, you know.
                        </li>
                        <li>
                            When I was growing up, I went to all these women in stem camps and look at where I am now.
                        </li>
                        <li>
                            I'm in love with indie music, tea in the morning, and bread, wine, and cheese with my best friend.
                        </li>
                        <li>
                            I love sunflowers. All flowers, and plants really. Especially native ones in SF. I used to work for the National Parks in high school and just was around so many plants.
                        </li>
                        <li>
                            I'm really into meeting new people. If you want to chat sometime, please do shoot me a message! We can go thrift shopping!
                        </li>
                    </ol>
                </p>
            </div>

        </div>
    );
}
