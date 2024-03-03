import "./App.css";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route 
            path="/"
            element={<News key={"general"} pageSize={6} country="in" category="general" />}
          ></Route>
          <Route
            path="/buisness"
            element={<News key={"buisness"} pageSize={6} country="in" category="buisness" />}
          ></Route>
          <Route
            path="/entertainment"
            element={
              <News key={"entertainment"}  pageSize={6} country="in" category="entertainment" />
            }
          ></Route>
          <Route
            path="/general"
            element={<News key={"general"}  pageSize={6} country="in" category="general" />}
          ></Route>
          <Route
            path="/health"
            element={<News key={"health"}  pageSize={6} country="in" category="health" />}
          ></Route>
          <Route
            path="/science"
            element={<News key={"science"}  pageSize={6} country="in" category="science" />}
          ></Route>
          <Route
            path="/sports"
            element={<News key={"sports"}  pageSize={6} country="in" category="sports" />}
          ></Route>
          <Route
            path="/technology"
            element={<News key={"technology"}  pageSize={6} country="in" category="technology" />}
          ></Route>
        </Routes>
      </Router>
      </div>
  );
}

export default App;
