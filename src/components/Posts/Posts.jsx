import React, { useState } from 'react';
import Button from '../Button/Button';
import Post from '../Post/Post';
import TopPost from '../TopPost/TopPost';
import SidebarPosts from '../SidebarPosts/SidebarPosts';
import styles from './Posts.module.css';

const Posts = ({ category, allPosts }) => {
  const [visiblePosts, setVisiblePosts] = useState(4);

  const topPost = allPosts.category.find(post => post.place === 'top');

  const handleShowMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 4);
  };

  return (
    <div className={styles.postsContainer}>
      <div className={styles.postsRow}>
        <div className={styles.postsLeft}>
          {topPost && <TopPost topPost={topPost} />}

          <div className={styles.posts}>
            {allPosts.category.filter(post => post.place !== 'top').slice(0, visiblePosts).map(post => (
              <div key={post.slug} className={styles.posts}>
                <Post key={post.slug} post={post} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.postsRight}>
          <SidebarPosts sidebarPosts={allPosts.interesting.slice(0)} />
        </div>
      </div>
      {visiblePosts < allPosts.category.length && (
        <Button onClick={handleShowMore}>Show more</Button>
      )}
    </div>
  );
};

export default Posts;
