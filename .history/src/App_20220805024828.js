import Arena from "./page/arena";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return <div className="App">
     <Router>

      <Routes>
      <Route path='/arena/:id'  element={<Arena/>}> </Route>
      </Routes>

    </Router>
  </div>;
}

export default App;
