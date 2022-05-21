import logo from './logo.svg';
import './App.css';
import {increaseNum,decreaseNum} from './actions';
import { useDispatch,useSelector } from 'react-redux';
function App() {
  const dispatch = useDispatch()
  const val = useSelector((state)=>state.upDown)
  return (
    <div className="App">
          <h1>{val} = dklsmd</h1>

         <input type="button" value="Increment" onClick={()=> { dispatch(increaseNum()) }}></input>
         <br></br>
         <br></br>
         <input type="button" value="Decrement" onClick={()=> { dispatch(decreaseNum()) }}></input>

    </div>
  );
}

export default App;
