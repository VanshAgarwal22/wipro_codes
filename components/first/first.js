import { useState } from "react";
import Menu from "../menu/menu";


    const First = () => {
        const [name,setName] = useState('')
    
        const vansh = () => {
            setName("Hi I am vansh...")
        }
    
        const muskan = () => {
            setName("Hi I am muskan..")
        }
    
        const abhishek = () => {
            setName("Hi I am abhishek...")
        }
    
    return(
        <div>
            <Menu/>
            <p>Student Name is :{name} </p>
            <input type="button" value="vansh" onClick={vansh}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" value="muskan" onClick={muskan}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" value="abhishek" onClick={abhishek}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        </div>
    )
}
export default First;