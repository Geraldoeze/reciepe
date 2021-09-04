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
          reciepe involved in the creation of such meals.<br/>
          This is an app in development and constant updates ans changes will be made in due time. 
      </p>
      <p>    Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, 
          without the meaning of the text influencing the design</p>
      <Link href ="/reciepe">
        <a className={styles.btn}>See All Reciepe</a>
      </Link>
    
    </div>
    </>
  );
}
 
export default Home;