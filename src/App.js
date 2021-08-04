import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./Components/common/Navbar";
import UserDetails from "./Components/user/UserDetails";
// import EditUserDetails from "./Components/user/EditUserDetails";
import Users from "./Components/user/Users";
import NoPageFound from "./Components/common/NoPageFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/Users" exact component={Users} />
        <Route path="/UserDetails/:login" component={UserDetails} />
        <Route path="*" component={NoPageFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
