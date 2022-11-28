import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <button className="btn loading">loading</button>
    </div>
  )
}

export default App
