import {useState} from 'react';
import  styles from "../styles/Create.module.css";
import { useRouter } from 'next/router';



const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    
    const router =useRouter();
    

    const handleSubmit = e => {
        e.preventDefault();
        const reciepe = {
            title,
            body,   
            author
        };
        fetch("http://localhost:9000/reciepe" , {
            method: 'POST',
            headers:{ "Content-Type": "application/json" },
            body: JSON.stringify(reciepe)
        }).then(() => {
            console.log('new blog added');
            router.push('/reciepe');
        })
         
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit} className ={styles.create}>
                <label className={styles.label} htmlFor="title">Title</label>
                <input className={styles.call}
                id='title'
                type='text'
                onChange={e => setTitle(e.target.value)}
                />
                <label className={styles.label}  htmlFor="body">Body</label>
                <input className={styles.call}
                id="body"
                type="text"
                onChange={e=> setBody(e.target.value)}
                />
                <label className={styles.label}  htmlFor="author">Author</label>
                <input className={styles.call}
                id='author'
                type='text'
                onChange={e=>setAuthor(e.target.value)}
                />
                <button 
                className={styles.btn} type ="submit" 
                     >Submit</button>
            </form>
        </div>
    )
}        
 
export default Create;