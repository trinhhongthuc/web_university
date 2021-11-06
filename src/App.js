import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import New from "./pages/news/New";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Education from "./pages/education/Education";
import Admissions from "./pages/Admissions/Admissions ";
import { useState } from "react";
import Welcome from "./components/welcome/Welcome";
import Students from "./pages/student/Students";
function App() {
  const [showNow, setShowNow] = useState(true);

  return (
    <div style={{ position: "relative" }}>
      {showNow ? <Welcome setShowNow={setShowNow}></Welcome> : ""}
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home showNow={showNow} setShowNow={setShowNow} />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/tintuc">
            <New />
          </Route>
          <Route exact path="/daotao">
            <Education />
          </Route>
          <Route exact path="/tuyensinh">
            <Admissions />
          </Route>
          <Route exact path="/sinhvien">
            <Students />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
