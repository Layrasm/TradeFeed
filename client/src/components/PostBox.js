import React from 'react';
import "../PostBox.css";
import { Button, Avatar } from '@material-ui/core';

const PostBox = () => {
  return (
    <div className="postBox">
      <form>
        <div className="postBoxInput">
          <Avatar />
          <input placeholder="What's happening?" type="text" className="textField" contenteditable="true" />
        </div>
        <Button>Post</Button>
      </form>

    </div>
  )
}

export default PostBox; 