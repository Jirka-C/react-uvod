import React, { useEffect, useState } from 'react'

function Pozdrav(props) {

  const [kolikrat, setKolikrat] = useState(0)
  const [jmeno, setJmeno] = useState(props.name)

  const handlePozdrav = () => {
    setKolikrat(kolikrat + 1)
  }

  useEffect(() => {
    console.log(`Pozdravil jsi ${kolikrat}x`)
    document.title = `Pozdravil jsi ${kolikrat}x`
  },[kolikrat])

  return (
    <div>
        <h1>Ahoj <input defaultValue={jmeno} onChange={(e) => setJmeno(e.target.value)} /></h1>
        <p>Pozdravil jsi {kolikrat}x</p>
        <button onClick={handlePozdrav}>Pozdrav</button>
    </div>
  )
}

export default Pozdrav