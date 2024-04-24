
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home,About,Page1,Men,Women,Kids,Basket,Login,Contact} from './components/pages/index';
import {Bar} from './components/container/index';
import {Footer,Explore} from './components/section/index';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {StoreProvider} from './hooks/StoreContext';

function App() {
  return (
    <div className="App"> 
    <StoreProvider >
      <BrowserRouter>
      <Bar/>
          <Routes>
            <Route  element={<Home/>}    >
                <Route path='/' element={<Page1/>}   >
                <Route path='/#men' element={<Men />} />
                <Route path='/#women' element={<Women />} />
                <Route path='/#kids' element={<Kids />} />
                <Route path='/#explore' element={<Explore />} />
              </Route>
              <Route path='/basket' element={<Basket />} />
              <Route path='/about' element={<About />}    />
              <Route path='/contact' element={<Contact />}    />
              <Route path='/login' element={<Login />}    />
               
            </Route>

          </Routes>
        {/* <Explore /> */}
      <Footer />
      </BrowserRouter>
    </StoreProvider>
   </div> 
  );
}

export default App;
