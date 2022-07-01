import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from './hooks/useFetch';

function DetailClanku() {

  let { id } = useParams();

  const [clanek] = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

  return (
    <div>
      <Link to="/blog">Zpět na blog</Link>
      <h1>{clanek.title}</h1>
      <small>Uživatel č.{clanek.userId}</small>
      <p>{clanek.body}</p>
    </div>
  )
}

export default DetailClanku