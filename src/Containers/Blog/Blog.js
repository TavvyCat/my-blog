import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Axios from '../../Axios';
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler';
import BlogPreview from '../../Components/BlogPreview/BlogPreview';
import FullPost from '../../Components/FullPost/FullPost';
import Classes from './Blog.css';
import * as actions from '../../store/actions/index';
import Aux from '../../HOC/AuxComp/AuxComp';

class Blog extends Component {
  componentDidMount() {
    this.props.onFetchBlogData();
  }

  getDate (post) {
    return post.date;
  }

  sortByDate (getDate, posts) {
    return posts.sort(function (a, b) {
        let A = getDate(a);
        let B = getDate(b);

        if (A < B) {
            return -1;
        } else if (A > B) {
            return 1;
        } else {
            return 0;
        }
    });
  };

  render() {
    const posts = this.props.blogData ? this.sortByDate(this.getDate, this.props.blogData) : null;
    const postsEl = posts ? 
      posts.map(blog => (
        <NavLink 
          style={{textDecoration: "none", color: "black"}}
          to={{
            pathname: `${this.props.match.url}/${blog.link}`,
            state: {
              title: blog.title,
              content: blog.content,
              titleImage: blog.titleImage,
              otherImages: blog.otherImages,
              date: blog.date
            }
          }}
          key={blog.title}>
          <BlogPreview 
            title={blog.title}
            titleImage={blog.titleImage}
            content={blog.content}
            date={blog.date}/>
        </NavLink>
      )) : null;
    return (
      <Aux>
        <h1>Blog Posts</h1>
        <div className={Classes.Blog}>
          <Route path="/blog/:id" component={FullPost} />
          {postsEl}
        </div>
      </Aux>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    blogData: state.blogData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchBlogData: () => dispatch(actions.fetchBlogData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Blog, Axios));