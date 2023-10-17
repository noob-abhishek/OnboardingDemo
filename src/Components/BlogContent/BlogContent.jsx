import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogContent.css';

const BlogContent = () => {
   const json = [
    {
      "id": 1,
      "title": "The Art of Cooking",
      "content": [
        {
          "type": "heading",
          "text": "Introduction"
        },
        {
          "type": "paragraph",
          "text": "In the world of culinary delights, the art of cooking is a beautiful journey of flavors and aromas."
        },
        {
          "type": "heading",
          "text": "Getting Started"
        },
        {
          "type": "paragraph",
          "text": "Before diving into the kitchen, make sure you have the right ingredients and tools."
        },
        {
          "type": "subheading",
          "text": "Knife Skills"
        },
        {
          "type": "paragraph",
          "text": "Start by honing your knife skills. A sharp knife is your best friend in the kitchen."
        },
        {
          "type": "heading",
          "text": "Exploring Cuisines"
        },
        {
          "type": "paragraph",
          "text": "Travel the world through your taste buds by exploring different cuisines."
        }
      ]
    },
    {
      "id": 2,
      "title": "Traveling the World",
      "content": [
        {
          "type": "heading",
          "text": "Wanderlust Begins"
        },
        {
          "type": "paragraph",
          "text": "Embark on a journey of a lifetime, filled with adventures and discoveries. The world is quite frigile place to stay, Travel more you can, Dont worry i am just writing randoms to fill this json. you don't really need to read this.... still here? .... i said you dont need to read... fine! I'll stop writing. "
        },
        {
          "type": "subheading",
          "text": "Hidden Gems"
        },
        {
          "type": "paragraph",
          "text": "Discover hidden gems in remote corners of the world, far away from tourist crowds."
        },
        {
          "type": "heading",
          "text": "Cultural Experiences"
        },
        {
          "type": "paragraph",
          "text": "Immerse yourself in the cultures of the places you visit. Try local foods and traditions."
        }
      ]
    },
    {
      "id": 3,
      "title": "Coding for Beginners",
      "content": [
        {
          "type": "heading",
          "text": "Starting Your Coding Journey"
        },
        {
          "type": "paragraph",
          "text": "If you're new to coding, don't worry. We'll guide you through the basics."
        },
        {
          "type": "subheading",
          "text": "Choosing a Language"
        },
        {
          "type": "paragraph",
          "text": "Select a programming language that aligns with your interests and goals."
        },
        {
          "type": "heading",
          "text": "Practice Makes Perfect"
        },
        {
          "type": "paragraph",
          "text": "Coding is a skill that improves with practice. Keep coding to get better."
        }
      ]
    }
  ];
  
  const { id } = useParams();
  const jsonData = json.find((blog) => blog.id === parseInt(id, 10));

  return (
    <div className="BlogContent">
      <div className="BlogHeader">
        <h1 className="Title">{jsonData?.title}</h1>
      </div>
      <div className="BlogBody">
        {jsonData?.content.map((item, index) => {
          if (item.type === "heading") {
            return <h2 key={index} className="BlogHeading">{item.text}</h2>;
          } else if (item.type === "subheading") {
            return <h3 key={index} className="BlogSubheading">{item.text}</h3>;
          } else if (item.type === "paragraph") {
            return <p key={index} className="BlogParagraph">{item.text}</p>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default BlogContent;
