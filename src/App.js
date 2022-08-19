import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="HeaderNav">
      <Header />
      <Nav />
      <div className="MainContainer">
        <Main />
      </div>
    </div>
  );
};

export default App;
