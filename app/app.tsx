import React = require('react');
import Login from './main/ui/forms/login/login';
import { Typography, Button } from 'material-ui';
import { Divider, Input, Icon } from 'semantic-ui-react';
import { getYear } from './date/dates';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import { Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Dialog from './dialogs/dialog';
const socketIOClient = require('socket.io-client');
import Mail from 'material-ui-icons/Mail';
import WindowUi from './main/ui/windowUi';

interface LoggerProps {
  active: boolean,
  server: string,
  username: string,
  NEW_ENTERY: boolean,
  ConntionState: string,
  waitRequest: boolean,
  waitTimeout: boolean,
  MsgiconLoading: true,
  Msgicon: string,
  Registarted: boolean,
  LoggedIn: boolean,
  LoggedInLogger: Function,
  msgData: string,
  successful: boolean,
  waitingresponce: boolean,
  DialogActionType: string,
  socket: string,
}

class Logger extends React.Component {
  render() {
    return <Login />;
  }
}

class ErrorMsg extends React.Component {
  render() {
    return (
      <div>
        <Message
          error
          header="There was some errors with your submission"
          list={[
            'You need to provide the server location.',
            'You need to make sure your server is on.',
          ]}
        />
      </div>
    );
  }
}

var d = new Date();
var year = d.getFullYear();

class Accapp extends React.Component<{}, LoggerProps> {
  constructor(props) {
    super(props);
    this.child = React.createRef();
    this.state={
      active: false,
      server: '',
      username: '',
      NEW_ENTERY: false,
      ConntionState: null,
      waitRequest: false,
      waitTimeout: false,
      MsgiconLoading: true,
      Msgicon: 'circle notched',
      Registarted: false,
      LoggedIn: false,
      msgData: null,
      successful: false,
      waitingresponce: false,
      DialogActionType: null,
      socket: null,
    }
  }


  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  HandleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLogger = e => {
    this.setState({ LoggedIn: e });
  };

  initiSocket = (socketUrl, type) => {
    const socket = socketIOClient(socketUrl);

    this.setState({
      socket,
    });

    if (type === 'connect') {
      socket.on('connect', () => {
        this.setState({
          ConntionState: 'Connted to server',
        });
      });
    } else if (type === 'config') {
      socket.on('connect', () => {
        this.setState({
          ConntionState: 'Connted to server',
          NEW_ENTERY: true,
          waitRequest: true,
        });
        setTimeout(() => {
          this.checkServerState;
        }, 50000);
      });
    }
    const { username } = this.state;
    setTimeout(() => {
      if (this.state.NEW_ENTERY) {
        socket.emit('VERIFY_USER', username, this.dataState);
      }
    }, 100);
    socket.on('CONFIRENED', this.newEvent);

    this.setState({ socketUrl: socketUrl });

    setTimeout(() => {
      this.callServerTimeOut();
    }, 40000);
  };

  callServerTimeOut = () => {
    console.log(this.state.ConntionState);

    if (this.state.ConntionState === null) {
      this.handleHide();
      alert('Error: Server Time out ');
    }
  };

  checkServerState = () => {
    if (!this.state.successful) {
      this.setState({
        waitTimeout: false,
        MsgiconLoading: false,
        Msgicon: 'warning sign',
      });
    }
  };

  newEvent = () => {
    alert('You are confiremed');
  };

  dataState = e => {
    if (e) {
      this.setState({ Registarted: true });
    }
    // this.setState({
    //   msgData: <div>Your id is {e.id}</div>,
    //   waitTimeout: false,
    //   MsgiconLoading: false,
    //   Msgicon: 'server',
    //   successful: true,
    //   waitingresponce: true,
    // });
    // this.HandleAlert('sucess', 'open');
    this.props.dispatchEvent({
      type: 'NEW_REG',
      payload: { server: 'http://' + this.state.server },
    });
  };

  submit = () => {
    if (this.state.server) {
      this.handleShow();
      var data = { server: this.state.server, type: 'CONFIG' };
      let server = 'http://' + this.state.server;
      this.initiSocket(server, 'config');
    } else {
      this.setState({ DialogActionType: null });
      setTimeout(() => {
        this.HandleAlert('error', 'open');
      }, 200);
    }
  };

  componentWillMount() {
    this.props.user.User.forEach(element => {
      if (element.server !== 'waiting') {
        this.setState({ Registarted: true });
        this.initiSocket(element.server, 'connect');
      } else if (element.server === 'waiting') {
        this.setState({ Registarted: false });
        this.setState({
          waitingresponce: true,
          MsgiconLoading: false,
          Msgicon: 'server',
          DialogActions: true,
          waitRequest: true,
          DialogActionType: (
            <div style={{ marginLeft: 10 }}>
              <Button
                variant="raised"
                color="default"
                onClick={() => {
                  this.HandleAlert('', 'close');
                  this.setState({
                    waitingresponce: false,
                    MsgiconLoading: true,
                    Msgicon: 'circle notched',
                    DialogActions: false,
                    waitRequest: false,
                  });
                  this.props.dispatchEvent({ type: 'differentServer' });
                }}
              >
                Try a diffrent server
              </Button>
              <Button
                style={{ marginLeft: 10 }}
                variant="flat"
                color="primary"
                className="ActionMailBtn"
              >
                <Mail />
                Send message to server
              </Button>
            </div>
          ),
          msgData: (
            <div style={{ color: '#fff' }}>
              <Typography color="inherit" variant="Caption" gutterBottom>
                You have already submited a request to the server but the server
                has not sent a responce yet, please try to consult your server
                adminstartor for feather instructions
              </Typography>
            </div>
          ),
        });
        setTimeout(() => {
          this.HandleAlert(true, 'open');
        }, 1000);
      } else {
        this.setState({ Registarted: false });
      }
    });
  }

  HandleAlert = (type, event) => {
    if (event === 'open') {
      this.child.current.HandleOnChange(type);
    } else {
      this.child.current.close();
    }
  };

  render() {
    const {
      active,
      server,
      username,
      waitRequest,
      waitTimeout,
      MsgiconLoading,
      Msgicon,
      Registarted,
      msgData,
      successful,
      DialogActionType,
      waitingresponce,
      socket,
      LoggedIn,
    } = this.state;

    return (
      <div>
        {Registarted ? (
          <div>
            {LoggedIn ? (
              <WindowUi />
            ) : (
              <Logger LoggedIn={this.handleLogger} socket={socket} />
            )}
          </div>
        ) : (
          <div
            style={{
              background: 'linear-gradient(to bottom right, #204A5A, #EBDCD5)',
              height: '100vh',
            }}
          >
            <div>
              <Dialog actions={DialogActionType} ref={this.child}>
                {msgData}
              </Dialog>
            </div>
            <div
              style={{
                width: '50%',
                margin: 'auto',
                height: 550,
                paddingTop: 100,
                color: '#fff',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <Typography
                  style={{ color: '#fff' }}
                  variant="display1"
                  gutterBottom
                >
                  Welcome to Accounting Assitant ( point of sale )
                </Typography>
                In some situation you might not be able to use the Typography
                component. Hopefully, you might be able to take advantage of the
                typography keys of the theme.
                <div style={{ marginTop: 40 }}>
                  <Divider inverted />
                  <Typography
                    style={{ color: '#fff' }}
                    variant="title"
                    gutterBottom
                  >
                    To configer point of sale you enter the server location
                    (url)
                  </Typography>
                </div>
                <div style={{ marginTop: 20 }}>
                  {waitRequest ? (
                    <div style={{ textAlign: 'left' }}>
                      <Message negative={waitTimeout} icon>
                        <Icon name={Msgicon} loading={MsgiconLoading} />
                        {waitTimeout ? (
                          <Message.Content>
                            <Message.Header>
                              We're sorry we didn't get any responce from server
                            </Message.Header>
                            Please contact your server adminstartor for
                            verification.
                          </Message.Content>
                        ) : (
                          <Message.Content>
                            {successful ? (
                              <div>
                                <Message.Header>
                                  Your server address was successful
                                </Message.Header>
                                We are waiting for server to responed to your
                                request. This may take some time depending on
                                the server adminstrator.
                              </div>
                            ) : (
                              <div>
                                {waitingresponce ? (
                                  <div>
                                    <Message.Header>
                                      Waiting for server to confirm request
                                    </Message.Header>
                                    We are still waiting for server to responed
                                    to your request. This may take some time
                                    depending on the server adminstrator.
                                  </div>
                                ) : (
                                  <div>
                                    <Message.Header>
                                      Connecting to server
                                    </Message.Header>
                                    Please wait while we connect to server.
                                  </div>
                                )}
                              </div>
                            )}
                          </Message.Content>
                        )}
                      </Message>
                    </div>
                  ) : (
                    <Dimmer.Dimmable dimmed={active}>
                      <Dimmer active={active}>
                        <Loader active={active} indeterminate>
                          Connecting to server
                        </Loader>
                      </Dimmer>

                      <Input
                        onChange={this.HandleChange}
                        name="server"
                        value={server}
                        label="http://"
                        placeholder="localhost:3500"
                      />

                      <br />
                      <br />
                      <Button
                        onClick={this.submit}
                        variant="raised"
                        color="primary"
                      >
                        Configer
                      </Button>
                      <br />
                      <br />
                      <Button color="primary">Need help ?</Button>
                    </Dimmer.Dimmable>
                  )}
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '20%', margin: 'auto', marginTop: 20 }}>
                  <Divider inverted />
                </div>
                Powered by Software Gaints
                <br />
                &copy; {year}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    details: state.company,
    user: state.user,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchEvent: data => dispatch(data),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Accapp);
