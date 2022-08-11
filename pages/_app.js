import { Footer, Header } from "../Components/E__exports";
import "../styles/globals.css";
import { UserStorage } from "../Contexts/UserContext";
import Head from "next/head";
import { DogsDiv } from "../styles/PagesStyles";

function MyApp({ Component, pageProps }) {
  return (
    <DogsDiv>
      <UserStorage>
        <Head>
          <title>Dogs</title>
          <meta name="description" content="A social media for dogs" />
          <link rel="icon" href="../Assets/favicon.ico" />
        </Head>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </UserStorage>
    </DogsDiv>
  );
}

export default MyApp;
