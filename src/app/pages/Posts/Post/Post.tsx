import { FC } from 'react';
import { PostType } from '../../../../types';
import { Typography } from '@mui/material';

interface PostProps {
  post: PostType
}

const Post: FC<PostProps> = ({ post }) => {

  return (
    <div>
      {/* <h1>Post</h1> */}
      <Typography variant="h6" gutterBottom>{post.title}</Typography>
      <Typography variant="subtitle1" gutterBottom>{post.body}</Typography>
    </div>
  )
}

export default Post