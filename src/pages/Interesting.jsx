// src/pages/Interesting.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from '../components/Posts/Posts';

const Interesting = () => {
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

  const categoryPosts = allFetchedPosts.filter(post => post.category === 'Interesting');
  const interestingPosts = allFetchedPosts.filter(post => post.category !== 'Interesting');

  const postsData = {
    category: categoryPosts,
    interesting: interestingPosts,
  };

  return (
    <div>
      <Posts category="Interesting" allPosts={postsData} />
    </div>
  );
};

export default Interesting;
