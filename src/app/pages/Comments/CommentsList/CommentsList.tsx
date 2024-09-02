import { FC, useEffect, useState } from "react";
// import { fetchComments } from "../../../../network/api/api";
// import { CommentType } from "../../../../types";
// import Comment from "../Comment/Comment";

const CommentsList: FC = () => {
  // const [comments, setComments] = useState<CommentType[]>([]);

  // const getComments = async () => {
  //   const response = await fetchComments();
  //   if (response && response.data) {
  //     setComments(response.data);
  //   }
  //   console.log(comments);
  // };

  // useEffect(() => {
  //   getComments();
  // });

  return (
    <div>
      <h1>Comments List</h1>
      {/* {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))} */}
    </div>
  );
};

export default CommentsList;
