import { Event } from "../components/Event";
import { useState, useEffect } from "react";
import { api } from "../services/api";



export function EventsPage() {
  const [event, setEvent] = useState();

  useEffect(() => {
    api.get("event").then(({ data }) => {
      setEvent(data);
    });
  }, []);

  console.log(event)



  return (
    <>
      <div className="container-md mt-3 ">
        <div className="w-50 mx-auto mt-4">
          <label className="text-bold" htmlFor="#searchEvent">Search Event</label>
          <input className="w-100 " id="searchEvent" type='text' />

        </div>
        <div className="w-50 mx-auto mt-4 d-flex align-items-center justify-content-center">
          <button type='button' className='border-0 bg-transparent '>
            <i class="bi bi-plus bg-success rounded-circle p-1 me-2"></i>
          </button>
          <h4  >New Event</h4>
        </div>



        <div className="Events pt-2 mt-3">
          <div className="row">
            {event?.map((event) => {

              return <Event
                key={event.id}
                id={event.id}
                options='editable'
                name={event.name}
                linkPicture={event.linkPicture}
                description={event.description}
                date={event.date}
                start={event.startAt}
                finish={event.finishAt}
              />;
            })}
          </div>

        </div>


      </div>

    </>
  )
}