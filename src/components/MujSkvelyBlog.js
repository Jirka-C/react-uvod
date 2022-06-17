import React from 'react'
import useFetch from './hooks/useFetch'

function MujSkvelyBlog() {

  const [prispevky] = useFetch('https://jsonplaceholder.typicode.com/posts')

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