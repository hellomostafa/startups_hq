import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import Header from './components/Header/Header';
import BlogDetails from './components/Blogs/BlogDetails/BlogDetails';
import NotFound from './pages/NotFound';
import Footer from './components/Footer/Footer';
import AllPost from './pages/AllPost';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
             <Home/>
          </Route>
          <Route exact path="/home">
             <Home/>
          </Route>
          <Route path="/allPost">
             <AllPost/>
          </Route>

          <Route path="/posts/:id">
             <BlogDetails/>
          </Route>

          <Route path="*">
             <NotFound/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
