import { useState } from "react";

function Editor(props){
    const [value,setValue] = useState(props.value[props.valueName]);
    const handleChange = e =>{
        setValue(e.target.value);
    }
    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            props.modify(props.valueName,value);
            props.setState();
        }}>
            <input type="text" value={value} onChange={handleChange}/>
            <button type="submit">
                Save
            </button>
        </form>
    )
}
export default Editor;