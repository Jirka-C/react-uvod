import React, { useCallback, useState } from 'react'
import Button from './Button'
import Kolik from './Kolik'
import Title from './Title'

function HlavniKomponenta() {

  const [vek, setVek] = useState(25)
  const [pocetPiv, setPocetPiv] = useState(12)

  const pridejVek = useCallback(() => {
    setVek(vek + 1)
  }, [vek])

  const pridejPivo = useCallback(() => {
    setPocetPiv(pocetPiv + 1)
  }, [pocetPiv])

  return (
    <div>
      <Title />
      <Kolik title="Věk" pocet={vek} />
      <Button handleClick={pridejVek}>Pridej vek</Button>
      <Kolik title="Počet piv" pocet={pocetPiv} />
      <Button handleClick={pridejPivo}>Pridej pivo</Button>
    </div>
  )
}

export default React.memo(HlavniKomponenta)