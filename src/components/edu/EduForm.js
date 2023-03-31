import { useState } from "react";
import uniqid from "uniqid";
function EduForm(props){
    const[edu,setEdu] = useState({
        id: uniqid(),
        name:'',
        title:'',
        start:'',
        end:''
    });
    const condition = edu.start==='' || edu.name==='' || edu.title==='';
    const handleChange = (e) =>{
        const { id, value } = e.target;
        setEdu({
            ...edu,
            [id]:value,
        });
    }
    return(
        <form onSubmit={(e)=>{
        e.preventDefault();
        if(condition){
            alert("remember about all 3 properties: School name, Title of Study and Start date");
        }
        else{
            props.add(edu,"edu");
            setEdu({
                id: uniqid(),
                name:'',
                title:'',
                start:'',
                end:''
            })
        }
    }}>
        <input type="text" value={edu.name} placeholder="School name" onChange={handleChange} id="name"/>
        <input type="text" value={edu.title} placeholder="Title of Study" onChange={handleChange} id="title"/>
        <input type="text" value={edu.start} placeholder="Start date" onChange={handleChange} id="start"/>
        <input type="text" value={edu.end} placeholder="Finish date (optional)" onChange={handleChange} id="end"/>
        <button type="submit">Add School</button>
    </form>
    )
}
export default EduForm;