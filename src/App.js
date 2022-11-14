import {Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import TodoApp from './TodoApp';
import About from './About';


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<TodoApp/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
