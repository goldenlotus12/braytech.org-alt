import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';

import manifest from '../../../utils/manifest';
import * as bungie from '../../../utils/bungie';

import './styles.css';

class OAuthTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { t, member } = this.props;

    return (
      <div className='view' id='oauth-test'>
        
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    member: state.member
  };
}

export default compose(
  connect(mapStateToProps),
  withNamespaces()
)(OAuthTest);
