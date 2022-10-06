import React from "react"
import CTA from './CTA'

function App() {
  return (
    <div>
      <CTA>
        <h1>This is an important CTA</h1>
        <button>Click me now or you'll miss out!</button>
      </CTA>

      <CTA>
        <form>
          <input type="email" placeholder="Enter email address here"/>
          <button></button>
        </form>
      </CTA>
    </div>
  )
}

export default App