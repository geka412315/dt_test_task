import api from '../api';

const getPosts = async () => {
  try {
    const res = await api.get(
      'https://simple-blog-api.crew.red/posts?_embed=comments'
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const getPost = async (id: number) => {
  try {
    const res = await api.get(
      `https://simple-blog-api.crew.red/posts/${id}?_embed=comments`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const addPost = async formData => {
  try {
    const res = await api.post(
      'https://simple-blog-api.crew.red/posts',
      {
        title: formData.title,
        body: formData.body,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export default {
  getPost,
  getPosts,
  addPost,
};
