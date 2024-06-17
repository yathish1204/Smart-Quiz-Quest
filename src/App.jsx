import { useState } from 'react'
import './App.css'
import Quiz from './Components/Quiz/Quiz'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='quizz-app'>
    <Quiz/>
   </div>
  )
}

export default App
