import React from 'react'
import './blog.css'
import { blogList } from '../HardCoded/hardcode'

function Blog() {
  return (
    <div className='blog-container'>
      <p className='mid-celebrity'>CELEBRITY BLOGS</p>
    
    <div className='blog-grid'>
      
      {blogList.map(blog => <div className='card' key={blog.id} >
          <img src={blog.cover} alt="" className='blog-img' />
          <p className='para-blog'>{blog.description}</p>
          <p className='para-blog'>{blog.createdAt} by {blog.authorName }</p>
          
        </div>)}
      </div>
      </div>
  )
}

export default Blog