import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//import Header from "./Header";
//import Footer from "./Footer";
//import Navbar from "./Navbar";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Users from "./pages/Users";



function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="./">Home Botton</Link>
            </li>
            <li>
              <Link to="./pages/About">About Me</Link>
            </li>
            <li>
              <Link to="./pages/Users">Users All</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="./pages/About" exact Component={About} />
          <Route path="./pages/Users" exact Component={Users} /> 
          <Route path="./" exact Component={Homepage} />
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
//function Home() {
  //return (

    //<div>
      //  <Header />
        

    //<h2>Home</h2>
//<p>   Place holder for Login Page </p>

//<Navbar />
//<Footer />
 //</div>

  //);
 
  
//}

//function About() {
  //return <h2>About</h2>;
//}

//function Users() {
 // return <h2>Users</h2>;
//}
