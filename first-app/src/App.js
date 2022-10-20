import logo from './logo.svg';
import './App.css';

export default function App() {

const name = "Adarsh";

const isLoggedin = false;

const returnHTML = (
  
                  <div className="App">
                  <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                      
                      {/* since this is a jsx file that is combibatin on html and js this whole code change into pure j susing Babel
                      and in order to use js we have to use curly bracket and note we can only write one line of code */}
                      {/* <h1>Hello{isLoggedin?name:' World'} </h1> */}
                      {!isLoggedin && <p>Hello World</p> }
                      {isLoggedin && <p>Hello {name} </p> }
                      {/* now in jsx if we have (true && statement) it will return statement */}
                      
                    </p>
                    
                  </header>
                  </div>
                  
                  
                  
);
// please note that we cannot return two tags indepenedtly for that we must have to wrap them into a single tag or we can use react fragments
                  // as done
  

  return returnHTML;
    
  
}


