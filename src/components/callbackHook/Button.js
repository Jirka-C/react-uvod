import React from 'react'

function Button({handleClick, children}) {

  console.log("Tlacitko " + children)

  return (
    <button onClick={handleClick}>{children}</button>
  )
}

export default React.memo(Button)