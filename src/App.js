import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          {/* <Route path="Home" element={<FeatureComponent />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
