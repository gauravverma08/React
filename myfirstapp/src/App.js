import './App.css';
// import Accordian from './Components/Accordian';
import Navbarr from './Components/Navbarr';
// import Textapp from './Components/Textapp';
// import Home from "./Components/Home.jsx";
import Nav from "./Components/Navigation.jsx";

function App() {
  return (
    <>
    <div>
      <h1>Star Store</h1>
      <Nav name ={"Home"}/>
      <Nav name ={"Blogs"}/>
      <Nav name ={"Contacts"}/>
    </div>
    </>
  );
}

export default App;
