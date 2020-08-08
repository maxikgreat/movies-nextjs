import type { AppProps, AppContext } from 'next/app';
// import App from 'next/app';
import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
// import { getMovies } from '../actions/index';
import '../styles/main.scss';

export default function MovieApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js" integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossOrigin="anonymous"></script>
      </Head>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

// MovieApp.getInitialProps = async (appContext: AppContext) => {

//   const appProps = await App.getInitialProps(appContext);

//   console.log(appProps);

//   return { ...appProps };
// }
