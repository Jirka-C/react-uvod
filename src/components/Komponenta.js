import React, { createContext, useEffect, useState } from 'react'
import DruhaKomponenta from './DruhaKomponenta'

export const UserContext = createContext()

function Komponenta() {

  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)
  const [user, setUser] = useState({name: "Jirka", lastName: "Cechmanek"})

  const plusPet = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prevCount => prevCount + 1)
    }
  }

  useEffect(() => console.log("Komponenta"), [])

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Plus 1</button>
      <button onClick={plusPet}>Plus 5</button>

      <br /><br />

      <button onClick={() => setShow(!show)}>Zobraz</button>
      {show && <h2>Esse laborum aute anim exercitation voluptate nostrud esse laboris magna enim consectetur duis eu.</h2>}

      <UserContext.Provider value={user}>
        <DruhaKomponenta />
      </UserContext.Provider>

    </>
  )
}

export default Komponenta