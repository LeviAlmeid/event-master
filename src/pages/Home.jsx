import { Event } from "../components/Event";
import { useState, useEffect } from "react";
import { api } from "../services/api";



export function HomePage() {
  const [event, setEvent] = useState();

  useEffect(() => { 
    api.get("event").then(({data}) => {
      setEvent(data);
    });
  }, []);
  console.log(event);

  return (
    <>
      <div className="container-md mt-3 ">
        <div className="w-50 mx-auto mt-4">
          <label className="text-bold" htmlFor="#searchEvent">Search Event</label>
          <input className="w-100 " id="searchEvent" type='text' />

        </div>

        <div className="Events pt-2 mt-3">
          <div className="row">
           {event?.map((event) => {
            console.log(event?.name);
            
            return <Event 
              key= {event.id}
              id= {event.id}
              name={event.name}
              linkPicture= {event.linkPicture}
            /> ;
           })}
          </div>

        </div>


      </div>

    </>
  )
}