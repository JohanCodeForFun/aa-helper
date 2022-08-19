import "./App.css";
import Header from './components/header';
import Nav from './components/nav';
import Main from './components/main';

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
