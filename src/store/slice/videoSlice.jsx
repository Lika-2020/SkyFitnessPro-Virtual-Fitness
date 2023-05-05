/* import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchVideoById } from '../../api/api';

const videoSlice = createSlice({
  name: 'video',
  initialState: {
    videoData: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchVideoStart: (state) => ({
      ...state,
      isLoading: true,
    }),
    fetchVideoSuccess: (state, action) => ({
      ...state,
      isLoading: false,
      ...state,
      videoData: action.payload,
      ...state,
      error: null,
    }),
    fetchVideoFailure: (state, action) => ({
      ...state,
      isLoading: false,
      ...state,
      videoData: null,
      ...state,
      error: action.payload,
    }),
  },
});

export const fetchVideo = createAsyncThunk('video/fetch', async (id) => {
  const response = await fetchVideoById(id);
  return response;
});

export const { fetchVideoStart, fetchVideoSuccess, fetchVideoFailure } =
  videoSlice.actions;

export default videoSlice.reducer;

export const selectVideoData = (state) => state.video.videoData; */
