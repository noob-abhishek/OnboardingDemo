import React from 'react';
import './BlogCard.css';
const BlogCard = ({title,author,date,image,excerpt}) => {

    
  return (
    <div>
         <div className="blog-post-card">
      <img src={image} alt={title} className="post-image" />
      <div className="post-details">
        <h2 className="post-title">{title}</h2>
        <p className="post-author">Author: {author}</p>
        <p className="post-date">Date: {date}</p>
        <p>Desc : {excerpt}</p>
      </div>
    </div>



    </div>
  )
}

export default BlogCard