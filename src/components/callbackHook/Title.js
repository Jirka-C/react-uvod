import React from 'react'

function Title() {

  console.log("Nadpis")

  return (
    <h2>Nadpis</h2>
  )
}

export default React.memo(Title)