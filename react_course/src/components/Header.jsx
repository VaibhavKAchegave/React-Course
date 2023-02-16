

import Footer from "./Footer";
import './header.css';
const Header=()=>{
    return(
        <div className="header">
             <h1 id="topic">Header</h1>
             {/* inline style */}
             <p style={{color:"purple",backgroundColor:"green"}}>This is a tutorial</p>
             <Footer/>
        </div>
    )
}


export default Header;
