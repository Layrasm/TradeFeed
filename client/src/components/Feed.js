import React from 'react';
import '../Feed.css';
import PostBox from './PostBox';


function Feed() {
  return (
    <div className="feed">
      <div className="feedHeader">
        <h2>Home</h2>

      </div>
      <PostBox />

    </div>
  )
}

export default Feed
