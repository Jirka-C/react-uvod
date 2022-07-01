import React from 'react'
import { Link } from 'react-router-dom'

function Rozcestnik() {
  return (
    <div>
      <h1>Rozcestnik</h1>
      <nav>
        <Link to="/">Rozcestnik</Link> <br />
        <Link to="blog">Blog</Link>
      </nav>
    </div>
  )
}

export default Rozcestnik