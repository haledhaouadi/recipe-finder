import{
  BrowserRouter as Router,
  Routes ,
  Route 
} from "react-router-dom"


import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Categories from "./pages/Categories";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn/SignIn";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
