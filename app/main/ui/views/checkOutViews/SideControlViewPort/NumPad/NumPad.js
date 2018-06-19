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
var NumPad = /** @class */ (function (_super) {
    __extends(NumPad, _super);
    function NumPad() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumPad.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("ul", { id: "keyboard" },
                React.createElement("li", { className: "letter" }, "1"),
                React.createElement("li", { className: "letter" }, "2"),
                React.createElement("li", { className: "letter" }, "3"),
                React.createElement("li", { className: "letter clearl" }, "4"),
                React.createElement("li", { className: "letter" }, "5"),
                React.createElement("li", { className: "letter" }, "6"),
                React.createElement("li", { className: "letter clearl" }, "7"),
                React.createElement("li", { className: "letter " }, "8"),
                React.createElement("li", { className: "letter" }, "9"),
                React.createElement("li", { className: "letter" }, "0"),
                React.createElement("li", { className: "switch" }, "abc"),
                React.createElement("li", { className: "return" }, "retur"),
                React.createElement("li", { className: "delete lastitem" }, "x"))));
    };
    return NumPad;
}(React.Component));
exports.default = NumPad;
//# sourceMappingURL=NumPad.js.map