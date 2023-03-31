import { useState } from "react";

function Abilities(props){
    const [ability,setAbility] = useState('');
    const handleChange = (e) =>{
        setAbility(e.target.value)
    }
    return(
        <div>
            {props.list.map((obj)=>{
                return <div 
                    onClick={()=>{
                        props.handleClick(obj.id);
                    }}
                    key={obj.id}
                >
                {obj.name}
                </div>
            })}
            <form onSubmit={(e)=>{
                e.preventDefault();
                props.handleSubmit(ability);
                setAbility('');
            }}>
                <input type="text" onChange={handleChange} value={ability} placeholder="Add ability"/>
                <button type="submit">+</button>
            </form>
        </div>
    )
}
export default Abilities;