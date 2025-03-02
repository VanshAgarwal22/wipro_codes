import { Link } from "react-router-dom";

const Menu =()=>{

    return(
        <div>
        welcome to  the  menu <br/>

        <Link to="/first">First</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/second">Second</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/third">Third</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/login">login</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>

    )
    
}

export default Menu;