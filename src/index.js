/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import ReactDOM from "react-dom"

const page = (
  <div>
    <img src="./react-logo.png" width="40px" />
    <h1>Func Facts About React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
)

ReactDOM.render(page, document.getElementById("root"))