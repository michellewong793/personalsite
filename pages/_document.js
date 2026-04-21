import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet" />
                    <style
                        dangerouslySetInnerHTML={{
                            __html: `
                            *, *::before, *::after { box-sizing: border-box; }
                            body {
                                font-family: "DM Sans", sans-serif;
                                font-size: 16px;
                                margin: 0;
                                padding: 0;
                                color: #111;
                                background: #fff;
                            }
                            h1, h2, h3 {
                                font-weight: 500;
                                letter-spacing: -0.01em;
                            }
                            `
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
