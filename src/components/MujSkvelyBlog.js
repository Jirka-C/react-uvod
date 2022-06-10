import React, { useState, useEffect } from 'react'
import axios from 'axios'

function MujSkvelyBlog() {

  const [prispevky, setPrispevky] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPrispevky(response.data))
  }, [])

  return (
    <main>
      <h1>Muj Skvely Blog</h1>

      <section>
        {prispevky.map(({id, title, userId, body}) =>
          <div key={id}>
            <h2>{title}</h2>
            <small>autor  - {userId}</small>
            <p>{body}</p>
            <hr />
          </div>
        )}
      </section>
    </main>
  )
}

export default MujSkvelyBlog