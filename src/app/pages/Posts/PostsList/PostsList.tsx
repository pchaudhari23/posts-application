import { FC, useEffect, useState } from "react";
import AppPage from "../../../components/AppPage/AppPage";
import { fetchPostsAPI } from "../../../../network/api/api";
import { PostType } from "../../../../types";
import Post from "../Post/Post";

const PostsList: FC = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const getPosts = async () => {
    const response = await fetchPostsAPI();
    if (response && response.data) {
      setPosts([...posts, response.data[0]]);
    }
    // console.log(posts)
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <AppPage
      title={" Posts"}
      description={"List of posts made by your friends"}
    >
      <div>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </AppPage>
  );
};

export default PostsList;
