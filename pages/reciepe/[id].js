import  { useRouter } from "next/router";
import styles from "../../styles/Reciepe.module.css"
export const getStaticPaths =async () => {
    const res = await fetch('https://obscure-thicket-64942.herokuapp.com/reciepe');
    const data = await res.json();

    const paths = data.map(reciepe => {
        return {
            params: { id: reciepe.id.toString() }
        }
    })

    return{
        paths,
        fallback: false 
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://obscure-thicket-64942.herokuapp.com/reciepe/${id}`);
    const data = await res.json()
    console.log(data);
    return{
        props:{ reciepe: data }
    }
}
const Details = ({reciepe}) => { 
    const router = useRouter();
    const handleDelete = ()=>{
        fetch('https://obscure-thicket-64942.herokuapp.com/reciepe/' + reciepe.id,
        {method:'DELETE'
        }).then(()=>router.push('/'))
    }
    return (
        <div className={styles.salt}>
            <h1>{reciepe.title}</h1>
            <h2>{reciepe.ingredients}</h2>
            <h3>{reciepe.author}</h3>
            <button onClick={handleDelete} className={styles.btn3}>Delete blog</button>
        </div>
    );
}
 
export default Details;

 
 