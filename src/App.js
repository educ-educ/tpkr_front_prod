import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import Footer from './components/layout/Footer/Footer'
import Navbar from './components/layout/Navbar/Navbar'

function App() {
  return (
    <div className="App">
        <Navbar/>
         {/* <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>
         <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        <Footer/>
    </div>
  );
}

export default App;
