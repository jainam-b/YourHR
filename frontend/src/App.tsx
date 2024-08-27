import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Signup from './components/Signup';
import Home from './components/Home';

function App() {
  return (
  <>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup />}  />
          

        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
