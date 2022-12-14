import {Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import TodoApp from './TodoApp/TodoApp';
import ModalGround from './ModalDemo/ModalGround'
import CurConverter from './CurrencyConverter/CurConverter';
import Text2Speech from './Text2Speech/Text2Speech';
import Speech2Text from './Text2Speech/Speech2Text';
import CurrentWeather from './Weather/CurrentWeather';
import Converters from './Converters/Converters';
import Translator from './Translator/Translator';


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<TodoApp/>} />
          <Route path='/translator' element={<Translator/>} />
          <Route path='/converters' element={<Converters/>} />
          <Route path='/curweather' element={<CurrentWeather/>} />
          <Route path='/curconvert' element={<CurConverter/>} />
          <Route path='/text2speech' element={<Text2Speech/>} />
          <Route path='/speech2text' element={<Speech2Text/>} />
          <Route path='/about' element={<ModalGround/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
