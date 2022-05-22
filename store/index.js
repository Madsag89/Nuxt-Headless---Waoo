const siteURL = "http://madsaj.dk"

export const state = () => ({
  posts: []
})

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts
  },
}

export const actions = {
  async getPosts({ state, commit, dispatch }) {
    try {
      let posts = await fetch(
        `${siteURL}/wp-json/wp/v2/posts`
      ).then(res => res.json())
  
      commit("updatePosts", posts)
    } catch (err) {
      console.log(err)
    }
  },
}
