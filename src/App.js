import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Profile from "./pages/profile/profile"

import {Switch, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/profile">
          <Profile  />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  )
}

export default App