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
var paths_1 = require("../../../../../../assets/img/icons/paths");
var semantic_ui_react_1 = require("semantic-ui-react");
var settings_1 = require("material-ui-icons/settings");
var IconButton_1 = require("material-ui/IconButton");
var Tooltip_1 = require("material-ui/Tooltip");
var ShoppingCart_1 = require("material-ui-icons/ShoppingCart");
var Assignment_1 = require("material-ui-icons/Assignment");
var AccountCircle_1 = require("material-ui-icons/AccountCircle");
var LogoMenu = /** @class */ (function (_super) {
    __extends(LogoMenu, _super);
    function LogoMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { searchWidth: 300, inputWidth: 270 };
        _this.businessLabel = function () { };
        return _this;
    }
    LogoMenu.prototype.render = function () {
        var _this = this;
        var _a = this.state, searchWidth = _a.searchWidth, inputWidth = _a.inputWidth;
        return (React.createElement("div", { style: { paddingTop: 10, paddingLeft: 20, width: '100%' } },
            React.createElement("div", null,
                React.createElement("div", { style: { display: 'inline-block' } },
                    React.createElement(semantic_ui_react_1.Image, { src: paths_1.iconPath + '/logo.png', avatar: true }),
                    React.createElement("span", { style: { color: '#ccc' } }, "Company name")),
                React.createElement("div", { style: { display: 'inline-block', marginTop: -20, marginLeft: 20 } },
                    React.createElement("div", { style: {
                            background: 'rgba(255,255,255,0.3)',
                            height: 30,
                            borderRadius: 2,
                        } },
                        React.createElement("input", { style: {
                                transition: 'all 0.5s',
                                background: 'transparent',
                                border: 'none',
                                paddingLeft: 10,
                                outline: 'none',
                                height: 30,
                                width: inputWidth,
                                color: '#fff',
                            }, placeholder: "Search", onFocus: function () { return _this.setState({ inputWidth: 400 }); }, onBlur: function () { return _this.setState({ inputWidth: 270 }); } }),
                        React.createElement(semantic_ui_react_1.Icon, { name: "search", style: { color: '#ccc', paddingRight: 20, } }))),
                React.createElement("div", { style: {
                        position: 'absolute',
                        marginTop: -35,
                        marginLeft: 950,
                        textAlign: 'right',
                    } },
                    React.createElement(Tooltip_1.default, { title: "Point of sale" },
                        React.createElement(IconButton_1.default, null,
                            React.createElement(ShoppingCart_1.default, { style: { color: '#6CFBFF' } }))),
                    React.createElement(Tooltip_1.default, { title: "Stock Control" },
                        React.createElement(IconButton_1.default, null,
                            React.createElement(Assignment_1.default, { style: { color: '#fff' } }))),
                    React.createElement(Tooltip_1.default, { title: "Stock Control" },
                        React.createElement(IconButton_1.default, null,
                            React.createElement(settings_1.default, { style: { color: '#fff' } }))),
                    React.createElement(IconButton_1.default, null,
                        React.createElement(AccountCircle_1.default, { style: { color: '#fff' } })),
                    React.createElement("span", { style: { color: '#fff' } }, "melvlin chipimo")))));
    };
    return LogoMenu;
}(React.Component));
exports.default = LogoMenu;
//# sourceMappingURL=logoMenu.js.map