//this is our top level components that will connect what we received from the API with our avatar components. without redux we just called the components in here and passed state as props where needed. Here we will connect etc...

//looks like were passing it selectors, actions, and components

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAvatarsSelector } from '../selectors/AvatarSelector';
import Avatars from '../components/avatars/Avatars';
import { fetchAvatars } from '../actions/AvatarActions';

//were calling the components here and then AllAvatars is called in App, which is passed the store(global state)

class AllAvatars extends PureComponent {
  //if were calling everything in here, where does state get updated and how then does this.props.avatars have the list we need  
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    avatars: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return <Avatars avatarList={this.props.avatars} />;
  }
}

const mapStateToProps = state => ({
  avatars: getAvatarsSelector(state)
});

const mapDispatchToProps = dispatch => ({
  fetch(){
    dispatch(fetchAvatars());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllAvatars);


