import React from 'react'
import { useParams } from 'react-router-dom'
import './BlogContent.css';
const BlogContent = () => {


   const json = [
 {  "id": 1,
      "title": "The Art of Cooking",
      "content": "This is the full content of the blog post about the art of cooking. It includes detailed information, tips, and recipes to help you explore the culinary world and enhance your cooking skills.post about the art of cooking. It includes detailed information, tips, and recipes to help you explore the culinary world and enhance your cooking skills.post about the art of cooking. It includes detailed information, tips, and recipes to help you explore the culinary world and enhance your cooking skills.post about the art of cooking. It includes detailed information, tips, and recipes to help you explore the culinary world and enhance your cooking skills.post about the art of cooking. It includes detailed information, tips, and recipes to help you explore the culinary world and enhance your cooking skills. "
    },
     {  "id": 2,
      "title": "Traveling the World",
      "content": "This is the full content of the blog post about traveling the world. Join us on a journey to exotic destinations and hidden gems, and discover the wonders of the world. post about the art of cooking. It includes detailed information, tips, and recipes to help you explore the culinary world and enhance your cooking skills.post about the art of cooking. It includes detailed information, tips, and recipes to help you explore the culinary world and enhance your cooking skills.post about the art of cooking. It includes detailed information, tips, and recipes to help you explore the culinary world and enhance your cooking skills.post about the art of cooking. It includes detailed information, tips, and recipes to help you explore the culinary world and enhance your cooking skills."
    },
     {  "id":3,
      "title": "Coding for Beginners",
      "content": "This is the full content of the blog post about coding for beginners. Start your programming journey with our beginner-friendly coding tutorials and master the basics of programming. post about the art of cooking. It includes detailed information, tips, and recipes to help you explore the culinary world and enhance your cooking skills.post about the art of cooking. It includes detailed information, tips, and recipes to help you explore the culinary world and enhance your cooking skills.post about the art of cooking. It includes detailed information, tips, and recipes to help you explore the culinary world and enhance your cooking skills.post about the art of cooking. It includes detailed information, tips, and recipes to help you explore the culinary world and enhance your cooking skills."
    }
]
const {id} = useParams();
const jsonData = json.find(blog=>
    blog.id===parseInt(id,10));
  
    
  return (
    <div className='Content'>
        <h1 >id : {jsonData?.id}</h1>
        <h1 className='Title'>{jsonData?.title}</h1>
        <p>{jsonData?.content}</p>

    </div>
  )
}

export default BlogContent