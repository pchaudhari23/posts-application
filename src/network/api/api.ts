import axiosInstance from ".";

export const fetchPosts = async() => {
    try {
        const response = await axiosInstance.get('/posts');
        return response;
    } catch (error) {
        console.log('fetchPosts error', error)
    }
}

export const fetchComments = async() => {
    try {
        const response = await axiosInstance.get('/comments');
        return response;
    } catch (error) {
        console.log('fetchPosts error', error)
    }
}

export const fetchUsers = async() => {
    try {
        const response = await axiosInstance.get('/users');
        return response;
    } catch (error) {
        console.log('fetchPosts error', error)
    }
}