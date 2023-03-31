import { useState } from "react";
import uniqid from "uniqid";
function CareerForm(props){
    const { add } = props;
    const [exp, setExp] = useState({
        id: uniqid(),
        name:'',
        position:'',
        task:'',
        date_start:'',
        date_end:'',
    });
    const handleChange = (e) =>{
        const { value, id } = e.target;
        setExp({
            ...exp,
            [id]:value,
        })
    }
    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            add(exp,"practice");
            setExp({
                id: uniqid(),
                name:'',
                position:'',
                task:'',
                date_start:'',
                date_end:'',
            });
        }}>
            <input type="text" id="name" onChange={handleChange} value={exp.name} placeholder="Company Name"/>
            <input type="text" id="position" onChange={handleChange} value={exp.position} placeholder="Position"/>
            <input type="text" id="task" onChange={handleChange} value={exp.task} placeholder="Task you were doing"/>
            <input type="text" id="date_start" onChange={handleChange} value={exp.date_start} placeholder="Start date"/>
            <input type="text" id="date_end" onChange={handleChange} value={exp.date_end} placeholder="Finish date/until now"/>
            <button type="submit">Add</button>
        </form>
    )
}
export default CareerForm;