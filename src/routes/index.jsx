import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { EventsPage } from "../pages/Events";
import { Header } from "../components/Header";

const Private = ({ Item }) => {
  const signed = false;

  return signed > 0 ? <Item /> : <HomePage />
}

const RoutesApp = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Fragment>
          <Routes>
            <Route exact path="/events" element={<Private Item={<EventsPage />} />} />
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="*" element={<HomePage />} />
          </Routes>
        </Fragment>
      </BrowserRouter>
    </>
  )
}
export default RoutesApp;