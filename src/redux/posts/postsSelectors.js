
const getPosts = state => state.posts.allPosts;
const getPostInfo = state => state.posts.postInfo;
const getCurrentPostId = state => state.posts.currentPostId;
const getUserId = state => state.posts.allPosts[0].userId;


const postsSelectors = {
  getPosts, getPostInfo, getCurrentPostId, getUserId, 
};

export default postsSelectors;
