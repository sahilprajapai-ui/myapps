import ngo1img from "./images/ngo1.png"
import "./styles/NGOpage.css"
import ngo2img from "./images/ngo2.png"
import ngo3img from "./images/ngo3.png"
import ngo4img from "./images/ngo4.png"
import ngo5img from "./images/ngo5.png"
import ngo6img from "./images/ngo6.png"
import EventCrd from "./eventCrd"


function Myngos() {

    const ngo1 = {
        img: ngo1img ,
        name: "Helpage India",
        alt: "helpage india",
        dd : "HelpAge India is a secular, not-for-profit organization in India, registered under the Societies’ Registration Act of 1860. Set up in 1978, "
        
    }

    const ngo2 = {
        img: ngo2img ,
        name: "PWC",
        alt: "PWC",
        dd : "Paws for a Cause is an animal welfare initiative by young people in Delhi who have chosen to combine their work as animal rescuers or adoptions coordinators under a common platform."        
    }
    const ngo3 = {
        img: ngo3img ,
        name: "Actionaid",
        alt: "Actionaid",
        dd : "ActionAid Association is an organisation working for social and ecological justice. ActionAid has been engaged with the most marginalised communities in India since 1972"        
    }
    const ngo4 = {
        img: ngo4img ,
        name: "C.S.S.A.R.",
        alt: "C.S.S.A.R.",
        dd : "Provide support to disadvantaged and poor children for their educational mainstreaming and development with special focus at girl children."        
    }
    const ngo5 = {
        img: ngo5img ,
        name: "Deepalaya",
        alt: "Deepalaya",
        dd : "Deepalaya started in 1979 with 7 founding members with the objective of educating not-so-privileged children. Over the years, our focus has expanded from providing education only to children to helping underprivileged women, youth and children become self-reliant through education and vocational training."        
    }
    const ngo6 = {
        img: ngo6img ,
        name: "Crowdwave",
        alt: "Crowdwave",
        dd : "Crowd Wave believes that a simple act of kindness can create ripples. We are a crowd funding platform that supports many noble causes and campaigns, from raising funds for NGOs to individuals in dire need of help"        
    }


    return <div className="ngospage">
        <div className="title-ngo">NGOs</div>
        <div className="ngocard-container">
            <EventCrd {...ngo1} />
            <EventCrd {...ngo2} />
            <EventCrd {...ngo3} />
            <EventCrd {...ngo4} />
            <EventCrd {...ngo5} />
            <EventCrd {...ngo6} />
        </div>
    </div>
}

export default Myngos;