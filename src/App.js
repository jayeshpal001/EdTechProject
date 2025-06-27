
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import CourseDetail from './Pages/CourseDetail';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './components/Footer';
import ProfilePage from './Pages/ProfilePage';
import { CartPage } from './Pages/CartPage';
function App() {
  return (
    <>
     
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/SignUp' element={<SignUp />}></Route>
        <Route path='/course/:id' element={<CourseDetail />} />
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/profile' element={<ProfilePage />} />
         <Route path='/cart' element={<CartPage />} />

      </Routes>
      <Footer />

      {/* <Home />
     <Login />
     <SignUp /> */}
    </>
  );
}

export default App;
