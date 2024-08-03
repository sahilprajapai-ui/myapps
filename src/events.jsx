import EventCrd from "./eventCrd";
import eve1img from "./images/event image.png"
import "./styles/event.css"


function Myevents() {

    const ngo1 = {
        img: eve1img ,
        name: "Event title",
        alt: "event title ",
        dd : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, commodi!"       
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
        </div>
    </div>
}

export default Myevents;