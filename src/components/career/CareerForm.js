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
        date_finish:'',
        tasks:[],
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
                date_finish:'',
                tasks:[],
            });
        }}>
            <input type="text" id="name" onChange={handleChange} value={exp.name} placeholder="Company Name"/>
            <input type="text" id="position" onChange={handleChange} value={exp.position} placeholder="Position"/>
            <input type="text" id="task" onChange={handleChange} value={exp.task} placeholder="Description of your work"/>
            <input type="text" id="date_start" onChange={handleChange} value={exp.date_start} placeholder="Start date"/>
            <input type="text" id="date_finish" onChange={handleChange} value={exp.date_finish} placeholder="Finish date/until now"/>
            <button type="submit">+</button>
        </form>
    )
}
export default CareerForm;