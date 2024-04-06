import { FC, useEffect, useState } from 'react';
import { fetchPosts } from '../../../../network/api/api';
import { PostType } from '../../../../types';
import Post from '../Post/Post';

const PostsList: FC = () => {
  const [posts, setPosts] = useState<PostType[]>([])
  
  const getPosts = async() => {
    const response = await fetchPosts()
    if(response && response.data) {
      setPosts([...posts,response.data[0]])
    }
    console.log(posts)
  }

  useEffect(()=> {
    getPosts()
  },[])

  return (
    <section>
      <h1>PostsList</h1>
      {
        posts.map((post) => 
          <Post
            key = {post.id}
            post = {post}
          />
        )
      }
    </section>
  )
}

export default PostsList