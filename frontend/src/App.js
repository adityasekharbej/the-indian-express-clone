import "./App.css";
import Footer from "./components/Footer";
import Slideshow from "./components/SlideShow";
import TopComponent from "./components/TopComponent";
import Subscribe from "./components/Subscribe";
import { HomeHeader } from "./components/HomeHeader";
import { Home } from "./components/Home";
import { India } from "./components/India";

function App() {
  return (
    <div className="App">
      <HomeHeader />
      <Footer />
      {/* <Slideshow /> */}
      {/* <TopComponent /> */}
      {/* <Subscribe /> */}
      {/* <Home/> */}
      <India/>
    </div>
  );
}

export default App;
