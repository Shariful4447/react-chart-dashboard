
import './App.css';
import AChart from './Components/AChart/AChart';
import LChart from './Components/LChart/LChart';
import PChart from './Components/PChart/PChart';

function App() {
  return (
    <div>
      <h1>Simple Line Chart : </h1>
      <LChart></LChart>
      <br />
      <h1>Simple Area Chart :</h1>
      <AChart></AChart>
      <br />
      <h1>Simple Two Line Pie Chart : </h1>
      <PChart></PChart>
    </div>
  );
}

export default App;
