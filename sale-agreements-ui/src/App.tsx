import "./App.css";
import HomePage from "./components/HomePage";
import GlavniLayout from "./components/layout/GlavniLayout";

function App() {
  return (
    <div className="App">
      <GlavniLayout>
        <HomePage />
      </GlavniLayout>
    </div>
  );
}

export default App;
