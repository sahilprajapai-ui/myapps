import Btn from "./btn";
import hero4img from "./images/hero4img.png"
import "./styles/hero4.css"

function Hero4() {
    return <div className="hero4">
        <img className="hero4img" src= {hero4img} alt="people holding hands together" />
        <div className="text">
            <h6>Empower Your Community <br />
            with JoinIn</h6>
            <p>JoinIn is your go-to platform for creating, joining, and supporting community-driven events. Whether you're looking to volunteer, donate, or simply connect with like-minded individuals, JoinIn provides the tools and resources you need to make a real impact.</p>
            <Btn />
        </div>
    </div>
}

export default Hero4;