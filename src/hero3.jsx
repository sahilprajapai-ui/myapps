import Float from "./float"
import "./styles/hero3.css"

function Hero3() {

    const float1 = {
        num: "100+",
        heading : "Events"
    }

    const float2 = {
        num: "5000+",
        heading : "Volunteer"
    }
    const float3 = {
        num: "1000+",
        heading : "Donation"
    }


    return <div className="hero3">
        <Float {...float1} />
        <Float {...float2} />
        <Float {...float3} />
        </div>
}

export default Hero3;