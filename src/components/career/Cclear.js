function Cclear(props){
    const { obj } = props;
    return(
    <div>
        <div>{obj.name}</div>
        <div>{obj.position}</div>
        <div>{obj.task}</div>
        <div>{obj.date_start}</div>
        <div>{obj.date_end}</div>
    </div>
    );
}
export default Cclear;