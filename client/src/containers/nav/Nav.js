import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logoutEmployer, logoutSeeker } from '../../actions';

import './temp.css';

import NavConst from './NavConst';
import loggedInJobSeeker from '../../reducers/loggedInJobSeeker';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
      name: ['Kevin'],
      postsAva: ['1'],
      freeCall: ['3'],
      credits: ['20'],
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const currentState = this.state.isOpen;
    this.setState({ isOpen: !currentState });
  }

  logout() {
    if (this.props.userType === "Employer") {
      this.props.logoutEmployer();
      this.props.history.push('/');
    } else if (this.props.userType === "Seeker") {
      this.props.logoutSeeker();
      this.props.history.push('/');
    } else {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="nav_container">
        <div className="navContainer">
          <NavConst
            name={this.state.name}
            postsAva={this.state.postsAva}
            freeCall={this.state.freeCall}
            credits={this.state.credits}
          />          
          <a href="/login" className="nav_link">
                <h3 onClick={ () => this.logout() }> Sign Out </h3>
          </a>
          <h4 className={this.state.isOpen ? 'collapse' : 'collapse_open'} onClick={ () => this.toggle() }>
            |||
          </h4>
        </div>
        <div
          className={this.state.isOpen ? 'nav_collapse' : 'nav_collapse_open'}
          onClick={this.toggle} // this toggles the auto-close
        >
          <a href="/" class="nav_link">
            <h3> Home </h3>
          </a>
          <a href="/profile" class="nav_link">
            <h3> Profile </h3>
          </a>
          <a href="/matches" class="nav_link">
            <h3> Matches </h3>
          </a>
          <a href="/browse" class="nav_link">
            <h3> Job Postings </h3>
          </a>
          <a href="/billing" class="nav_link">
            <h3> Billing </h3>
          </a>
          <hr />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  if (state.loggedInJobSeeker) {
    return {
      userType: "Seeker"
    }
  } else if (state.loggedinEmployer) {
    return { 
      userType: "Employer"
    }
  }
}

export default withRouter(connect(mapStateToProps, { logoutEmployer, logoutSeeker })(Nav));