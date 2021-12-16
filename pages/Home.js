import styles from '../styles/Home.module.css'
import Link from "next/link";



const Cont = () => {
    return ( 
        
    <div className={styles.cent} >
        <h1 className = {styles.title}>Welcome to Reciepe-Blog </h1>
        <p className= {styles.text}> Lorem ipsum dolor sit amet consectetur adipisicing elit. In nobis 
        veritatis perspiciatis delectus odit! Ex iure, quia dolorem 
        suscipit fugit quos repudiandae reprehenderit nesciunt natus, dol
        ore, quisquam earum excepturi sapiente.</p>
        <p className={styles.text}>Lorem Foot Continel</p>
        <Link href = "/reciepe">
        <a className={styles.btn}>See Reciepe List</a>
        </Link>
  </div>
     );
}
 
export default Cont;