import {useState} from 'react';
import  styles from "../styles/Create.module.css";
import { useRouter } from 'next/router';
import { useEffect } from "react";


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
         setTimeout(() =>{
            router.push('/');
        }, 1500)
    })
    }
    useEffect(() =>{
       
    }, [])
    
    return (
        <div className={styles.cont}>
            <h1 className={styles.hhh}> Add a Post</h1>
            <form onSubmit={handleSubmit} className ={styles.create}>
                <label className={styles.label} htmlFor="title">Title</label>
                <input className={styles.input}
                id='title'
                type='text'
                onChange={e => setTitle(e.target.value)}
                />
                <label className={styles.label}  htmlFor="body">Ingredients</label>
                <textarea className={styles.input} 
                    required
                    onChange={e => setBody(e.target.value)}  
                    id="body"
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