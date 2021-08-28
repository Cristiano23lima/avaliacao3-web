import './App.css';

import Header from "./components/Header";
import CabecalhoPostagens from "./components/CabecalhoPostagens";
import FeedPostagens from "./components/FeedPostagens";

function App() {
  return (
    <div className="App">
      <Header />
      <CabecalhoPostagens />
      <FeedPostagens />
    </div>
  );
}

export default App;
