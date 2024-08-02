import "./styles/eventCrd.css"

function EventCrd(props) {
    return <div className="eventCrd">
        <img className="img" src={props.img} alt={props.alt} />
        <div className="txt">
            <h3 className="name">{props.name}</h3>
            <p className="dd">{props.dd}</p>
        </div>
        <button className="cta">View Details</button>
    </div>
}
export default EventCrd;