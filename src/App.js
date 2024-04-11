import Header from "./components/Header";
import Home from "./components/Home";
import { items } from "./items";

function App() {
  return (
    <div>
      <Header title="The Coffee Corner" />
      <Home items={items} />
    </div>
  );
}

export default App;
