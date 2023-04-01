import Cclear from "./Cclear";
import TaskForm from "./TaskForm";

function CItem(props){
        return <div>
            <Cclear obj = {props.obj} remove={props.remove}/>
            <TaskForm addComplex={props.addComplex} identifier={props.obj.id}/>
            <br />
        </div>
}
export default CItem;