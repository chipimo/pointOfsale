"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var login_1 = require("./main/ui/forms/login/login");
var material_ui_1 = require("material-ui");
var semantic_ui_react_1 = require("semantic-ui-react");
var semantic_ui_react_2 = require("semantic-ui-react");
var semantic_ui_react_3 = require("semantic-ui-react");
var react_redux_1 = require("react-redux");
var dialog_1 = require("./dialogs/dialog");
var socketIOClient = require('socket.io-client');
var Mail_1 = require("material-ui-icons/Mail");
var windowUi_1 = require("./main/ui/windowUi");
var Logger = /** @class */ (function (_super) {
    __extends(Logger, _super);
    function Logger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Logger.prototype.render = function () {
        return React.createElement(login_1.default, null);
    };
    return Logger;
}(React.Component));
var ErrorMsg = /** @class */ (function (_super) {
    __extends(ErrorMsg, _super);
    function ErrorMsg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorMsg.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(semantic_ui_react_3.Message, { error: true, header: "There was some errors with your submission", list: [
                    'You need to provide the server location.',
                    'You need to make sure your server is on.',
                ] })));
    };
    return ErrorMsg;
}(React.Component));
var d = new Date();
var year = d.getFullYear();
var Accapp = /** @class */ (function (_super) {
    __extends(Accapp, _super);
    function Accapp(props) {
        var _this = _super.call(this, props) || this;
        _this.handleShow = function () { return _this.setState({ active: true }); };
        _this.handleHide = function () { return _this.setState({ active: false }); };
        _this.HandleChange = function (e) {
            _this.setState((_a = {},
                _a[e.target.name] = e.target.value,
                _a));
            var _a;
        };
        _this.handleLogger = function (e) {
            _this.setState({ LoggedIn: e });
        };
        _this.initiSocket = function (socketUrl, type) {
            var socket = socketIOClient(socketUrl);
            _this.setState({
                socket: socket,
            });
            if (type === 'connect') {
                socket.on('connect', function () {
                    _this.setState({
                        ConntionState: 'Connted to server',
                    });
                });
            }
            else if (type === 'config') {
                socket.on('connect', function () {
                    _this.setState({
                        ConntionState: 'Connted to server',
                        NEW_ENTERY: true,
                        waitRequest: true,
                    });
                    setTimeout(function () {
                        _this.checkServerState;
                    }, 50000);
                });
            }
            var username = _this.state.username;
            setTimeout(function () {
                if (_this.state.NEW_ENTERY) {
                    socket.emit('VERIFY_USER', username, _this.dataState);
                }
            }, 100);
            socket.on('CONFIRENED', _this.newEvent);
            _this.setState({ socketUrl: socketUrl });
            setTimeout(function () {
                _this.callServerTimeOut();
            }, 40000);
        };
        _this.callServerTimeOut = function () {
            console.log(_this.state.ConntionState);
            if (_this.state.ConntionState === null) {
                _this.handleHide();
                alert('Error: Server Time out ');
            }
        };
        _this.checkServerState = function () {
            if (!_this.state.successful) {
                _this.setState({
                    waitTimeout: false,
                    MsgiconLoading: false,
                    Msgicon: 'warning sign',
                });
            }
        };
        _this.newEvent = function () {
            alert('You are confiremed');
        };
        _this.dataState = function (e) {
            if (e) {
                _this.setState({ Registarted: true });
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
            _this.props.dispatchEvent({
                type: 'NEW_REG',
                payload: { server: 'http://' + _this.state.server },
            });
        };
        _this.submit = function () {
            if (_this.state.server) {
                _this.handleShow();
                var data = { server: _this.state.server, type: 'CONFIG' };
                var server = 'http://' + _this.state.server;
                _this.initiSocket(server, 'config');
            }
            else {
                _this.setState({ DialogActionType: null });
                setTimeout(function () {
                    _this.HandleAlert('error', 'open');
                }, 200);
            }
        };
        _this.HandleAlert = function (type, event) {
            if (event === 'open') {
                _this.child.current.HandleOnChange(type);
            }
            else {
                _this.child.current.close();
            }
        };
        _this.child = React.createRef();
        _this.state = {
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
        };
        return _this;
    }
    Accapp.prototype.componentWillMount = function () {
        var _this = this;
        this.props.user.User.forEach(function (element) {
            if (element.server !== 'waiting') {
                _this.setState({ Registarted: true });
                _this.initiSocket(element.server, 'connect');
            }
            else if (element.server === 'waiting') {
                _this.setState({ Registarted: false });
                _this.setState({
                    waitingresponce: true,
                    MsgiconLoading: false,
                    Msgicon: 'server',
                    DialogActions: true,
                    waitRequest: true,
                    DialogActionType: (React.createElement("div", { style: { marginLeft: 10 } },
                        React.createElement(material_ui_1.Button, { variant: "raised", color: "default", onClick: function () {
                                _this.HandleAlert('', 'close');
                                _this.setState({
                                    waitingresponce: false,
                                    MsgiconLoading: true,
                                    Msgicon: 'circle notched',
                                    DialogActions: false,
                                    waitRequest: false,
                                });
                                _this.props.dispatchEvent({ type: 'differentServer' });
                            } }, "Try a diffrent server"),
                        React.createElement(material_ui_1.Button, { style: { marginLeft: 10 }, variant: "flat", color: "primary", className: "ActionMailBtn" },
                            React.createElement(Mail_1.default, null),
                            "Send message to server"))),
                    msgData: (React.createElement("div", { style: { color: '#fff' } },
                        React.createElement(material_ui_1.Typography, { color: "inherit", variant: "Caption", gutterBottom: true }, "You have already submited a request to the server but the server has not sent a responce yet, please try to consult your server adminstartor for feather instructions"))),
                });
                setTimeout(function () {
                    _this.HandleAlert(true, 'open');
                }, 1000);
            }
            else {
                _this.setState({ Registarted: false });
            }
        });
    };
    Accapp.prototype.render = function () {
        var _a = this.state, active = _a.active, server = _a.server, username = _a.username, waitRequest = _a.waitRequest, waitTimeout = _a.waitTimeout, MsgiconLoading = _a.MsgiconLoading, Msgicon = _a.Msgicon, Registarted = _a.Registarted, msgData = _a.msgData, successful = _a.successful, DialogActionType = _a.DialogActionType, waitingresponce = _a.waitingresponce, socket = _a.socket, LoggedIn = _a.LoggedIn;
        return (React.createElement("div", null, Registarted ? (React.createElement("div", null, LoggedIn ? (React.createElement(windowUi_1.default, null)) : (React.createElement(Logger, { LoggedIn: this.handleLogger, socket: socket })))) : (React.createElement("div", { style: {
                background: 'linear-gradient(to bottom right, #204A5A, #EBDCD5)',
                height: '100vh',
            } },
            React.createElement("div", null,
                React.createElement(dialog_1.default, { actions: DialogActionType, ref: this.child }, msgData)),
            React.createElement("div", { style: {
                    width: '50%',
                    margin: 'auto',
                    height: 550,
                    paddingTop: 100,
                    color: '#fff',
                } },
                React.createElement("div", { style: { textAlign: 'center' } },
                    React.createElement(material_ui_1.Typography, { style: { color: '#fff' }, variant: "display1", gutterBottom: true }, "Welcome to Accounting Assitant ( point of sale )"),
                    "In some situation you might not be able to use the Typography component. Hopefully, you might be able to take advantage of the typography keys of the theme.",
                    React.createElement("div", { style: { marginTop: 40 } },
                        React.createElement(semantic_ui_react_1.Divider, { inverted: true }),
                        React.createElement(material_ui_1.Typography, { style: { color: '#fff' }, variant: "title", gutterBottom: true }, "To configer point of sale you enter the server location (url)")),
                    React.createElement("div", { style: { marginTop: 20 } }, waitRequest ? (React.createElement("div", { style: { textAlign: 'left' } },
                        React.createElement(semantic_ui_react_3.Message, { negative: waitTimeout, icon: true },
                            React.createElement(semantic_ui_react_1.Icon, { name: Msgicon, loading: MsgiconLoading }),
                            waitTimeout ? (React.createElement(semantic_ui_react_3.Message.Content, null,
                                React.createElement(semantic_ui_react_3.Message.Header, null, "We're sorry we didn't get any responce from server"),
                                "Please contact your server adminstartor for verification.")) : (React.createElement(semantic_ui_react_3.Message.Content, null, successful ? (React.createElement("div", null,
                                React.createElement(semantic_ui_react_3.Message.Header, null, "Your server address was successful"),
                                "We are waiting for server to responed to your request. This may take some time depending on the server adminstrator.")) : (React.createElement("div", null, waitingresponce ? (React.createElement("div", null,
                                React.createElement(semantic_ui_react_3.Message.Header, null, "Waiting for server to confirm request"),
                                "We are still waiting for server to responed to your request. This may take some time depending on the server adminstrator.")) : (React.createElement("div", null,
                                React.createElement(semantic_ui_react_3.Message.Header, null, "Connecting to server"),
                                "Please wait while we connect to server."))))))))) : (React.createElement(semantic_ui_react_2.Dimmer.Dimmable, { dimmed: active },
                        React.createElement(semantic_ui_react_2.Dimmer, { active: active },
                            React.createElement(semantic_ui_react_2.Loader, { active: active, indeterminate: true }, "Connecting to server")),
                        React.createElement(semantic_ui_react_1.Input, { onChange: this.HandleChange, name: "server", value: server, label: "http://", placeholder: "localhost:3500" }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement(material_ui_1.Button, { onClick: this.submit, variant: "raised", color: "primary" }, "Configer"),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement(material_ui_1.Button, { color: "primary" }, "Need help ?"))))),
                React.createElement("div", { style: { textAlign: 'center' } },
                    React.createElement("div", { style: { width: '20%', margin: 'auto', marginTop: 20 } },
                        React.createElement(semantic_ui_react_1.Divider, { inverted: true })),
                    "Powered by Software Gaints",
                    React.createElement("br", null),
                    "\u00A9 ",
                    year))))));
    };
    return Accapp;
}(React.Component));
function mapStateToProps(state) {
    return {
        details: state.company,
        user: state.user,
    };
}
var mapDispatchToProps = function (dispatch) {
    return {
        dispatchEvent: function (data) { return dispatch(data); },
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Accapp);
//# sourceMappingURL=app.js.map