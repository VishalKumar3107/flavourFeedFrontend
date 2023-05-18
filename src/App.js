import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Auth } from './pages/auth';
import { CreateRecipe } from './pages/create-recipe';
import { SaveRecipe } from './pages/save-recipe';
import { Navbar } from './components/navbar';
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Homepage } from './pages/Homepage';
import RecipeDetail from './pages/recipe';
import Cuisines from './pages/cuisines';
import UserProfile from './pages/userProfile';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path = "/" element={<Homepage/>}/>
          <Route path = "/about" element={<About/>}/>
          <Route path = "/auth" element={<Auth/>}/>
          <Route exact path="/recipe/:id" element={<RecipeDetail/>} />
          <Route path = "/cuisines/:cuisine" element={<Cuisines/>}/>
          <Route path = "/create" element={<CreateRecipe/>}/>
          <Route path = "/recipes/user/:username" element={<UserProfile/>}/>
          <Route path = "/saved" element={<SaveRecipe/>}/>
          <Route path = "/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
