import React, { Component } from 'react';
import * as actionCreators from '../../store/actions/actionCreators';
import Aux from '../HOC/AuxComp';
import { connect } from 'react-redux';

class FullPost extends Component { 
  state = {data: {...this.props.location.state}}

  shouldComponentUpdate (nextProps, nextState) {
    console.log(this.props.location.state.title);
    if (this.props.location.state.title !== nextProps.location.state.title) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    let post = this.state.data ? (
      <Aux>
        <img src={this.state.data.images._titleImage} alt="" style={{width: "50vw", height: "auto", marginTop: "20px"}}/>
        <h2 style={{fontSize: "32px", fontFamily: "cursive"}}>{this.state.data.title}</h2>
        <h5>{this.state.data.date}</h5>
        <p style={{lineHeight: "2", margin: "20px"}}>{this.state.data.content}</p> 
        <h1>More Posts</h1>
      </Aux>
    ) : null;

    return (
      <Aux>
        {post}
      </Aux>
    )
  }
}

const mapStateToProps = state => {
  return {
      data: state.blogData
  }
};

const mapDispatchToProps = dispatch => {
  return {
      onGetData: () => dispatch(actionCreators.getData(this.props.location.state)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FullPost);