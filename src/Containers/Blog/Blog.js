import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Axios from '../../Axios';
import BlogPreview from '../../Components/BlogPreview/BlogPreview';

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
        const data = [];
        for (let blog in response.data) {
          data.push({
            ...response.data[blog]
          })
        }
        this.setState({
          data: data
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="Blog">
        {this.state.data.map(blog => (
          <NavLink 
            to={{
              pathname: `${this.props.match.url}/${blog.link}`,
              aboutProps: {
                title: blog.title,
                content: blog.content,
                imgFile: blog.images.titleImage.file,
                imgName: blog.images.titleImage.imageName,
                date: blog.date
              }
            }}
            key={blog.title}>
            <BlogPreview 
              title={blog.title}
              content={blog.content}
              imgFile={blog.images.titleImage.file}
              imgName={blog.images.titleImage.imageName}
              date={blog.date}/>
          </NavLink>
        ))}
      </div>
    )
  }
}

export default Blog;