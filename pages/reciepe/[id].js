import  { useRouter } from "next/router";
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
        <div>
            <h1>{reciepe.title}</h1>
            <h2>{reciepe.ingredients}</h2>
            <h3>{reciepe.author}</h3>
            <button onClick={handleDelete}>Delete blog</button>
        </div>
    );
}
 
export default Details;

 
 