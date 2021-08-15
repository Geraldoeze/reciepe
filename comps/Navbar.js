 import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>  
            <div className="links">
            <h1> Reciepe Blog</h1>
            </div>
               <Link href ="/"><a>Home</a></Link>
               <Link href ="/Create"><a>Create Reciepe</a></Link>
               <Link href="/reciepe"><a>All Reciepe</a></Link>
        </nav>
     );
}
 
export default Navbar; 