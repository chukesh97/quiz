import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import QuizComponent from './components/Quiz';
import ScoreBoard from './components/ScoreBoard';

const App = () => {
  return (
    <div className="App">
      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/quiz' element={<QuizComponent />} />
       <Route path='/score' element={<ScoreBoard/>}/>
       <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
