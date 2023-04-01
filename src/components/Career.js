import CareerForm from "./career/CareerForm";
import CItem from "./career/CItem";
function Career(props){
    return(
        <div>
            <div>
                {props.list.map((obj)=>{
                    return <div>
                            <CItem obj={obj} key={obj.id} addComplex={props.addComplex} remove={props.remove}/>
                        </div>
                })}
            </div>
            <CareerForm add={props.add}/>
        </div>
    )
}
export default Career;