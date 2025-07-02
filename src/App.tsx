import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Header />
      <Services />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
