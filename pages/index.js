import Layout from "../components/Layout";
import Styles from "../components/Theme";
import Spacer from "../components/Spacer";

export default function Index() {
  return (
    <div>
      <Layout />
      <div style={Styles.content}>
        <h1 style={Styles.header}>Hello, I'm Miche.</h1>
        <h2 style={Styles.body}>i read, write, and debug code, and am a highly talented and hard-working 2019 graduate of the Smith College Computer Science department.</h2>
        <p style={Styles.body}>
          currently, i work at cLabs building{" "}
          <a href="https://valoraapp.com" style={Styles.link}>
            valoraapp.com
          </a>
          .
        </p>
        <p style={Styles.body}>
          previously, i worked at{" "}
          <a href="https://minaprotocol.com" style={Styles.link}>
            {" "}
            Mina Protocol,{" "}
          </a>{" "}
          and i helped built the site from scratch.{" "}
        </p>
        <p style={Styles.body}>
          check out my{" "}
          <a href="https://github.com/michellewong793" style={Styles.link}>
            Github
          </a>
          , if you're curious.
        </p>
        <Spacer height={2} />
        <h2 style={Styles.body}>
          i am a visual{" "}
          <a href="https://instagram.com/brain_to_ink" style={Styles.link}>
            {" "}
            artist, always open to collaborations with other cartoonists and writers!{" "}
          </a>
        </h2>
        <h2 style={Styles.body}>
          i made a literary{" "}
          <a
            href="https://www.dropbox.com/h?preview=confessions_01.pdf"
            style={Styles.link}
          >
            {" "}
            magazine with my friend, Juliette. it's about our experiences with heartbreak.{" "}
          </a>
        </h2>
        <h2 style={Styles.body}>
          i am the host of{" "}
          <a
            href="https://open.spotify.com/show/09FJCjGxjionhSWXNcOyFN?si=crE6gyZaRuKalq37PWoTBQ"
            style={Styles.link}
          >
            {" "}
            The First Gen podcast, which I do with my friend Diana, and we talk about our experiences working as first gen people.{" "}
          </a>
        </h2>
        <Spacer height={2} />
        <h2 style={Styles.body}>
          i write on Medium about what I learn in life and in development.{" "}
        </h2>
        <a href="https://smeeshgirl.medium.com" style={Styles.link}> read my thoughts on Medium!</a>
        <Spacer height={0.2} />
        <p style={Styles.body}>
          The Sophian:{" "}
          <a
            style={Styles.link}
            href="https://thesophian.com/2018-10-25-poc-athlete-movement-demands-diversity-and-inclusion-in-athletics/"
          >
            POC ATHLETE MOVEMENT DEMANDS DIVERSITY AND INCLUSION IN ATHLETICS
          </a>{" "}
        </p>
        <p style={Styles.body}>
          The Sophian:{" "}
          <a
            style={Styles.link}
            href="https://thesophian.com/2019-2-7-eradicating-smith-culture-i-smile-at-smith-students-i-dont-know-and-i-like-it/"
          >
            FINDING JOY IN THE EVERYDAY - ERADICATING SMITH CULTURE
          </a>{" "}
        </p>
        <p style={Styles.body}>
          The Sophian Editorial Cartoon:{" "}
          <a
            style={Styles.link}
            href="https://thesophian.com/2018-11-15-is-this-healing/"
          >
            WHAT WORLD ARE YOU IN, SMITH?{" "}
          </a>{" "}
        </p>
      </div>
    </div>
  );
}
