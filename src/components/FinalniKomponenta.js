import React, { useContext } from 'react'
import { UserContext } from './Komponenta'

function FinalniKomponenta() {

  const user = useContext(UserContext)

  return (
    <div>{user.name} {user.lastName}</div>
  )
}

export default FinalniKomponenta