import './App.css';
import NavBar from './Components/Navbar'
import Footer from './Components/Footer';
import Counter from './Components/Counter';

function App() {

  let columns = ["contact", "Location", "Copyright"];
  return (
    <div className="App">
      {/* <NavBar/>
      <Footer columns = {columns}/>
       */}

       <Counter/>
       
    </div>
  );
}

export default App;
