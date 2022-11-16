import {Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import TodoApp from './TodoApp/TodoApp';
import CurConverter from './CurrencyConverter/CurConverter';
import About from './About';



function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<TodoApp/>} />
          <Route path='/curconvert' element={<CurConverter/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
