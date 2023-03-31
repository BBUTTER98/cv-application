import Item from "./general/Item";
function General(props){
    const { property, modify } = props;
    return(
        <div>
            <h2>
                <Item value={property[0]} modify={modify} valueName="firstName"/>
                <Item value={property[1]} modify={modify} valueName="lastName"/>
            </h2>
            <div>
                <Item value={property[2]} modify={modify} valueName="city"/>
                <Item value={property[3]} modify={modify} valueName="postCode"/>
            </div>
            <div>
                <Item value={property[4]} modify={modify} valueName="number"/>
                <Item value={property[5]} modify={modify} valueName="mail"/>
            </div>
        </div>
    )
}
export default General;