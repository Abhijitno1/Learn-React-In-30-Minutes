import {Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import TodoApp from './TodoApp/TodoApp';
import ModalGround from './ModalDemo/ModalGround'
import CurConverter from './CurrencyConverter/CurConverter';
import Text2Speech from './Text2Speech/Text2Speech';
import About from './About';



function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<TodoApp/>} />
          <Route path='/modaldemo' element={<ModalGround/>} />
          <Route path='/curconvert' element={<CurConverter/>} />
          <Route path='/text2speech' element={<Text2Speech/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
