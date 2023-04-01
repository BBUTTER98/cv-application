import EduForm from "./edu/EduForm";
function Education(props){
    return(
        <div className="edu-main">
            {props.list.map((obj)=>{
                return (
                <div key={obj.id} className="edu-container" onClick={()=>{
                    props.remove(obj.id,"edu");
                }}>
                    <div className="bold-section">
                        <div id="title">{obj.title}</div>
                        -
                        <div id="start-date">{obj.start}</div>
                        -
                        <div id="end-date">{obj.end}</div>
                    </div>
                    <div id="school-name">{obj.name}</div>
                </div>
                )
            })}
            <EduForm add={props.add}/>
        </div>
    )    

}
export default Education;