import Link from "next/link";
import styles from '../../styles/Reciepe.module.css'
export const getStaticProps = async ()=>{

    const res = await fetch(" https://obscure-thicket-64942.herokuapp.com/reciepe")
    const data= await res.json();

    return {
        props:{ reciepe: data }
    }
}

const Reciepe = ({ reciepe }) => {
    return (
        <div>
            <h1 className={styles.kilo}>All Reciepe</h1>
            {reciepe.map(reciepe => (
                <Link href={'/reciepe/' + reciepe.id} key={reciepe.id}>
                    <a className={styles.single}>
                    <h3 style={{color:"chocolate"}}>{ reciepe.title }</h3>
                    </a>
                </Link>    
            ))}
        </div>
      );
}
 
export default Reciepe;