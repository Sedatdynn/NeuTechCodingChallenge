import data from './utils/data.json';
import Jobs from './components/Jobs';
function App() {
  return (
    <div>
    <div className='header'></div>
    <Jobs data={data}/>
    </div>
  );
}

export default App;
