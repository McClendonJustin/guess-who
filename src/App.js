import Header from "./components/Header";
import Board from "./components/Board";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-screen flex flex-col justify-between overflow-hidden">
      <Header />
      <Board />
      <Footer />
    </div>
  );
}

export default App;
