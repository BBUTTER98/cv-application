function Plain(props){
    return(
        <div onClick={props.setState}>
            {props.value[props.valueName]}
        </div>
    )
}
export default Plain;