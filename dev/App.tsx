import type { Component } from "solid-js"
import Marquee from "../src"

const App: Component = () => {
  return (
    <div>
      <Marquee speed={100}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
        <div>Item 7</div>
        <div>Item 8</div>
      </Marquee>
    </div>
  )
}

export default App
