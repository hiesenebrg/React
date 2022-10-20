import logo from './logo.svg';
import './App.css';

export default function App() {

const name = "Adarsh";



const returnHTML = (
                  <div className="App">
                  <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                      <h1>Hello world</h1>
                      {/* since this is a jsx file that is combibatin on html and js this whole code change into pure j susing Babel
                      and in order to use js we have to use curly bracket and note we can only write one line of code */}
                      {console.log("hello world")}
                      {name}
                    </p>
                    
                  </header>
                  </div>
);
  

  return returnHTML;
    
  
}


