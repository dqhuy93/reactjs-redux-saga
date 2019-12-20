import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actGetUser } from '../../actions';
import './home.scss';

class Home extends Component {
  componentDidMount() {
    this.props.onGetUser();
  }

  render() {
    const { users } = this.props;

    return (
      <div className="demo">
        <h1>This is Home Page</h1>
        <h2>Example call API</h2>
        <br />
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <strong>{user.name}</strong>
              <div>{user.email}</div>
              <br />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}
function mapDispatchToProps(dispatch) {
  return {
    onGetUser: () => {
      dispatch(actGetUser());
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
