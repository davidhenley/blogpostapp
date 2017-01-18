import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions';
import {Link} from 'react-router';

class PostsNew extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    const { fields: {title, categories, content}, handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.createPost)} className="posts-new">
        <h3>Create A New Post</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <lable>Title</lable>
          <input type="text" className="form-control" {...title} />
          <div className="form-control-feedback">{title.touched ? title.error : ''}</div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <lable>Categories</lable>
          <input type="text" className="form-control" {...categories} />
          <div className="form-control-feedback">{categories.touched ? categories.error : ''}</div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <lable>Content</lable>
          <textarea className="form-control" {...content} />
          <div className="form-control-feedback">{content.touched ? content.error : ''}</div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  // Check if blank
  if (!values.title) errors.title = 'Enter a username';
  if (!values.categories) errors.categories = 'Enter categories';
  if (!values.content) errors.content = 'Enter some content';
  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, {createPost})(PostsNew);
