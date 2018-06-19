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
var AppBar_1 = require("material-ui/AppBar");
var Tabs_1 = require("material-ui/Tabs");
var Typography_1 = require("material-ui/Typography");
var NumPad_1 = require("./NumPad/NumPad");
function TabContainer(props) {
    return (React.createElement(Typography_1.default, { component: "div", style: { padding: 8 * 3 } }, props.children));
}
var SideControlViewPort = /** @class */ (function (_super) {
    __extends(SideControlViewPort, _super);
    function SideControlViewPort() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: 0,
        };
        _this.handleChange = function (event, value) {
            _this.setState({ value: value });
        };
        return _this;
    }
    SideControlViewPort.prototype.render = function () {
        var value = this.state.value;
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement(AppBar_1.default, { position: "static" },
                    React.createElement(Tabs_1.default, { value: value, onChange: this.handleChange, scrollable: true, scrollButtons: "auto" },
                        React.createElement(Tabs_1.Tab, { label: "Item One" }),
                        React.createElement(Tabs_1.Tab, { label: "Item Two" }),
                        React.createElement(Tabs_1.Tab, { label: "Item Three", href: "#basic-tabs" }))),
                value === 0 && React.createElement(TabContainer, null,
                    React.createElement(NumPad_1.default, null)),
                value === 1 && React.createElement(TabContainer, null, "Item Two"),
                value === 2 && React.createElement(TabContainer, null, "Item Three"))));
    };
    return SideControlViewPort;
}(React.Component));
exports.default = SideControlViewPort;
//# sourceMappingURL=SideControlViewPort.js.map