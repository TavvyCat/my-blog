import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Axios from '../../Axios';
import BlogPreview from '../../Components/BlogPreview/BlogPreview';
import FullPost from '../../Components/FullPost/FullPost';

class Blog extends Component {
  constructor (props) {
    super(props);
    this.getData();
  }

  state = {
    data: []
  }

  getData () {
    Axios.get('/blog.json')
      .then(response => {
        console.log(response);
        const data = [];
        for (let blog in response.data) {
          data.push({
            ...response.data[blog]
          })
        }
        console.log(data)
        this.setState({
          data: data
        });
      })
      .catch(error => console.log(error));
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
    const posts = this.sortByDate(this.getDate, this.state.data)
    return (
      <div className="Blog">
        <Route path="/blog/:id" component={FullPost} />
        {posts.map(blog => (
          <NavLink 
            style={{textDecoration: "none", color: "black"}}
            to={{
              pathname: `${this.props.match.url}/${blog.link}`,
              state: {
                title: blog.title,
                content: blog.content,
                images: blog.images,
                date: blog.date
              }
            }}
            key={blog.title}>
            <BlogPreview 
              title={blog.title}
              content={blog.content}
              images={blog.images}
              date={blog.date}/>
          </NavLink>
        ))}
      </div>
    )
  }
}

export default Blog;