import EventCrd from "./eventCrd";
import ngo1img from "./images/ngo1.png"
import "./styles/event.css"


function Myevents() {

    const ngo1 = {
        img: ngo1img ,
        name: "Helpage India",
        alt: "helpage india",
        dd : "HelpAge India is a secular, not-for-profit organization in India, registered under the Societies’ Registration Act of 1860. Set up in 1978, "
        
    }

    return <div className="eventspage">
        <div className="title">Events</div>
        <div className="card-container">
            <EventCrd {...ngo1} />
            <EventCrd {...ngo1} />
            <EventCrd {...ngo1} />
            <EventCrd {...ngo1} />
            <EventCrd {...ngo1} />
            <EventCrd {...ngo1} />
            <EventCrd {...ngo1} />
            <EventCrd {...ngo1} />
            <EventCrd {...ngo1} />
        </div>
    </div>
}

export default Myevents;