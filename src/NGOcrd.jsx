function Myngo(props) {
    return <div>
        <img src={props.img} alt={props.alt} />
        <div>
            <h3>{props.name}</h3>
            <p>{props.dd}</p>
        </div>
        <button className="cta">Donate</button>
    </div>
}

export default Myngo;