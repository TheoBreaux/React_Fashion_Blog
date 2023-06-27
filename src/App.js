import "./App.css";
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Woman from "./images/woman.jpg";
import Trio from "./images/trio.jpg";

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Article
          date="11/12/20"
          title="On the Street in Brooklyn"
          image={Woman}
        />
        <Article date="11/11/20" title="Vintage in Vogue" image={Trio} />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
