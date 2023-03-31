import { useState } from "react";
import Editor from "./Editor";
import Plain from "./Plain";
function Item(props){
    const { value, modify, valueName } = props;
    const [edit,setEdit] = useState(false);
    const changeState = () =>{
        setEdit(!edit);
    }
    if(edit){
        return <Editor value={value}  modify={modify} valueName = {valueName} setState={changeState}/>
    }
    else{
        return <Plain value={value} valueName = {valueName} setState={changeState}/>
    }
}
export default Item;