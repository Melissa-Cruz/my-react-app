import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


let localCompanies = ["LibertyMutual", "Klaviyo", "Fidelity", "Microsoft", "LinkedIn", "Chewy"];
let remoteOnlyCompanies = ["AirBnB", "Pinterest"];

let myFavoriteNumber = 7;
let myLeastFavoriteNumber = 11;

// in class work 
const now = new Date();
const hour = now.getHours();
console.log('hour :>> ', hour)


let timeOfDay; 

if(hour <12){
  timeOfDay = "Morning";
} else if( hour <18 ){
  timeOfDay = "Afternoon";
} else if(hour<24){
  timeOfDay = "Evening";
}else {
  console.log("It's the end of times")
}

const greeting = `Good ${timeOfDay}`; 

const person = {
  name: "Yusuf",
  location:"San Fran",
  yearJoined: "2025", 
  favoriteActivities: ["sleeping", "movies", ""]

}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Person/>


       <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> 

      <div>
        <h1>Doing the Classwork</h1>
        <div> {greeting} {person.name}</div>
        <div>Local Companies</div>
        <ul>
          {localCompanies.map(item =>(
            <li>{item}</li>

          ))}
        </ul>

        <div>Remote Only Companies</div>
        <ul>
          {remoteOnlyCompanies.map(item =>(
            <li>{item}</li>
          ))}
        </ul>
            

      </div>
    </>


  )
}

export default App


function Person(){
  return (
    <div>
        <p> 
          {greeting} {person.name}
        </p>
        <p>
          {person.name} joined 
        </p>
        <p>
          <ul>
            {person.favoriteActivities.map((activity) =>(
              <li>{activity}</li>

            ))}
          </ul>
        </p>


      </div>
  )
    
}