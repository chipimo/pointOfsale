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
var react_md_1 = require("react-md");
var material_ui_1 = require("material-ui");
var Close_1 = require("material-ui-icons/Close");
var semantic_ui_react_1 = require("semantic-ui-react");
var Dialog = /** @class */ (function (_super) {
    __extends(Dialog, _super);
    function Dialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { open: false, render: false, type: '' };
        _this.HandleOnChange = function (type) {
            if (type === 'error') {
                _this.setState({ type: 'rgba(255,179,185,0.5)' });
            }
            else if (type === 'sucess') {
                _this.setState({ type: 'rgba(127,181,79,0.5)' });
            }
            else {
                _this.setState({ type: 'rgba(112,131,138,0.7)' });
            }
            _this.open(true);
        };
        _this.close = function () {
            if (_this.state.open) {
                _this.setState({ open: false });
            }
            setTimeout(function () {
                _this.renderComponent();
            }, 1000);
        };
        _this.open = function (e) {
            if (!_this.state.open) {
                _this.setState({ render: true });
                setTimeout(function () {
                    _this.setState({ open: _this.state.open ? false : true });
                }, 100);
            }
            setTimeout(function () {
                _this.renderComponent();
            }, 1000);
        };
        _this.renderComponent = function () {
            _this.setState({ render: _this.state.open ? true : false });
        };
        return _this;
    }
    Dialog.prototype.render = function () {
        var _a = this.state, open = _a.open, render = _a.render, type = _a.type;
        if (render) {
            return (React.createElement(react_md_1.Paper, { zDepth: 4, style: {
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
                } },
                React.createElement(react_md_1.Paper, { style: {
                        height: 50,
                        color: '#fff',
                        background: type,
                        padding: 10,
                        paddingTop: 14,
                    } },
                    React.createElement(material_ui_1.Typography, { component: "div", color: "inherit", variant: "title", gutterBottom: true }, "Notification"),
                    React.createElement("div", { style: { float: 'right', marginTop: -40 } },
                        React.createElement(material_ui_1.IconButton, { onClick: this.close },
                            React.createElement(Close_1.default, { style: { color: '#ccc' } })))),
                React.createElement("div", { style: {
                        height: 170,
                        marginTop: 10,
                        overflow: 'auto',
                        padding: 10,
                    } }, this.props.children),
                React.createElement(semantic_ui_react_1.Divider, null),
                React.createElement("div", null, this.props.actions)));
        }
        else {
            return null;
        }
    };
    return Dialog;
}(React.Component));
exports.default = Dialog;
//# sourceMappingURL=dialog.js.map