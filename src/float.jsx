import "./styles/float.css"

function Float(props) {
    return <div className="float">
        <h6>{props.num}</h6>
        <p>{props.heading}</p>
    </div>
}

export default Float;