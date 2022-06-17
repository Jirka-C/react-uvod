import React, { useMemo, useState } from 'react'

function Pocitadlo() {

  const [tlacitko1, setTlacitko1] = useState(0)
  const [tlacitko2, setTlacitko2] = useState(0)

  const zmenTlacitko1 = () => {
    setTlacitko1(tlacitko1 + 1)
  }

  const zmenTlacitko2 = () => {
    setTlacitko2(tlacitko2 + 1)
  }

  const sudeCislo = useMemo(() => {
    let i = 0
    while (i < 2000000000) i++
    return tlacitko2 %2 === 0
  }, [tlacitko2])

  return (
    <>
      <button onClick={zmenTlacitko1}>Tlacitko jedna {tlacitko1}</button>
      <button onClick={zmenTlacitko2}>Tlacitko jedna {tlacitko2}</button>
      <span>Je {sudeCislo ? 'sude' : 'liche'}</span>
    </>
  )
}

export default Pocitadlo