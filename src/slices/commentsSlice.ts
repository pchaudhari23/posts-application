import { createSlice } from '@reduxjs/toolkit';

const commentsInitial = {
    loading: false,
    error: false,
    data: null
}

const commentsSlice = createSlice({
    name: 'Comments-Slice',
    initialState: commentsInitial,
    reducers: {
        fetchComments: (state) => {
            state.loading = true;
            state.error = false;
        },
        fetchCommentsSuccess: () => {},
        fetchCommentsFailure: (state) => {
            state.loading = false;
            state.error = true;
        },
    }
})

export const {
    fetchComments,
    fetchCommentsSuccess,
    fetchCommentsFailure
} = commentsSlice.actions;

export default commentsSlice.reducer;