import Card from "./cardh2" 
import card_1 from "./images/card_1.png"
import card_2 from "./images/card_2.png"
import card_3 from "./images/card_3.png" 
import "./styles/hero2.css" 

const card1 = {
    image : `${card_1}` ,
    dd: "Easily create and manage events with a user-friendly interface.", 
    heading: "Event Creation " ,
    alt : " image alt"
    
}

const card2 = {
    image : `${card_2}` ,
    dd: "Find and join volunteer opportunities that match your interests and skills.", 
    heading: "Volunteer Opportunities " ,
    alt : " image alt"
    
}

const card3 = {
    image : `${card_3}` ,
    dd: "Connect with like-minded individuals and build a supportive community.", 
    heading: "Community Engagement" ,
    alt : " image alt"
    
}

function Hero2() {
    return <div className="hero2">
        <h2>Discover the Power of Community with JoinIn</h2>
        <p> Explore Features That Bring People Together for a<br/>
        Greater Cause</p>
        <div className="cards">
            <Card  {...card1} />
            <Card  {...card2} />
            <Card  {...card3} />

        </div>
    </div>
}

export default Hero2;