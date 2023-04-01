import Item from "./general/Item";
function General(props){
    const { property, modify } = props;
    return(
        <div className="general">
            <div className="container first">
                <Item value={property[0]} modify={modify} valueName="firstName" strUp={true}/>
                <Item value={property[1]} modify={modify} valueName="lastName" strUp={true}/>
            </div>
            <div className="container">
                <Item value={property[2]} modify={modify} valueName="city" strUp={false}/>
                <Item value={property[3]} modify={modify} valueName="postCode" strUp={false}/>
            </div>
            <div className="container">
                <Item value={property[4]} modify={modify} valueName="number" strUp={false}/>
                |
                <Item value={property[5]} modify={modify} valueName="mail" strUp={false}/>
            </div>
        </div>
    )
}
export default General;