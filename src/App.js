import "./App.css";
import Board from "./components/board";
import Header from "./components/header";
import { MinesProvider } from "./context";

function App() {
  return (
    <div className="App">
      <MinesProvider>
        <Header />
        <Board />
      </MinesProvider>
    </div>
  );
}

export default App;
