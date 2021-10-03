import Banner from "./components/banner/Banner";
import BoxNews from "./components/boxNews/BoxNews";
import ContactLive from "./components/contactLive/ContactLive";
import Heading from "./components/heading/Heading";
import { Training } from "./components/training/Training";
// import {RouteBrowser as Router, Route, Switch} from "react-router-dom"
function App() {
  return (
    <>
      <Banner />
      <ContactLive />
      <Training />

      <div className="container">
        <div className="col-xl">
          <Heading heading="day la heading" color="red" fontSize="30" />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <BoxNews />
          <BoxNews />
          <BoxNews />
          <BoxNews />
          <BoxNews />
          <BoxNews />
          <BoxNews />
        </div>
      </div>
    </>
  );
}

export default App;
