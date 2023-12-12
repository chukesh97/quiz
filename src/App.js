import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import QuizComponent from './components/Quiz';
import HighScore from './components/HighScore';
import StartQuiz from './components/StartQuiz';

const App = () => {
  return (
    <div className="App">
      <Routes>
       <Route path='/' element={<Home />} />
        <Route path='/start' element={<StartQuiz />} />
       <Route path='/quiz' element={<QuizComponent />} />
       <Route path='/highscore' element={<HighScore/>}/>
       <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
