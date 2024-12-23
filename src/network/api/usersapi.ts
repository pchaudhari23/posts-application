import axiosInstance from "./index";

export const fetchUsersAPI = async () => {
  try {
    const response = await axiosInstance.get("/users");
    return response;
  } catch (error) {
    console.log("fetchPosts error", error);
  }
};
