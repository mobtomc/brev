import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Footer from "./Components/Footer.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";
import Summarize from "./Components/Summarize.jsx";
import Sentiment from "./Components/Sentiment.jsx";
import OpenAi from "./Components/OpenAi.jsx"
import Marketing from "./Components/Marketing.jsx";
import Cards from "./Components/Cards.jsx";

function App() {
  return (
    <UserContextProvider>
      <div className="App bg-[#2699fb]">
        <Navbar />
        <div className="gradient-overlay top-left blur-[120px]"></div>

        <div className="w-full ">
          <Hero />
          <Summarize />
          <div className="w-full flex justify-end">
            <div className="grad2 w-[20%] h-[300px] blur-[80px] absolute flex justify-end items-end"></div>
          </div>
          <Sentiment/>
          <OpenAi/>
          <Marketing />
          <Cards></Cards>
          <Footer />
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
