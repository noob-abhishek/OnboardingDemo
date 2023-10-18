import React, { useEffect, useState } from 'react';
import BlogCard from '../BlogCard/BlogCard';
import './Blog.css';
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
    {
      "id": 2,
      "title": "Traveling the World",
      "author": "Jane Smith",
      "date": "2023-10-15",
      "category": "Travel",
      "excerpt": "Join us on a journey to exotic destinations and hidden gems.",
      "image": require('../../images/blog_photo_2.avif')
    },
    {
      "id": 3,
      "title": "Coding for Beginners",
      "author": "Mike Johnson",
      "date": "2023-10-14",
      "category": "Technology",
      "excerpt": "Start your programming journey with our beginner-friendly coding tutorials.",
      "image": require('../../images/blog_photo_3.avif')
    }
  ];

  const [SearchTxt, setSearchTxt] = useState('');
  const [FilteredData, setFilteredData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(''); // pending

  const filterData = (searchText, data) => {
    return data.filter((e) => e.title.toLowerCase().includes(searchText.toLowerCase()));
  };

  const SearchData = (searchText, data) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, data);
      setFilteredData(filteredData);
      if (filteredData.length === 0) {
        setErrorMessage("No matches found");
      } else {
        setErrorMessage("");
      }
    } else {
      setErrorMessage("");
      setFilteredData(data);
    }
  };

  return (
    <>
      <div className='search-container'>
        <input
          type="text"
          value={SearchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button onClick={() => SearchData(SearchTxt, json)}>Search</button>
      </div>

      

      <div className="blog-wrapper">
        <div className="Blog">
          {SearchTxt !== "" ? (    //jab search box k andr ka text is not empty. to mera filtered data show 
            FilteredData.map((post) => (
              <Link to={'/BlogContent/' + post.id} key={post.id} className='link'>
                <BlogCard {...post} />
              </Link>
            ))
          ) : (                                         //jab search box khali hoga to all data will be shown.
            json.map((post) => (
              <Link to={'/BlogContent/' + post.id} key={post.id} className='link'>   
                <BlogCard {...post} />
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
