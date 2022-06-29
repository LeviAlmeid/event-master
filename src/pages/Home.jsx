import { Event } from "../components/Event";

export function HomePage() {
  return (
    <>
      <div className="container-md mt-3">
        <label className="text-bold" htmlFor="#searchEvent">Search Event</label>
        <input className="w-100" id="searchEvent" type='text' />

        <div className="Events pt-2 mt-2 ">
          <div className="row">
            <Event  />
            <Event  />
            <Event  />
          </div>

        </div>


      </div>

    </>
  )
}