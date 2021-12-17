import Link from 'next/link';

import DrawerToogle from './Draw';
import Backdrop from './SideDrawer';
  
     
const Navbar = (props) => {
    let attachedClasses = ["open "];
    if(props.open) {
        attachedClasses = ["close"];
    }
    return (
    <div>
         
        <Backdrop show={props.open} clicked={props.closed} />       

        <nav>
            <h1 className = "logo">Reciepe-Blog</h1>
               <a className="navbar"> 
                   <DrawerToogle clicked={props.drawerTogged}/>
                </a>
                
           <ul className={attachedClasses}>
               <Link href = "/" ><a onClick={props.drawerTogged} >Home</a></Link>
               <Link href = "/about "><a onClick={props.drawerTogged}>About</a></Link>
               <Link href = "/reciepe/"><a onClick={props.drawerTogged}>All Reciepe</a></Link>
               <Link href = "/add" ><a onClick={props.drawerTogged}> Add Reciepe</a></Link>
           </ul>
       </nav>
   </div>
      );
}
 
export default Navbar;
 
 