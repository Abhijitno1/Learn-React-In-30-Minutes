import {Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import TodoApp from './TodoApp/TodoApp';
import Pricing from './Pricing';
import About from './About';



function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<TodoApp/>} />
          <Route path='/pricing' element={<Pricing/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
