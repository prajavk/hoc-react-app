import React from "react";
import axios from "axios";

class PromisePost extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    const postIdList = [1, 2, 3];
    this.getData(postIdList);
    // this.getDataWithoutAsync(postIdList);
  }

  getData = async postIdList => {
    try {
      const promiseArray = postIdList.map(el =>
        axios.get(`https://jsonplaceholder.typicode.com/posts/${el}`)
      );
      const results = await Promise.all(promiseArray);
      const newPosts = results.map(result => result.data);
      this.setState(prevState => ({
        posts: [...prevState.posts, ...newPosts]
      }));
    } catch (error) {
      console.log(error);
    }
  };

  getDataWithoutAsync = postIdList => {
    const promiseArray = postIdList.map(post =>
      axios.get(`https://jsonplaceholder.typicode.com/posts/${post}`)
    );
    Promise.all(promiseArray).then(results => {
      const newPosts = results.map(result => result.data);
      this.setState(prevState => ({
        posts: [...prevState.posts, ...newPosts]
      }));
    });
  };

  render() {
    let mypost = null;
    if (!this.state.posts) {
      mypost = <p>Posts are loading...</p>;
    }

    if (this.state.posts) {
      mypost = this.state.posts.map(post => (
        <div key={post.title}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ));
    }

    return mypost;
  }
}

export default PromisePost;
