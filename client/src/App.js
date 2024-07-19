import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Footer from "./Components/Footer.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";
import Summarize from "./Components/Summarize.jsx";
import Sentiment from "./Components/Sentiment.jsx";
import OpenAi from "./Components/OpenAi.jsx"
import Market from "./Components/Market.jsx";
import Cards from "./Components/Cards.jsx";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <div className="gradient"></div>
        <Navbar />
        <div className="gradient-overlay top-left blur-[150px]"></div>

        <div className="w-full ">
          <Hero />
          <Summarize />
          <div className="w-full flex justify-end">
            <div className="grad2 w-[40%] h-[500px] blur-[250px] absolute flex justify-end items-end"></div>
          </div>
          <Sentiment/>
          <OpenAi/>
          <Market />
          <Cards/>
          <Footer />
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
