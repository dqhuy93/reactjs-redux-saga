import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPost, filterPost } from '../../actions';
import { Spin, Button, Input } from 'antd';
import './home.scss';

class Home extends Component {
  componentDidMount() {
    const { onFetchPost } = this.props;
    onFetchPost();
  }

  getPost = () => {
    const { onFetchPost } = this.props;
    onFetchPost();
  };

  onSearch = e => {
    const value = e.target.value;
    this.props.filterPost(value);
  };

  render() {
    const { posts, showLoading } = this.props;

    return (
      <div className="demo">
        <h1>This is Home Page</h1>
        <h2>Example call API</h2>
        <div>
          <Button onClick={this.getPost}>Get User</Button>
        </div>
        <br />
        <Input placeholder="Search" onChange={this.onSearch} />
        <br />
        <Spin spinning={showLoading}>
          <ul className="scroll-ul">
            {posts.map(post => (
              <li key={post.id}>
                <strong>{post.title}</strong>
                <div>{post.body}</div>
              </li>
            ))}
          </ul>
        </Spin>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts, showLoading: state.ui.showLoading };
}
function mapDispatchToProps(dispatch) {
  return {
    onFetchPost: bindActionCreators(fetchPost, dispatch),
    filterPost: bindActionCreators(filterPost, dispatch)
    // onGetUser: () => {
    //   dispatch(actGetUser());
    // }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
