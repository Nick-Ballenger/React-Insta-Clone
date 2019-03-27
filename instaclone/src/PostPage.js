
import React from 'react'
import SearchBar from './SearchBar'
import PostContainer from './PostContainer'
import dummyData from './dummy-data'



class PostsPage extends React.Component {
    constructor() {
      super();
      this.state = {
        posts: [],
        filteredPosts: []
      };
    }
    componentDidMount() {
      this.setState({ posts: dummyData });
    }
  
    searchPostsHandler = e => {
     
      const posts = this.state.posts.filter(post => {
        if (post.username.includes(e.target.value)) {
          
            return post;
        }
      });
      this.setState({ filteredPosts: posts });
    };
    render() {
      return (
        <div className="App">
          <SearchBar
            searchTerm={this.state.searchTerm}
            searchPosts={this.searchPostsHandler}
          />
          <PostContainer
            posts={
              this.state.filteredPosts.length > 0
                ? this.state.filteredPosts
                : this.state.posts
            }
          />
        </div>
      );
    }
  }
  
  export default PostsPage;

