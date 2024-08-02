import './styles/cardh2.css'


function Card(props) {
    return <div className="Card">
        <img className='cardImg' src={props.image} alt={props.alt} />
        <h2>{props.heading}</h2>
        <p>{props.dd}</p>
    </div> 
}

export default Card;