import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { EventsPage } from "../pages/Events";
import { Header } from "../components/Header";


const RoutesApp = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Fragment>
          <Routes>
            <Route exact path="/events" element={<EventsPage />} />
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="*" element={<HomePage />} />
          </Routes>
        </Fragment>
      </BrowserRouter>
    </>
  )
}
export default RoutesApp;