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
var react_router_dom_1 = require("react-router-dom");
var WindowUi = /** @class */ (function (_super) {
    __extends(WindowUi, _super);
    function WindowUi() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { rowsPerPage: 5 };
        _this.handlerowsPerPage = function (e) {
            _this.setState({
                rowsPerPage: e,
            });
        };
        return _this;
    }
    WindowUi.prototype.render = function () {
        return (React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(react_md_1.Paper, null, "main")));
    };
    return WindowUi;
}(React.Component));
exports.default = WindowUi;
//# sourceMappingURL=windowUi.js.map