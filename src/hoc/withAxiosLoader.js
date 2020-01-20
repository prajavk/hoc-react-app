import React from "react";
import axios from "axios";

const withAxiosLoader = (BaseComponent, apiUrl) => {
  class EnhancedComponent extends React.Component {
    state = {
      data: null
    };
    componentDidMount() {
      console.log("axios componentDidMount");
      axios
        .get(apiUrl)
        // axios.get( '/posts?userId=1')
        .then(response => {
          // const posts = response.data.slice(0, 20);
          const posts = response.data;
          this.setState({ data: posts });
        })
        .catch(error => {
          // console.log(error);
          this.setState({ error: true });
        });
    }
    render() {
      if (!this.state.data) {
        return <div>Loading ...</div>;
      }
      return <BaseComponent data={this.state.data} {...this.props} />;
    }
  }
  return EnhancedComponent;
};

export default withAxiosLoader;
