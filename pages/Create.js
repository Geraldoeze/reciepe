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
        fetch("https://obscure-thicket-64942.herokuapp.com/reciepe" , {
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
                <input className={styles.input}
                id='title'
                type='text'
                onChange={e => setTitle(e.target.value)}
                />
                <label className={styles.label}  htmlFor="body">Ingredients</label>
                <textarea className={styles.input} 
                    value={this.state.ingredients}
                    required
                    onChange={e => setBody(e.target.value)}  
                    id="ingredients"
                    type="text"/>
                <label className={styles.label}  htmlFor="author">Author</label>
                <input className={styles.input}
                id='author'
                type='text'
                onChange={e=>setAuthor(e.target.value)}
                />
                <button 
                className={styles.btn1} type ="submit" 
                     >Submit</button>
            </form>
        </div>
    )
}        
 
export default Create;