import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {fetchPosts} from '../actions';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div className="posts-index">
        <div className="text-right">
          <Link to="/posts/new" className="btn btn-primary">Add a Post</Link>
        </div>
        List of blog posts
      </div>
    );
  }
}

export default connect(null, {fetchPosts})(PostsIndex);
