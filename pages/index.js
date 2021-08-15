import Head from 'next/head'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

const Home = () => {
  return ( 
    <>
    <Head>
        <title>Reciepes | Home</title>
        <meta name="keywords" content="reciepes"/>
    </Head>
    <div>
      
      <h1 className={styles.hh}>Intercontinental foods</h1>
      <p className={styles.fam}>This page shows most of the meal eaten across the globe, it also includes the ingredients/ 
        reciepe involved in the creation of such meals </p>
      <Link href ="/reciepe">
        <a className={styles.btn}>See All Reciepe</a>
      </Link>
    
    </div>
    </>
  );
}
 
export default Home;