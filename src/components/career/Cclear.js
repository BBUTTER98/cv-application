function Cclear(props){
    const { obj, remove } = props;
    return(
    <div onClick={()=>{
        remove(obj.id,"practice");
    }}>
        <div className="c-base-info">
            <div className="company">{obj.name}</div>
            <div className="dates">
                <div className="c-start">{obj.date_start}</div>
                -
                <div className="c-end">{obj.date_finish}</div>
            </div>
        </div>
        <div className="company">{obj.name}</div>
        <div className="position">{obj.position}</div>
        <div className="description">{obj.description}</div>
        <p>I was doing in job</p>
        <ul>{obj.tasks.map(obj1=>{
            return <li key={obj1.id}>{obj1.name}</li>
        })}</ul>
    </div>
    );
}
export default Cclear;