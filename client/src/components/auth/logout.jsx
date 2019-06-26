import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {NavLink} from 'reactstrap';
import { logout } from "../../actions/authactions";
import PropTypes from 'prop-types';

export class Logout extends Component {
    static propTypes={
        logout: PropTypes.func.isRequired
    }
  render() {
    return (
<Fragment>
    <NavLink onClick={this.props.logout}>Logout</NavLink>
</Fragment>
    );
  }
}

export default connect(
  null,
  { logout }
)(Logout);
