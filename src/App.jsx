import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'


function App() {
  const [city, setCity] = useState('')
  const [result, setResult] = useState('')
    const changeHandler = e => {
       setCity(e.target.value)
    }
    const submitHnandler = e => {
      e.preventDefault()
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(response=>response.json()).then(data=>{
          const kelvin = data.main.temp
          const celcius = kelvin-273.15
          setResult('temperature at'+' '+city+' '+Math.round(celcius)+"°C")
          setCity('')
        }).catch(error=>console.log(error))
        
    }
  return (
    <center>
      <h3>wether app</h3>
      <form onSubmit={submitHnandler}>
        <input value={city} name="city" onChange={changeHandler}  type="text"/> &nbsp;
        <input type="submit" value="Get Temperature"/>
      </form>
      <hr/>
      <p>{result}</p>
    </center>
  )
}

export default App
