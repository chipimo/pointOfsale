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
var Button_1 = require("material-ui/Button");
var material_ui_1 = require("material-ui");
var react_md_1 = require("react-md");
var CustomerViewPot = /** @class */ (function (_super) {
    __extends(CustomerViewPot, _super);
    function CustomerViewPot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomerViewPot.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", { style: { paddingTop: 10, paddingLeft: 10 } },
                React.createElement("div", { style: {} },
                    React.createElement("div", { style: { width: 100, height: 100, background: '#ccc' } }, "prof"),
                    React.createElement("div", { style: { position: 'absolute', marginTop: -100, marginLeft: 110 } },
                        React.createElement(material_ui_1.Typography, { style: { marginBottom: 5 }, variant: "title" }, "Cutomer Name"),
                        React.createElement(material_ui_1.Divider, null),
                        React.createElement(material_ui_1.Typography, { variant: "subheading" }, "Cutomer contact number"),
                        React.createElement(material_ui_1.Typography, { variant: "subheading" }, "Cutomer email"),
                        React.createElement(material_ui_1.Typography, { variant: "subheading" }, "Cutomer location")),
                    React.createElement("div", { style: { marginTop: 10 } },
                        React.createElement(Button_1.default, { variant: "raised", color: "primary" }, "Add new cutomer"))),
                React.createElement("div", { style: { position: 'absolute', marginTop: -140, marginLeft: 400 } },
                    React.createElement(react_md_1.Paper, { style: { width: 520, height: 150, padding: 10 } },
                        React.createElement(material_ui_1.Typography, { style: { marginBottom: 5 }, variant: "title" }, "Total (k)"),
                        React.createElement(material_ui_1.Typography, { style: { marginBottom: 5 }, variant: "title" }, "Paid (k)"),
                        React.createElement(material_ui_1.Typography, { style: { marginBottom: 5 }, variant: "title" }, "Change (k)"),
                        React.createElement("div", { style: { marginTop: 20 } },
                            React.createElement(Button_1.default, { variant: "raised", color: "secondary" }, "Make Payment"),
                            React.createElement(Button_1.default, { variant: "raised", color: "secondary", style: { marginLeft: 10 } }, "Make payment and save"),
                            React.createElement(Button_1.default, { variant: "raised", style: { marginLeft: 10 } }, "Creadit")))))));
    };
    return CustomerViewPot;
}(React.Component));
exports.default = CustomerViewPot;
//# sourceMappingURL=CustomerViewPot.js.map