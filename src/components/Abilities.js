import { useState } from "react";
import uniqid from "uniqid";
function Abilities(props){
    const [ability,setAbility] = useState({});
    const handleChange = (e) =>{
        setAbility({
            id:uniqid(),
            name:e.target.value
        })
    }
    return(
        <div>
            <ul className="abilities-ul">
            {props.list.map((obj)=>{
                return <li 
                    onClick={()=>{
                        props.handleClick(obj.id,"abilities");
                    }}
                    key={obj.id}
                >
                {obj.name}
                </li>
            })}
            </ul>
            <form onSubmit={(e)=>{
                e.preventDefault();
                props.handleSubmit(ability,"abilities");
                setAbility({
                    id:uniqid(),
                    name: ''
                });
            }}>
                <input type="text" onChange={handleChange} value={ability.name} placeholder="Add ability"/>
                <button type="submit">+</button>
            </form>
        </div>
    )
}
export default Abilities;