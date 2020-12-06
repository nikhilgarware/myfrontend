import './App.css';
import Greet from './components/Greet'

function App() {
  return (
    <div className="App">
        <Greet name="Mark" sub="Python">
            <p>This is a childeren conponent of Greet. If you want to use this eliminate 
              the Greet Tag and put the Greet closing tag and then after that close the 
              Greet tag and make changes in the Greet.js file.
              </p>
          </Greet>
        <Greet name="David" sub="DS">
          <button>Action</button>
        </Greet> 
        <Greet name="Ruby" sub = "C++"/>
    </div>
  );
}

export default App;
