import AppRoutes from "./routes/main";
import Nav from "./components/nav";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav></Nav>
      <AppRoutes></AppRoutes>
    </Router>
  );
}

export default App;
