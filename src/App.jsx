import {puppyList} from './data.js'
import { useState } from 'react'
import './App.css'

function App() {

  const [puppies] = useState(puppyList)
  const [featPupId, setfeatPupId] = useState(null)

  console.log("puppyList:", puppyList)

  const featuredPup = puppies.find((pup) => pup.id === featPupId)

  return (
   <div className= "App">
    {
      puppies.map((puppy) => {
        console.log(featuredPup)
        return <p onClick={() => {setfeatPupId(puppy.id)}} key= {puppy.id}>{puppy.name}</p>
      })
    }
    <p>{featPupId}</p>
    {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
   </div>
  )
}

export default App
