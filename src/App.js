import "./App.css";
import Header from './Header';
import Nav from './Nav';
import Main from './Main';

const App = () => {
  return (
    <div className="HeaderNav">
      <Header />
      <Nav />
    <div className="MainContainer">
      <Main />
    </div>
    </div>
  )
}

export default App;
