import Uinon from "./Union.svg"
import "./styles/btn.css"

function Btn() {
    return <div className="btn">
        <div className="txtDiv">Events</div>
        <div className="svgDiv"><img src={Uinon} alt="event" /></div>
    </div>
}

export default Btn;