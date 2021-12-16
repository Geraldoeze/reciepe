import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Cont from './Home';

const Home = () => {
  return ( 
    <>
    <Head>
        <title>Reciepes | Home</title>
        <meta name="keywords" content="reciepes"/>
    </Head>
    <Cont />
    </>
  );
}
 
export default Home;