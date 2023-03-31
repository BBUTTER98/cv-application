import EduForm from "./edu/EduForm";
function Education(props){
    return(
        <div>
            {props.list.map((obj)=>{
                return (
                <>

                    <div id="school-name">{obj.name}</div>
                    <div id="title">{obj.title}</div>
                    <div id="start-date">{obj.start}</div>
                    <div id="end-date">{obj.end}</div>
                </>
                )
            })}
            <EduForm add={props.add}/>
        </div>
    )    

}
export default Education;