import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommentState {
  error: Boolean;
  loading: Boolean;
  data: any;
}

const commentsInitial: CommentState = {
  loading: false,
  error: false,
  data: null,
};

const commentsSlice = createSlice({
  name: "Comments-Slice",
  initialState: commentsInitial,
  reducers: {
    fetchCommentForPostAction: (state, action: PayloadAction<number>) => {
      state.loading = true;
      state.error = false;
      state.data = action.payload;
    },
    fetchCommentForPostSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = false;
      state.data = action.payload;
    },
    fetchCommentForPostFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = true;
      state.data = action.payload;
    },
  },
});

export const {
  fetchCommentForPostAction,
  fetchCommentForPostSuccess,
  fetchCommentForPostFailure,
} = commentsSlice.actions;

export default commentsSlice.reducer;
