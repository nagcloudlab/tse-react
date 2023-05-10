import './App.css';
import CountButtons from './react/counter/CountButtons';
import CountDisplay from './react/counter/CountDisplay';
import Box from './react/voting/Box';

function App() {
  return (
    <div className="container">
      <div className='display-1'>state management with Redux</div>
      <hr />
      {/* <CountButtons />
      <CountDisplay /> */}
      <Box />
    </div>
  );
}

export default App;
