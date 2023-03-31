import { useState } from "react";
import Cedit from "./Cedit";
import Cclear from "./Cclear";

function CItem(props){
    const [edit,setEdit] = useState(false);
    if(edit){
        return <Cedit obj = {props.obj}/>
    }
    else{
        return <Cclear obj = {props.obj}/>
    }
}
export default CItem;