import React, { useEffect, useState } from 'react'
import { RichText } from 'prismic-reactjs'
import { client, linkResolver } from '../prismic-configuration'
import NotFound from './NotFound'
import '../styles/pages/Landingpage.css'
import HighlightPosts from '../components/HighlightPosts'

const Landingpage = ({ match }) => {
  const [doc, setDocData] = useState(null)
  const [notFound, toggleNotFound] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const result = await client.getSingle('landingpage',
        {'fetchLinks': ['post.galerie', 'post.blog_header', 'post.abschnitt_1_text']}
      )
      if (result) {
        console.log(result);
        return setDocData(result)
      } else {
        toggleNotFound(true)
      }
    }
    fetchData()
  }, [])

  if (doc) {
    return (
      <div className="landingpage flex">
        <HighlightPosts posts={doc.data['highlight-posts']} />
      </div>
    )
  } else if (notFound) {
    return <NotFound />
  }
  return null
}

export default Landingpage