import axiosInstance from "./index";

export const fetchCommentForPostAPI = async (postId: number) => {
  try {
    const response = await axiosInstance.get(`/comments/post/${postId}`);
    return response;
  } catch (error) {
    console.log("fetchCommentForPost error", error);
  }
};
