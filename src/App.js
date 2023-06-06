import '../src/App.css'
import Cart from './components/Cart';
import Products from './components/Products';
import Top from './components/Top';
import {BrowserRouter,Routes,Route} from 'react-router-dom'





function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Top />
       <Routes>
         <Route path='/' element={ <Products /> }/>
         <Route path='/cart' element={ <Cart /> }/>
       </Routes>
      </BrowserRouter>
  
  </div>
  );
}

export default App;
