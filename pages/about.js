import Head from 'next/head'
import styles from '../styles/Home.module.css'

const About = () => {
    return ( 
      <>
        <Head>
            <title> Reciepe-Blog | About</title>
            <meta name="keywords" content="reciepe" />
        </Head>
        <div className={styles.cent} style={{color:"chocolate"}}>
            <h1>About Page</h1>
            <p>When cooking we'll have a reciepe to use for our different dishes, but when 
             we can't remeber a step in our list, the taste goes bad, we don't get what we want.
             Rather than saving our reciepes on our phones as an image or a document, we can save it on a website
            <br />
            This website Reciepe-Blog stores such information on a database and it can be accessible any where and any time we want it.
            No more calling a friend for a reciepe, or looking for that image on our phones, we're just a google search away from getting what we want. 
            </p>
        </div>
      </>  
     );
}
 
export default About;
 