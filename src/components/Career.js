import CareerForm from "./career/CareerForm";
import CItem from "./career/CItem";
function Career(props){
    return(
        <div>
            <div>
                {props.list.map((obj)=>{
                    return <CItem obj={obj} key={obj.id}/>
                })}
            </div>
            <CareerForm add={props.add}/>
        </div>
    )
}
export default Career;