import React from 'react'

function Kolik({title, pocet}) {

  console.log(`Text ${title}`)

  return (
    <div>{title} - {pocet}</div>
  )
}

export default React.memo(Kolik)