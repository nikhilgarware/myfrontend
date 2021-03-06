import './App.css';
import Greet from './components/Greet'
import FunctionClick from './components/FunctionClick'
import './components/Style.css'

function App() {
  return (
    <div className="App">
        <Greet primary={false} name="Mark" sub="Python" >

            <p className='primary'>This is a childeren conponent of Greet. If you want to use this eliminate 
              the Greet Tag and put the Greet closing tag and then after that close the 
              Greet tag and make changes in the Greet.js file.
              </p>
          </Greet>
        <Greet name="David" sub="DS">
            <FunctionClick />
        </Greet> 
        <Greet name="Ruby" sub = "C++"/>
    </div>
  );
}

export default App;
