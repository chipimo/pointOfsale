import React = require('react');
import { Paper } from 'react-md';
import { Typography, IconButton, Button } from 'material-ui';
import Close from 'material-ui-icons/Close';
import { Divider } from 'semantic-ui-react';

class Dialog extends React.Component {
  state = { open: false, render: false, type: '' };

  HandleOnChange = type => {
    if (type === 'error') {
      this.setState({ type: 'rgba(255,179,185,0.5)' });
    } else if (type === 'sucess') {
      this.setState({ type: 'rgba(127,181,79,0.5)' });
    } else {
      this.setState({ type: 'rgba(112,131,138,0.7)' });
    }
    this.open(true);
  };

  close = () => {
    if (this.state.open) {
      this.setState({ open: false });
    }
    setTimeout(() => {
      this.renderComponent();
    }, 1000);
  };

  open = e => {
    if (!this.state.open) {
      this.setState({ render: true });
      setTimeout(() => {
        this.setState({ open: this.state.open ? false : true });
      }, 100);
    }
    setTimeout(() => {
      this.renderComponent();
    }, 1000);
  };

  renderComponent = () => {
    this.setState({ render: this.state.open ? true : false });
  };

  render() {
    const { open, render, type } = this.state;
    if (render) {
      return (
        <Paper
          zDepth={4}
          style={{
            position: 'fixed',
            right: 5,
            height: 300,
            transform: open
              ? 'translate3d(0, 0vh, 0)'
              : 'translate3d(0, -50vh, 0)',
            color: '#fff',
            transition: 'all 0.3s ease-in-out',
            zIndex: 200000,
            width: 500,
            background: '#4A5863',
          }}
        >
          <Paper
            style={{
              height: 50,
              color: '#fff',
              background: type,
              padding: 10,
              paddingTop: 14,
            }}
          >
            <Typography
              component="div"
              color="inherit"
              variant="title"
              gutterBottom
            >
              Notification
            </Typography>
            <div style={{ float: 'right', marginTop: -40 }}>
              <IconButton onClick={this.close}>
                <Close style={{ color: '#ccc' }} />
              </IconButton>
            </div>
          </Paper>
          <div
            style={{
              height: 170,
              marginTop: 10,
              overflow: 'auto',
              padding: 10,
            }}
          >
            {this.props.children}
          </div>
          <Divider />
          <div>{this.props.actions}</div>
        </Paper>
      );
    } else {
      return null;
    }
  }
}

export default Dialog;
