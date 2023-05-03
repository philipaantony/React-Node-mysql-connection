import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import Updateform from "./components/Updateform";
import Addcontact from "./pages/addcontact";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import ShowData from "./pages/ShowData";
import SignupPage from "./pages/SignupPage";
import Work from "./pages/Work";
import Userbase from "./tempale/userbase/UserBase";

function App() {
  return (
    <Router>
        <Switch>
          <Route  exact path="/">
          <Home />
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/signup">
            <SignupPage/>
          </Route>
          <Route path="/work">
            <Work/>
          </Route>
          <Route  path="/dash">
            <Dashboard/>
          </Route>
          <Route  path="/showdata">
            <ShowData/>
          </Route>
          <Route  path="/update/:id">
            <Updateform/>
          </Route>
          <Route  path="/userhome">
            <Userbase/>
          </Route>
          <Route  path="/addcontact">
            <Addcontact/>
          </Route>
          <Redirect to='/'>

          </Redirect>

        </Switch>
      
    </Router>
  );
}




function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;

