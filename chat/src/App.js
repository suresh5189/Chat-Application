import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Join from "./component/Join/Join.js";
import Chat from './component/chat/Chat';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path='/' element={<Join />}/>
        </Routes>
        <Routes>
        <Route path='/chat' element={<Chat />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
