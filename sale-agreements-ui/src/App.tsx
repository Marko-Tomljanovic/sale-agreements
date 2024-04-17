import { BrowserRouter } from "react-router-dom";
import "./App.css";
import routes from "./components/Route";
import GlavniLayout from "./components/layout/GlavniLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlavniLayout>{routes}</GlavniLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
