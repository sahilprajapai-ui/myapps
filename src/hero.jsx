import hero from "./images/hero.jpg"
import "./styles/hero.css"

function Hero() {
    return <>
        <h1>Where Community Comes
        </h1>
        <em>Together</em> 
        <p>Create, Volunteer, and Donate to Events That <br/>
        Make a Difference</p>
        <img className="heroImg" src={hero} alt="logo" />
    </>
}

export default Hero;