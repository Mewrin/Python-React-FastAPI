'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    const stateUpdate = { liked: true };
    return React.createElement('button', { onClick: () => this.setState(stateUpdate)},'Like');
  }
}

export {
  LikeButton
}