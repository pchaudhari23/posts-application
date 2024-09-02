import { FC, useEffect } from "react";
import { PostType } from "../../../../types";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPostsAction,
  deletePostAction,
  createPostAction,
  updatePostAction,
} from "../../../../slices/postsSlice";
import { RootState } from "../../../../store/reducers";

interface PostProps {
  post: PostType;
}

const Post: FC<PostProps> = ({ post }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts.data);

  const fetchData = async () => {
    await dispatch(fetchPostsAction());
  };

  const deletePostData = (dispatch: any) => {
    dispatch(deletePostAction({ id: 1 }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   dispatch(createPostAction({
  //     id: 1001,
  //     userId: 221,
  //     title: 'A QWERTY',
  //     body: 'CZXVBNMJHGFDF'
  //   }))
  // }, [dispatch])

  // useEffect(() => {
  //   dispatch(updatePostAction({
  //     id: 5,
  //     userId: 1,
  //     title: 'A QWERTY',
  //     body: 'CZXVBNMJHGFDF'
  //   }))
  // }, [dispatch])

  // useEffect(() => {
  //   dispatch(deletePostAction({id: 2}))
  // }, [])

  // console.log(posts)
  return (
    <div>
      {/* <h1>Post</h1> */}
      <Typography variant="h6" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {post.body}
      </Typography>
    </div>
  );
};

export default Post;
