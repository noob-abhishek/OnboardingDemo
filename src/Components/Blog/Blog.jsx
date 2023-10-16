import React from 'react'
import BlogCard from '../BlogCard/BlogCard';
import './Blog.css'
import { Link } from 'react-router-dom';
const Blog = () => {
const json = [
    {
        "id": 1,
      "title": "The Art of Cooking",
      "author": "John Doe",
      "date": "2023-10-16",
      "category": "Food",
      "excerpt": "Explore the culinary world with our latest recipes and cooking tips.",
      "image": require('../../images/blog_photo_1.avif')
      
    },
    {   "id": 2,
      "title": "Traveling the World",
      "author": "Jane Smith",
      "date": "2023-10-15",
      "category": "Travel",
      "excerpt": "Join us on a journey to exotic destinations and hidden gems.",
      "image": require('../../images/blog_photo_2.avif')
      
    },
    {   "id": 3,
      "title": "Coding for Beginners",
      "author": "Mike Johnson",
      "date": "2023-10-14",
      "category": "Technology",
      "excerpt": "Start your programming journey with our beginner-friendly coding tutorials.",
      "image": require('../../images/blog_photo_3.avif')
      
    }
  ]
  
  
  return (
    <div className="Blog">
        {json.map((post)=>(
            <Link to={'/BlogContent/' + post.id} key={post.id} className='link'> 
            <BlogCard  {...post} />
            </Link>
        )
        )}

      
      
    
  </div>
  )
}

export default Blog