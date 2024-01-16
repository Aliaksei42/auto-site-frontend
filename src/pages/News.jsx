// src/pages/News.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from '../components/Posts/Posts';

const News = () => {
  const [allFetchedPosts, setAllFetchedPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3002/posts');
        setAllFetchedPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const newsPosts = allFetchedPosts.filter(post => post.category === 'News');
  const interestingPosts = allFetchedPosts.filter(post => post.category === 'Interesting');

  const postsData = {
    category: newsPosts,
    interesting: interestingPosts,
  };

  return (
    <div>
      <Posts category="News" allPosts={postsData} />
    </div>
  );
};

export default News;
